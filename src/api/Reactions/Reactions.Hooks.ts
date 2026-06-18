import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactionsService } from "./Reactions.Service";

export const ReactionsHooks = {
  KEYS: {
    byCheckin: (checkinId: string) => ["reactions", "byCheckin", checkinId] as const,
    countsByCheckin: (checkinId: string) => ["reactions", "counts", checkinId] as const,
  },

  useByCheckin(checkinId: string | undefined) {
    return useQuery({
      queryKey: checkinId
        ? ReactionsHooks.KEYS.byCheckin(checkinId)
        : ["reactions", "byCheckin", "anonymous"],
      queryFn: () => ReactionsService.listByCheckin(checkinId!),
      enabled: !!checkinId,
    });
  },

  useCountsByCheckin(checkinId: string | undefined) {
    return useQuery({
      queryKey: checkinId
        ? ReactionsHooks.KEYS.countsByCheckin(checkinId)
        : ["reactions", "counts", "anonymous"],
      queryFn: () => ReactionsService.countByCheckin(checkinId!),
      enabled: !!checkinId,
    });
  },

  useToggle() {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: ReactionsService.toggle,
      onSuccess: () => qc.invalidateQueries({ queryKey: ["reactions"] }),
    });
  },
};
