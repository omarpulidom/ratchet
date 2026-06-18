import { seed } from "../_mocks/seed";
import { db } from "../_mocks/db";
import { delay } from "../_mocks/delay";
import { bus } from "../_mocks/eventBus";
import { canPostCheckinInGroup, postCheckin } from "../_mocks/streakEngine";
import { CheckinSchema, type Checkin, type CheckinGroup } from "./Checkins.Schemas";

let initialized = false;
const ensureInit = () => {
  if (!initialized) {
    seed();
    initialized = true;
  }
};

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const sameDay = (a: string, b: string) => {
  const x = new Date(a);
  const y = new Date(b);
  return x.getFullYear() === y.getFullYear() && x.getMonth() === y.getMonth() && x.getDate() === y.getDate();
};

export const CheckinsService = {
  async listFeed(userId: string): Promise<Checkin[]> {
    ensureInit();
    await delay();
    const myGroupIds = db.memberships.filter((m) => m.userId === userId).map((m) => m.groupId);
    const peersInMyGroups = db.memberships
      .filter((m) => myGroupIds.includes(m.groupId))
      .map((m) => m.userId);
    const eligibleUserIds = Array.from(new Set([userId, ...peersInMyGroups]));
    return db.checkins
      .filter((c) => eligibleUserIds.includes(c.userId) && c.syncStatus !== "failed")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((c) => CheckinSchema.parse(c));
  },

  async listByGroup(groupId: string): Promise<Checkin[]> {
    ensureInit();
    await delay();
    const ids = db.checkinGroups.filter((cg) => cg.groupId === groupId).map((cg) => cg.checkinId);
    return db.checkins
      .filter((c) => ids.includes(c.id))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((c) => CheckinSchema.parse(c));
  },

  async listByUser(userId: string): Promise<Checkin[]> {
    ensureInit();
    await delay();
    return db.checkins
      .filter((c) => c.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((c) => CheckinSchema.parse(c));
  },

  async getById(id: string): Promise<Checkin | null> {
    ensureInit();
    await delay();
    const found = db.checkins.find((c) => c.id === id);
    return found ? CheckinSchema.parse(found) : null;
  },

  async groupsForCheckin(checkinId: string): Promise<CheckinGroup[]> {
    ensureInit();
    return db.checkinGroups.filter((cg) => cg.checkinId === checkinId);
  },

  async canPostInGroup(userId: string, groupId: string): Promise<boolean> {
    ensureInit();
    return canPostCheckinInGroup(userId, groupId);
  },

  async create(input: {
    userId: string;
    caption?: string;
    mediaUri: string;
    location?: string;
    groupIds: string[];
  }): Promise<Checkin> {
    ensureInit();
    await delay();
    for (const groupId of input.groupIds) {
      if (!canPostCheckinInGroup(input.userId, groupId)) {
        throw new Error(`Ya publicaste un check-in en el grupo ${groupId} hoy`);
      }
    }
    const checkin: Checkin = {
      id: `c-${Date.now()}`,
      userId: input.userId,
      caption: input.caption,
      mediaUri: input.mediaUri,
      location: input.location,
      createdAt: new Date().toISOString(),
      syncStatus: "synced",
    };
    postCheckin(checkin, input.groupIds);
    bus.emit("checkins:changed", undefined);
    return CheckinSchema.parse(checkin);
  },
};
