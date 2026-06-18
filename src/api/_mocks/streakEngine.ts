import { db } from "./db";
import type { Checkin } from "../Checkins/Checkins.Schemas";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const toDay = (iso: string) => {
  const d = new Date(iso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
};

const sameDay = (a: string, b: string) => toDay(a) === toDay(b);

const daysBetween = (a: string, b: string) =>
  Math.round((toDay(a) - toDay(b)) / ONE_DAY_MS);

const hasCheckinOnDay = (userId: string, day: string) =>
  db.checkins.some(
    (c) => c.userId === userId && c.syncStatus !== "failed" && sameDay(c.createdAt, day),
  );

export const recomputeUserStreak = (userId: string, today = new Date().toISOString()) => {
  const existing = db.userStreaks.find((s) => s.userId === userId);
  const todayHas = hasCheckinOnDay(userId, today);
  let current = 0;
  if (todayHas) {
    current = 1;
    let cursor = today;
    while (true) {
      const prev = new Date(cursor);
      prev.setDate(prev.getDate() - 1);
      const prevIso = prev.toISOString();
      if (hasCheckinOnDay(userId, prevIso)) {
        current += 1;
        cursor = prevIso;
      } else {
        break;
      }
    }
  } else {
    const last = existing?.lastCheckinDate;
    if (last && daysBetween(today, last) === 1) {
      current = existing?.currentDays ?? 0;
    }
  }
  const longest = Math.max(existing?.longestDays ?? 0, current);
  if (existing) {
    existing.currentDays = current;
    existing.longestDays = longest;
    existing.lastCheckinDate = todayHas ? today : (existing.lastCheckinDate ?? null);
  } else {
    db.userStreaks.push({
      id: `us-${userId}`,
      userId,
      currentDays: current,
      longestDays: longest,
      lastCheckinDate: todayHas ? today : null,
    });
  }
};

export const recomputeGroupStreak = (groupId: string, today = new Date().toISOString()) => {
  const members = db.memberships.filter((m) => m.groupId === groupId).map((m) => m.userId);
  const groupCheckins = db.checkins.filter(
    (c) => db.checkinGroups.some((cg) => cg.checkinId === c.id && cg.groupId === groupId) && c.syncStatus !== "failed",
  );
  const todayActive = groupCheckins.some((c) => members.includes(c.userId) && sameDay(c.createdAt, today));
  let current = 0;
  if (todayActive) {
    current = 1;
    let cursor = today;
    while (true) {
      const prev = new Date(cursor);
      prev.setDate(prev.getDate() - 1);
      const prevIso = prev.toISOString();
      const prevActive = groupCheckins.some(
        (c) => members.includes(c.userId) && sameDay(c.createdAt, prevIso),
      );
      if (prevActive) {
        current += 1;
        cursor = prevIso;
      } else {
        break;
      }
    }
  }
  const existing = db.groupStreaks.find((s) => s.groupId === groupId);
  const longest = Math.max(existing?.longestDays ?? 0, current);
  if (existing) {
    existing.currentDays = current;
    existing.longestDays = longest;
    existing.lastActiveDate = todayActive ? today : (existing.lastActiveDate ?? null);
  } else {
    db.groupStreaks.push({
      id: `gs-${groupId}`,
      groupId,
      currentDays: current,
      longestDays: longest,
      lastActiveDate: todayActive ? today : null,
    });
  }
};

export const postCheckin = (
  checkin: Checkin,
  groupIds: string[],
) => {
  db.checkins.push(checkin);
  groupIds.forEach((groupId) => {
    db.checkinGroups.push({ checkinId: checkin.id, groupId });
  });
  recomputeUserStreak(checkin.userId);
  groupIds.forEach((groupId) => recomputeGroupStreak(groupId));
};

export const canPostCheckinInGroup = (userId: string, groupId: string, today = new Date().toISOString()) => {
  return !db.checkins.some(
    (c) =>
      c.userId === userId &&
      c.syncStatus !== "failed" &&
      db.checkinGroups.some((cg) => cg.checkinId === c.id && cg.groupId === groupId) &&
      sameDay(c.createdAt, today),
  );
};
