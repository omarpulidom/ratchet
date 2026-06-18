import z from "zod";
import { CreateSchemaWithId } from "../req.helpers";

export const CheckinSchema = CreateSchemaWithId({
  userId: z.string(),
  caption: z.string().max(280).optional(),
  mediaUri: z.string(),
  location: z.string().optional(),
  createdAt: z.string(),
  syncStatus: z.enum(["pending", "synced", "failed"]).default("synced"),
});

export type Checkin = z.infer<typeof CheckinSchema>;

export const CheckinGroupSchema = z.object({
  checkinId: z.string(),
  groupId: z.string(),
});
export type CheckinGroup = z.infer<typeof CheckinGroupSchema>;

export const TagSchema = CreateSchemaWithId({
  groupId: z.string(),
  name: z.string().min(1).max(30),
});
export type Tag = z.infer<typeof TagSchema>;

export const CheckinTagSchema = z.object({
  checkinId: z.string(),
  tagId: z.string(),
});
export type CheckinTag = z.infer<typeof CheckinTagSchema>;
