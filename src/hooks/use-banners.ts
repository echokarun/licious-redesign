"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBanners } from "@/lib/api";

export function useBanners() {
  return useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });
}
