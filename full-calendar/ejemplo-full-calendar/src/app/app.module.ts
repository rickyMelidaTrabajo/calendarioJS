import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from "@fullcalendar/angular";
import { AppComponent } from './app.component';
import { ProgramacionComponent } from './programacion/programacion.component';

import { routing, appRoutingProviders } from "./app.routing";
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramacionComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
