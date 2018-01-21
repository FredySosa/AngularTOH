import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';

import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

import { HeroeService } from './services/heroe/heroe-service.service';
import { MessageService } from './services/message/message.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
