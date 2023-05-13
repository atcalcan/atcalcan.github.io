import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as yaml from 'js-yaml';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageColorsService {
  private languages: any;

  constructor(private http: HttpClient) {
    this.fetchLanguageColors();
  }

  private async fetchLanguageColors(): Promise<void> {
    try {
      const response$ = this.http.get('../assets/languages.yml', { responseType: 'text' });
      const response = await firstValueFrom(response$);
      this.languages = yaml.load(response);
    } catch (error) {
      console.error('Error fetching language colors:', error);
    }
  }


  getLanguageColor(language: string): string {
    return this.languages ? this.languages[language]?.color || '#000000' : '#000000';
  }
}
