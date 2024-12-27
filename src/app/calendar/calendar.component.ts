import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importa o módulo do FullCalendar

@Component({
  selector: 'app-calendar',
  standalone: true, // Standalone Component
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
[x: string]: any;
  calendarOptions = {
    plugins: [],
    initialView: 'dayGridMonth',
  };
calendarPlugins: any;
}
