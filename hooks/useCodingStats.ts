"use client";

import { useState, useEffect } from "react";
import { socials } from "@/constant";

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  handle: string;
}

export interface CodingStats {
  leetcode: LeetCodeStats | null;
  loading: boolean;
}

interface CachedStats {
  data: LeetCodeStats;
  timestamp: number;
}

const STORAGE_KEY = "mehraj's-portfolio-data";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Our own API route (app/api/leetcode/[username]) proxies to LeetCode's
// official GraphQL endpoint server-side. We avoid relying on third-party
// wrapper APIs since those are unofficial and can go offline unexpectedly.
const STATS_API_BASE = "/api/leetcode";

export const useCodingStats = (): CodingStats => {
  const [stats, setStats] = useState<CodingStats>({
    leetcode: null,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const leetcodeHandle =
      socials.find((s) => s.name.toLowerCase() === "leetcode")?.handle ||
      "sayyadmehraj01";

    const loadStats = async () => {
      let cached: CachedStats | null = null;
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          cached = JSON.parse(stored);
        }
      } catch {}

      const now = Date.now();
      const isCacheValid =
        cached &&
        cached.timestamp &&
        cached.data &&
        now - cached.timestamp < ONE_DAY_MS;

      if (isCacheValid && cached) {
        if (isMounted) {
          setStats({
            leetcode: cached.data,
            loading: false,
          });
        }
        return;
      }

      try {
        const res = await fetch(`${STATS_API_BASE}/${leetcodeHandle}`);
        if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
        const data = await res.json();

        const leetcodeData: LeetCodeStats = {
          totalSolved: data.totalSolved ?? 0,
          easySolved: data.easySolved ?? 0,
          mediumSolved: data.mediumSolved ?? 0,
          hardSolved: data.hardSolved ?? 0,
          acceptanceRate: data.acceptanceRate ?? 0,
          ranking: data.ranking ?? 0,
          handle: leetcodeHandle,
        };

        try {
          const cachePayload: CachedStats = {
            data: leetcodeData,
            timestamp: now,
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cachePayload));
        } catch {}

        if (isMounted) {
          setStats({
            leetcode: leetcodeData,
            loading: false,
          });
        }
      } catch {
        if (isMounted) {
          setStats({
            leetcode: cached?.data || null,
            loading: false,
          });
        }
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
};
