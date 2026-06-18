import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GroupsService } from "./Groups.Service";

export const GroupsHooks = {
  KEYS: {
    all: ["groups"] as const,
    mine: (userId: string) => ["groups", "mine", userId] as const,
    byId: (id: string) => ["groups", "byId", id] as const,
    members: (groupId: string) => ["groups", "members", groupId] as const,
  },

  useListMine(userId: string | undefined) {
    return useQuery({
      queryKey: userId ? GroupsHooks.KEYS.mine(userId) : ["groups", "mine", "anonymous"],
      queryFn: () => GroupsService.listMine(userId!),
      enabled: !!userId,
    });
  },

  useListAll() {
    return useQuery({
      queryKey: ["groups", "all"],
      queryFn: () => GroupsService.listAll(),
    });
  },

  useById(id: string | undefined) {
    return useQuery({
      queryKey: id ? GroupsHooks.KEYS.byId(id) : ["groups", "byId", "anonymous"],
      queryFn: () => GroupsService.getById(id!),
      enabled: !!id,
    });
  },

  useMembers(groupId: string | undefined) {
    return useQuery({
      queryKey: groupId ? GroupsHooks.KEYS.members(groupId) : ["groups", "members", "anonymous"],
      queryFn: () => GroupsService.members(groupId!),
      enabled: !!groupId,
    });
  },

  useCreate() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: GroupsService.create,
      onSuccess: () => qc.invalidateQueries({ queryKey: ["groups"] }),
    });
  },

  useDelete() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: GroupsService.delete,
      onSuccess: () => qc.invalidateQueries({ queryKey: ["groups"] }),
    });
  },

  useLeave() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: ({ groupId, userId }: { groupId: string; userId: string }) =>
        GroupsService.leave(groupId, userId),
      onSuccess: () => qc.invalidateQueries({ queryKey: ["groups"] }),
    });
  },
};
