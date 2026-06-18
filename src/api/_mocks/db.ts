import type { Group, Membership } from "../Groups/Groups.Schemas";
import type {
  Checkin,
  CheckinGroup,
  CheckinTag,
  Tag,
} from "../Checkins/Checkins.Schemas";
import type { Reaction } from "../Reactions/Reactions.Schemas";
import type { GroupStreak, UserStreak } from "../Streaks/Streaks.Schemas";
import type { Invite } from "../Invites/Invites.Schemas";
import type { BaseUser } from "../Users/Users.Schemas";

export const db = {
  users: [] as BaseUser[],
  groups: [] as Group[],
  memberships: [] as Membership[],
  checkins: [] as Checkin[],
  checkinGroups: [] as CheckinGroup[],
  tags: [] as Tag[],
  checkinTags: [] as CheckinTag[],
  reactions: [] as Reaction[],
  userStreaks: [] as UserStreak[],
  groupStreaks: [] as GroupStreak[],
  invites: [] as Invite[],
};

export type Db = typeof db;

export const resetDb = () => {
  db.users = [];
  db.groups = [];
  db.memberships = [];
  db.checkins = [];
  db.checkinGroups = [];
  db.tags = [];
  db.checkinTags = [];
  db.reactions = [];
  db.userStreaks = [];
  db.groupStreaks = [];
  db.invites = [];
};
