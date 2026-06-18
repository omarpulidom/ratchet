import { seed } from "../_mocks/seed";
import { db } from "../_mocks/db";
import { delay } from "../_mocks/delay";
import { GroupStreakSchema, UserStreakSchema, type GroupStreak, type UserStreak } from "./Streaks.Schemas";

let initialized = false;
const ensureInit = () => {
  if (!initialized) {
    seed();
    initialized = true;
  }
};

export const StreaksService = {
  async getUserStreak(userId: string): Promise<UserStreak | null> {
    ensureInit();
    await delay();
    const found = db.userStreaks.find((s) => s.userId === userId);
    return found ? UserStreakSchema.parse(found) : null;
  },

  async getGroupStreak(groupId: string): Promise<GroupStreak | null> {
    ensureInit();
    await delay();
    const found = db.groupStreaks.find((s) => s.groupId === groupId);
    return found ? GroupStreakSchema.parse(found) : null;
  },

  async listGroupStreaksByUser(userId: string): Promise<GroupStreak[]> {
    ensureInit();
    await delay();
    const groupIds = db.memberships.filter((m) => m.userId === userId).map((m) => m.groupId);
    return db.groupStreaks
      .filter((s) => groupIds.includes(s.groupId))
      .map((s) => GroupStreakSchema.parse(s));
  },
};
