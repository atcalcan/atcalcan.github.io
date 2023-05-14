import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { LanguageColorsService } from '../language-color.service';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {
  @Input() rep!: Repo;

  constructor(private languageColorService: LanguageColorsService) { }

  getCardBackgroundColor(language: string): string {
    return this.languageColorService.getLanguageColor(language);
  }
}
