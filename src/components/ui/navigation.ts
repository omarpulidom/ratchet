import { useRouter } from "expo-router";
import { useCallback } from "react";

export const ROUTES = {
  index: "/(tabs)" as const,
  groups: "/(tabs)/groups" as const,
  groupsDetail: "/(tabs)/groups/detail" as const,
  groupsCreate: "/(tabs)/groups/create" as const,
  groupsEdit: "/(tabs)/groups/edit" as const,
  groupsMembers: "/(tabs)/groups/members" as const,
  groupsSettings: "/(tabs)/groups/settings" as const,
  groupsInvite: "/(tabs)/groups/invite" as const,
  profile: "/(tabs)/profile" as const,
  profileEdit: "/(tabs)/profile/edit" as const,
  profileSettings: "/(tabs)/profile/settings" as const,
  profileStreaks: "/(tabs)/profile/streaks" as const,
  profileHelp: "/(tabs)/profile/help" as const,
  profileAbout: "/(tabs)/profile/about" as const,
  post: (id: string) => `/(tabs)/post/${id}` as const,
  user: (username: string) => `/(tabs)/user/${username}` as const,
  story: (id: string) => `/(tabs)/stories/${id}` as const,
};

export function useGroupNavigation() {
  const router = useRouter();
  return {
    toDetail: useCallback(() => router.push(ROUTES.groupsDetail as never), [router]),
    toCreate: useCallback(() => router.push(ROUTES.groupsCreate as never), [router]),
    toEdit: useCallback(() => router.push(ROUTES.groupsEdit as never), [router]),
    toMembers: useCallback(() => router.push(ROUTES.groupsMembers as never), [router]),
    toSettings: useCallback(() => router.push(ROUTES.groupsSettings as never), [router]),
    toInvite: useCallback(() => router.push(ROUTES.groupsInvite as never), [router]),
  };
}

export function useProfileNavigation() {
  const router = useRouter();
  return {
    toEdit: useCallback(() => router.push(ROUTES.profileEdit as never), [router]),
    toSettings: useCallback(() => router.push(ROUTES.profileSettings as never), [router]),
    toStreaks: useCallback(() => router.push(ROUTES.profileStreaks as never), [router]),
    toHelp: useCallback(() => router.push(ROUTES.profileHelp as never), [router]),
    toAbout: useCallback(() => router.push(ROUTES.profileAbout as never), [router]),
    toUser: useCallback((username: string) => router.push(ROUTES.user(username) as never), [router]),
    toPost: useCallback((id: string) => router.push(ROUTES.post(id) as never), [router]),
  };
}
