import z from "zod";
import { CreateSchemaWithId } from "../req.helpers";

export const InviteSchema = CreateSchemaWithId({
  groupId: z.string(),
  code: z.string(),
  createdBy: z.string(),
  expiresAt: z.string(),
  acceptedBy: z.string().nullable().default(null),
});

export type Invite = z.infer<typeof InviteSchema>;
