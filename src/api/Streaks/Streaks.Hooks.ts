import { useQuery } from "@tanstack/react-query";
import { StreaksService } from "./Streaks.Service";

export const StreaksHooks = {
  KEYS: {
    user: (userId: string) => ["streaks", "user", userId] as const,
    group: (groupId: string) => ["streaks", "group", groupId] as const,
    byUser: (userId: string) => ["streaks", "byUser", userId] as const,
  },

  useUserStreak(userId: string | undefined) {
    return useQuery({
      queryKey: userId ? StreaksHooks.KEYS.user(userId) : ["streaks", "user", "anonymous"],
      queryFn: () => StreaksService.getUserStreak(userId!),
      enabled: !!userId,
    });
  },

  useGroupStreak(groupId: string | undefined) {
    return useQuery({
      queryKey: groupId ? StreaksHooks.KEYS.group(groupId) : ["streaks", "group", "anonymous"],
      queryFn: () => StreaksService.getGroupStreak(groupId!),
      enabled: !!groupId,
    });
  },

  useByUser(userId: string | undefined) {
    return useQuery({
      queryKey: userId ? StreaksHooks.KEYS.byUser(userId) : ["streaks", "byUser", "anonymous"],
      queryFn: () => StreaksService.listGroupStreaksByUser(userId!),
      enabled: !!userId,
    });
  },
};
