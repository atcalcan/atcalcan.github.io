import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { GitHubCommitSearchResult } from './github-commit';
import { Repo } from './repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private githubService: GithubService) { }

  repositories: Repo[] = []
  othersRepos: Repo[] = [];

  ngOnInit() {


    this.githubService.getPublicRepositories(79245328).subscribe(repos => {
      this.repositories = repos;
    });

    this.githubService.getUserContributions('atcalcan').subscribe((res: GitHubCommitSearchResult) => {

      res.items.forEach(element => {
        const currentIds: string[] = []
        this.othersRepos.forEach(item => {
          if (!currentIds.includes(item.id)) { currentIds.push(item.id) }
        })
        // console.log(currentIds)
        if (!currentIds.includes(element.repository.id) && !element.repository.full_name.includes('atcalcan')) {
          this.othersRepos.push({
            ...element.repository,
            name: element.repository.full_name
          })
        }
      });
    })
  }
}
