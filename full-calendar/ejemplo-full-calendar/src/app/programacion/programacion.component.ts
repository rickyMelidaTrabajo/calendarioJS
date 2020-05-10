import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from "@fullcalendar/angular";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {
  @ViewChild('calendar') diasCalendar: FullCalendarComponent;

  calendarPugin = [dayGridPlugin, timeGrigPlugin, interactionPlugin];


  constructor() { }

  ngOnInit(): void {
    var  externo = document.getElementById('eventos-externos');
    new Draggable(externo, {
      itemSelector: '.evento',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText,
        };
      }
    });

    //this.diasCalendar.editable = true;
    //this.diasCalendar.droppable = true;

  }

  go() {
  }


}
