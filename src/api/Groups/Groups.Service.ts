import { seed } from "../_mocks/seed";
import { db } from "../_mocks/db";
import { delay } from "../_mocks/delay";
import { bus } from "../_mocks/eventBus";
import { GroupSchema, type Group, type Membership } from "./Groups.Schemas";
import { z } from "zod";

const GroupsArraySchema = z.array(GroupSchema);

let initialized = false;
const ensureInit = () => {
  if (!initialized) {
    seed();
    initialized = true;
  }
};

export const GroupsService = {
  async listMine(userId: string): Promise<Group[]> {
    ensureInit();
    await delay();
    const myGroupIds = db.memberships.filter((m) => m.userId === userId).map((m) => m.groupId);
    const groups = db.groups.filter((g) => myGroupIds.includes(g.id));
    return GroupsArraySchema.parse(groups);
  },

  async listAll(): Promise<Group[]> {
    ensureInit();
    await delay();
    return GroupsArraySchema.parse(db.groups);
  },

  async getById(id: string): Promise<Group | null> {
    ensureInit();
    await delay();
    const group = db.groups.find((g) => g.id === id);
    return group ? GroupSchema.parse(group) : null;
  },

  async members(groupId: string): Promise<Membership[]> {
    ensureInit();
    await delay();
    return db.memberships.filter((m) => m.groupId === groupId);
  },

  async create(input: { name: string; description: string; createdBy: string }): Promise<Group> {
    ensureInit();
    await delay();
    const group: Group = {
      id: `g-${Date.now()}`,
      name: input.name,
      description: input.description,
      createdBy: input.createdBy,
      goal: { period: "libre", times: 0 },
      createdAt: new Date().toISOString(),
    };
    db.groups.push(group);
    db.memberships.push({
      id: `m-${Date.now()}`,
      groupId: group.id,
      userId: input.createdBy,
      role: "owner",
      joinedAt: group.createdAt,
    });
    bus.emit("groups:changed", undefined);
    return GroupSchema.parse(group);
  },

  async delete(id: string): Promise<void> {
    ensureInit();
    await delay();
    db.groups = db.groups.filter((g) => g.id !== id);
    db.memberships = db.memberships.filter((m) => m.groupId !== id);
    db.checkinGroups = db.checkinGroups.filter((cg) => cg.groupId !== id);
    db.groupStreaks = db.groupStreaks.filter((s) => s.groupId !== id);
    bus.emit("groups:changed", undefined);
  },

  async leave(groupId: string, userId: string): Promise<void> {
    ensureInit();
    await delay();
    db.memberships = db.memberships.filter((m) => !(m.groupId === groupId && m.userId === userId));
    bus.emit("groups:changed", undefined);
  },
};
