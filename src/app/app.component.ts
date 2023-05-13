import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private githubService: GithubService) { }

  repo = []

  ngOnInit() {
    this.githubService.getPublicRepositories(79245328).subscribe(repos => {
      this.repo = repos;
    });
  }
}
