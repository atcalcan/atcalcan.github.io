import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from './link/link.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoCardComponent } from './repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CardComponent,
    LinkComponent,
    RepoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
