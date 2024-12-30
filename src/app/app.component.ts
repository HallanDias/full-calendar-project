import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf e *ngFor
import { FormsModule } from '@angular/forms'; // Necessário para ngModel
import { FullCalendarModule } from '@fullcalendar/angular'; // Necessário para FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin de visualização de grade mensal
import interactionPlugin from '@fullcalendar/interaction'; // Plugin para interatividade
import { EventInput } from '@fullcalendar/core'; // Para tipos de evento

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOptions: any;
  showTimeSlots: boolean = false;
  selectedDate: string = '';
  timeSlots: string[] = [];
  showEventForm: boolean = false;
  eventTitle: string = '';
  events: EventInput[] = []; // Lista de eventos

  // Método para configurar o calendário
  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.events // Adiciona os eventos no calendário
    };
  }

  // Método para lidar com o clique em uma data
  onDateClick(event: any) {
    this.selectedDate = event.dateStr;
    this.showTimeSlots = true;
    this.timeSlots = this.generateTimeSlots(); // Gera os horários
  }

  // Gera os horários de 1 em 1 hora
  generateTimeSlots(): string[] {
    let slots: string[] = [];
    for (let i = 8; i <= 20; i++) { // Horários de 08:00 até 20:00
      slots.push(`${i}:00`);
    }
    return slots;
  }

  // Seleciona um horário
  selectTimeSlot(time: string) {
    this.eventTitle = ''; // Limpa o título do evento ao selecionar o horário
    this.showEventForm = true; // Exibe o formulário de evento
  }

  // Salva o evento
  saveEvent() {
    // Adiciona o evento à lista de eventos
    const event = {
      title: this.eventTitle,
      start: `${this.selectedDate}T${this.timeSlots[0]}:00`, // A data e hora selecionada
      allDay: false
    };
    this.events.push(event);

    // Atualiza o calendário com o novo evento
    this.showEventForm = false;
    this.eventTitle = '';
    this.showTimeSlots = false; // Fecha os horários disponíveis
  }

  // Cancela o evento
  cancelEvent() {
    this.showEventForm = false;
    this.eventTitle = ''; // Limpa o título do evento
  }
}
