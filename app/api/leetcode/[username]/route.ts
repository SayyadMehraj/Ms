import { NextResponse } from "next/server";

interface AcSubmissionEntry {
  difficulty: string;
  count: number;
  submissions: number;
}

interface LeetCodeGraphQLResponse {
  data?: {
    matchedUser: {
      username: string;
      profile: { ranking: number };
      submitStats: {
        acSubmissionNum: AcSubmissionEntry[];
        totalSubmissionNum: AcSubmissionEntry[];
      };
    } | null;
  };
  errors?: { message: string }[];
}

const QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

function findByDifficulty(entries: AcSubmissionEntry[], difficulty: string) {
  return entries.find((e) => e.difficulty === difficulty);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ username: string }> },
) {
  const { username } = await params;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioStatsBot/1.0)",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username },
      }),
      // Revalidate at most once per hour so we don't hammer LeetCode
      // on every page load.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`LeetCode responded with ${res.status}`);
    }

    const json: LeetCodeGraphQLResponse = await res.json();

    if (json.errors?.length || !json.data?.matchedUser) {
      throw new Error(json.errors?.[0]?.message || "User not found");
    }

    const { profile, submitStats } = json.data.matchedUser;
    const { acSubmissionNum, totalSubmissionNum } = submitStats;

    const allAc = findByDifficulty(acSubmissionNum, "All");
    const allTotal = findByDifficulty(totalSubmissionNum, "All");

    const totalSolved = allAc?.count ?? 0;
    const easySolved = findByDifficulty(acSubmissionNum, "Easy")?.count ?? 0;
    const mediumSolved =
      findByDifficulty(acSubmissionNum, "Medium")?.count ?? 0;
    const hardSolved = findByDifficulty(acSubmissionNum, "Hard")?.count ?? 0;

    const acceptanceRate =
      allTotal?.submissions && allAc?.submissions
        ? (allAc.submissions / allTotal.submissions) * 100
        : 0;

    return NextResponse.json({
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      acceptanceRate,
      ranking: profile?.ranking ?? 0,
      handle: username,
    });
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode stats" },
      { status: 502 },
    );
  }
}
