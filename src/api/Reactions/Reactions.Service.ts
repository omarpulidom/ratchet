import { seed } from "../_mocks/seed";
import { db } from "../_mocks/db";
import { delay } from "../_mocks/delay";
import { bus } from "../_mocks/eventBus";
import { ReactionSchema, type Reaction, type ReactionType } from "./Reactions.Schemas";

let initialized = false;
const ensureInit = () => {
  if (!initialized) {
    seed();
    initialized = true;
  }
};

export const ReactionsService = {
  async listByCheckin(checkinId: string): Promise<Reaction[]> {
    ensureInit();
    await delay();
    return db.reactions
      .filter((r) => r.checkinId === checkinId)
      .map((r) => ReactionSchema.parse(r));
  },

  async countByCheckin(checkinId: string): Promise<Record<ReactionType, number>> {
    ensureInit();
    const out: Record<ReactionType, number> = { like: 0, fire: 0, clap: 0, strong: 0 };
    db.reactions
      .filter((r) => r.checkinId === checkinId)
      .forEach((r) => {
        out[r.type] = (out[r.type] ?? 0) + 1;
      });
    return out;
  },

  async toggle(input: {
    userId: string;
    checkinId: string;
    type: ReactionType;
  }): Promise<Reaction | null> {
    ensureInit();
    await delay();
    const existing = db.reactions.find(
      (r) => r.userId === input.userId && r.checkinId === input.checkinId && r.type === input.type,
    );
    if (existing) {
      db.reactions = db.reactions.filter((r) => r.id !== existing.id);
      bus.emit("reactions:changed", undefined);
      return null;
    }
    const reaction: Reaction = {
      id: `r-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      userId: input.userId,
      checkinId: input.checkinId,
      type: input.type,
      createdAt: new Date().toISOString(),
    };
    db.reactions.push(reaction);
    bus.emit("reactions:changed", undefined);
    return ReactionSchema.parse(reaction);
  },
};
