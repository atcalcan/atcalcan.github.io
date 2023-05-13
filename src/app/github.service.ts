import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/user/';

  constructor(private http: HttpClient) { }

  getPublicRepositories(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${userId}/repos`);
  }
}
