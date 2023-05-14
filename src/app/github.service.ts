import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHubCommitSearchResult } from './github-commit';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/user/';

  constructor(private http: HttpClient) { }

  getPublicRepositories(userId: number): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseUrl}${userId}/repos`);
  }

  getUserContributions(username: string): Observable<GitHubCommitSearchResult> {
    return this.http.get<GitHubCommitSearchResult>(`https://api.github.com/search/commits?q=author:${username}`, {
      headers: {
        'Accept': 'application/vnd.github.cloak-preview',
      },
    });
  }
}
