import { cacheLife } from "next/cache";
import { githubRepository } from "@/constants/links";

const repositoryApiUrl = `https://api.github.com/repos/${githubRepository}`;

type GitHubRepositoryResponse = {
  stargazers_count?: unknown;
};

/*
 * The star count is part of the static shell, so it is fetched during
 * prerendering and refreshed in the background. Failures fall back to a
 * count-less button instead of failing the build or blocking navigation.
 */
export async function getGitHubStars(): Promise<number | null> {
  "use cache";
  cacheLife("hours");

  try {
    const token = process.env.GITHUB_TOKEN?.trim();
    const response = await fetch(repositoryApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) return null;

    const repository = (await response.json()) as GitHubRepositoryResponse;
    const stars = repository.stargazers_count;

    return typeof stars === "number" && Number.isFinite(stars) && stars >= 0
      ? stars
      : null;
  } catch {
    return null;
  }
}
