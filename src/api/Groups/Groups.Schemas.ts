import z from "zod";
import { CreateSchemaWithId } from "../req.helpers";

export const GroupSchema = CreateSchemaWithId({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(280),
  createdBy: z.string(),
  goal: z.object({
    period: z.enum(["libre", "dia", "semana", "mes"]),
    times: z.number().int().nonnegative(),
  }),
  createdAt: z.string(),
});

export type Group = z.infer<typeof GroupSchema>;

export const MembershipRoleSchema = z.enum(["owner", "member"]);
export type MembershipRole = z.infer<typeof MembershipRoleSchema>;

export const MembershipSchema = CreateSchemaWithId({
  groupId: z.string(),
  userId: z.string(),
  role: MembershipRoleSchema,
  joinedAt: z.string(),
});

export type Membership = z.infer<typeof MembershipSchema>;
