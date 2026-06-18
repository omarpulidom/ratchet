import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckinsService } from "./Checkins.Service";

export const CheckinsHooks = {
  KEYS: {
    all: ["checkins"] as const,
    feed: (userId: string) => ["checkins", "feed", userId] as const,
    byGroup: (groupId: string) => ["checkins", "byGroup", groupId] as const,
    byUser: (userId: string) => ["checkins", "byUser", userId] as const,
    byId: (id: string) => ["checkins", "byId", id] as const,
    canPostInGroup: (userId: string, groupId: string) =>
      ["checkins", "canPost", userId, groupId] as const,
  },

  useFeed(userId: string | undefined) {
    return useQuery({
      queryKey: userId ? CheckinsHooks.KEYS.feed(userId) : ["checkins", "feed", "anonymous"],
      queryFn: () => CheckinsService.listFeed(userId!),
      enabled: !!userId,
    });
  },

  useByGroup(groupId: string | undefined) {
    return useQuery({
      queryKey: groupId ? CheckinsHooks.KEYS.byGroup(groupId) : ["checkins", "byGroup", "anonymous"],
      queryFn: () => CheckinsService.listByGroup(groupId!),
      enabled: !!groupId,
    });
  },

  useByUser(userId: string | undefined) {
    return useQuery({
      queryKey: userId ? CheckinsHooks.KEYS.byUser(userId) : ["checkins", "byUser", "anonymous"],
      queryFn: () => CheckinsService.listByUser(userId!),
      enabled: !!userId,
    });
  },

  useById(id: string | undefined) {
    return useQuery({
      queryKey: id ? CheckinsHooks.KEYS.byId(id) : ["checkins", "byId", "anonymous"],
      queryFn: () => CheckinsService.getById(id!),
      enabled: !!id,
    });
  },

  useCanPostInGroup(userId: string | undefined, groupId: string | undefined) {
    return useQuery({
      queryKey:
        userId && groupId
          ? CheckinsHooks.KEYS.canPostInGroup(userId, groupId)
          : ["checkins", "canPost", "anonymous"],
      queryFn: () => CheckinsService.canPostInGroup(userId!, groupId!),
      enabled: !!userId && !!groupId,
    });
  },

  useCreate() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: CheckinsService.create,
      onSuccess: () => qc.invalidateQueries({ queryKey: ["checkins"] }),
    });
  },
};
