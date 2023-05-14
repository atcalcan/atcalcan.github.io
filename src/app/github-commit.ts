import { Repo } from "./repo";

export interface GithubCommit {
  sha: string;
  url: string;
  html_url: string;
  comments_url: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
  repository: Repo;
}

export interface GitHubCommitSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: GithubCommit[];
}
