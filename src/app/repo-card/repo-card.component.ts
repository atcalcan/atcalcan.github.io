import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input() rep!: Repo;

  ngOnInit(): void {
      console.log(this.rep)
  }
}
