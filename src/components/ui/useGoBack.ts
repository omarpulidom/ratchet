import { useRouter } from "expo-router";
import { ReactNode, useCallback } from "react";

type Props = {
  fallbackRoute: string;
};

export function useGoBack({ fallbackRoute }: Props) {
  const router = useRouter();
  return useCallback(() => {
    if (router.canGoBack()) router.back();
    else router.replace(fallbackRoute as never);
  }, [router, fallbackRoute]);
}
