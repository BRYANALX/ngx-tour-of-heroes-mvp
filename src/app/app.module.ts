import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './app.container';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainerComponent } from './dashboard/dashboard.container';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {
  HeroDetailContainerComponent,
} from './hero-detail/hero-detail.container';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {
  HeroSearchContainerComponent,
} from './hero-search/hero-search.container';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesContainerComponent } from './heroes/heroes.container';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesContainerComponent } from './messages/messages.container';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    AppContainerComponent,
    DashboardComponent,
    DashboardContainerComponent,
    HeroesComponent,
    HeroesContainerComponent,
    HeroDetailComponent,
    HeroDetailContainerComponent,
    MessagesComponent,
    MessagesContainerComponent,
    HeroSearchComponent,
    HeroSearchContainerComponent,
  ],
  bootstrap: [ AppContainerComponent ],
})
export class AppModule { }
