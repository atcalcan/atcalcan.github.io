import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CardComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
