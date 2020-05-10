import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from "@fullcalendar/angular";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as moment from "moment";
import { Cancion } from "../cancion.interface";
import { CancionesService } from '../services/canciones.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];
  /*calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];*/

  constructor( public _canciones: CancionesService  ) {

  }
  /*public baseDatos: Array<Cancion> = [
    {
      nombre: 'Aprovecha',
      autor: 'Santiago Benavides',
      genero: 'Lento',
      duracion: 186
    },
    {
      nombre: 'Ruge',
      autor: 'Redimidos',
      genero: 'Movido',
      duracion: 308
    },
    {
      nombre: 'Vida tu me das',
      autor: 'Paz Aguayo',
      genero: 'Movido',
      duracion: 268
    }
  ];*/
  
  
  ngOnInit(): void {
    moment.locale('es');
  }





  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('¿Desea agregar un evento a ' + arg.dateStr + ' ?')) {
      var fecha = moment(arg.dateStr);
      this.calendarEvents = this.calendarEvents.concat({ // agregar nuevos datos de eventos. debe crear una nueva matriz
        title: 'Nuevo evento',
        start: arg.date,
        allDay: arg.allDay,
        color: 'green'
      })
    }

    console.log(fecha.format('LLL'));
    console.log(this._canciones.canciones[0].autor);
  }

}
