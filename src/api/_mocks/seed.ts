import { db } from "./db";

const NOW = new Date().toISOString();
const DAYS_AGO = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
};

export function seed() {
  if (db.users.length > 0) return;

  const u1 = {
    id: "u1",
    username: "omarcito",
    email: "omarcito@ratchet.app",
    avatarUrl: null,
  };
  const u2 = {
    id: "u2",
    username: "danydz_al",
    email: "dany@ratchet.app",
    avatarUrl: null,
  };
  const u3 = {
    id: "u3",
    username: "pm404",
    email: "pm@ratchet.app",
    avatarUrl: null,
  };
  const u4 = {
    id: "u4",
    username: "ana_lop",
    email: "ana@ratchet.app",
    avatarUrl: null,
  };
  db.users.push(u1, u2, u3, u4);

  const g1 = {
    id: "g1",
    name: "ESCOM",
    description: "Compaeros de la escuela",
    createdBy: u1.id,
    goal: { period: "semana" as const, times: 5 },
    createdAt: DAYS_AGO(60),
  };
  const g2 = {
    id: "g2",
    name: "Lecturas",
    description: "Club de lectura diario",
    createdBy: u2.id,
    goal: { period: "dia" as const, times: 1 },
    createdAt: DAYS_AGO(30),
  };
  db.groups.push(g1, g2);

  db.memberships.push(
    { id: "m1", groupId: g1.id, userId: u1.id, role: "owner" as const, joinedAt: DAYS_AGO(60) },
    { id: "m2", groupId: g1.id, userId: u2.id, role: "member" as const, joinedAt: DAYS_AGO(55) },
    { id: "m3", groupId: g1.id, userId: u3.id, role: "member" as const, joinedAt: DAYS_AGO(50) },
    { id: "m4", groupId: g1.id, userId: u4.id, role: "member" as const, joinedAt: DAYS_AGO(45) },
    { id: "m5", groupId: g2.id, userId: u1.id, role: "member" as const, joinedAt: DAYS_AGO(30) },
    { id: "m6", groupId: g2.id, userId: u2.id, role: "owner" as const, joinedAt: DAYS_AGO(30) },
  );

  const tagGym = { id: "t1", groupId: g1.id, name: "gym" };
  const tagBox = { id: "t2", groupId: g1.id, name: "box" };
  const tagRead = { id: "t3", groupId: g2.id, name: "lectura" };
  db.tags.push(tagGym, tagBox, tagRead);

  const c1 = {
    id: "c1",
    userId: u2.id,
    caption: "Morning workout check #gym",
    mediaUri: "mock://dany_post.png",
    location: "Smart Fit La Viga",
    createdAt: DAYS_AGO(1),
    syncStatus: "synced" as const,
  };
  const c2 = {
    id: "c2",
    userId: u3.id,
    caption: "Box training en la mañana #box",
    mediaUri: "mock://pm_post.png",
    location: "Smart Fit La Viga",
    createdAt: DAYS_AGO(3),
    syncStatus: "synced" as const,
  };
  const c3 = {
    id: "c3",
    userId: u1.id,
    caption: "Nuevo PR en sentadilla #gym",
    mediaUri: "mock://dany_post.png",
    location: "Smart Fit La Viga",
    createdAt: DAYS_AGO(5),
    syncStatus: "synced" as const,
  };
  const c4 = {
    id: "c4",
    userId: u2.id,
    caption: "Lectura de la semana #lectura",
    mediaUri: "mock://pm_post.png",
    location: "Casa",
    createdAt: DAYS_AGO(2),
    syncStatus: "synced" as const,
  };
  db.checkins.push(c1, c2, c3, c4);

  db.checkinGroups.push(
    { checkinId: c1.id, groupId: g1.id },
    { checkinId: c2.id, groupId: g1.id },
    { checkinId: c3.id, groupId: g1.id },
    { checkinId: c4.id, groupId: g2.id },
  );

  db.checkinTags.push(
    { checkinId: c1.id, tagId: tagGym.id },
    { checkinId: c2.id, tagId: tagBox.id },
    { checkinId: c3.id, tagId: tagGym.id },
    { checkinId: c4.id, tagId: tagRead.id },
  );

  db.reactions.push(
    { id: "r1", userId: u1.id, checkinId: c1.id, type: "fire" as const, createdAt: NOW },
    { id: "r2", userId: u3.id, checkinId: c1.id, type: "like" as const, createdAt: NOW },
    { id: "r3", userId: u1.id, checkinId: c2.id, type: "strong" as const, createdAt: NOW },
    { id: "r4", userId: u2.id, checkinId: c3.id, type: "fire" as const, createdAt: NOW },
  );

  db.userStreaks.push(
    { id: "us1", userId: u1.id, currentDays: 6, longestDays: 11, lastCheckinDate: DAYS_AGO(0) },
    { id: "us2", userId: u2.id, currentDays: 4, longestDays: 8, lastCheckinDate: DAYS_AGO(0) },
    { id: "us3", userId: u3.id, currentDays: 2, longestDays: 5, lastCheckinDate: DAYS_AGO(1) },
    { id: "us4", userId: u4.id, currentDays: 0, longestDays: 3, lastCheckinDate: DAYS_AGO(2) },
  );

  db.groupStreaks.push(
    { id: "gs1", groupId: g1.id, currentDays: 6, longestDays: 11, lastActiveDate: DAYS_AGO(0) },
    { id: "gs2", groupId: g2.id, currentDays: 2, longestDays: 5, lastActiveDate: DAYS_AGO(1) },
  );

  db.invites.push({
    id: "i1",
    groupId: g1.id,
    code: "ratchet-abc123",
    createdBy: u1.id,
    expiresAt: DAYS_AGO(-7),
    acceptedBy: null,
  });
}
