import z from "zod";
import { CreateSchemaWithId } from "../req.helpers";

export const ReactionTypeSchema = z.enum(["like", "fire", "clap", "strong"]);
export type ReactionType = z.infer<typeof ReactionTypeSchema>;

export const ReactionSchema = CreateSchemaWithId({
  userId: z.string(),
  checkinId: z.string(),
  type: ReactionTypeSchema,
  createdAt: z.string(),
});

export type Reaction = z.infer<typeof ReactionSchema>;
