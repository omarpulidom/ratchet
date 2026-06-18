import z from "zod";
import { CreateSchemaWithId } from "../req.helpers";

export const UserStreakSchema = CreateSchemaWithId({
  userId: z.string(),
  currentDays: z.number().int().nonnegative(),
  longestDays: z.number().int().nonnegative(),
  lastCheckinDate: z.string().nullable(),
});

export type UserStreak = z.infer<typeof UserStreakSchema>;

export const GroupStreakSchema = CreateSchemaWithId({
  groupId: z.string(),
  currentDays: z.number().int().nonnegative(),
  longestDays: z.number().int().nonnegative(),
  lastActiveDate: z.string().nullable(),
});

export type GroupStreak = z.infer<typeof GroupStreakSchema>;
