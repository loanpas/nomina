import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterpersonalComponent } from './pages/masterpersonal/masterpersonal.component';
import { ComponentsComponent } from './pages/components/components.component';
import { NominasComponent } from './pages/nominas/nominas.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterpersonalComponent,
    ComponentsComponent,
    NominasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
