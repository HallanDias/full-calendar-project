import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import dayGridPlugin from '@fullcalendar/daygrid'; // Importando o plugin de grid
import interactionPlugin from '@fullcalendar/interaction'; // Importando o plugin de interação

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, FullCalendarModule], // Importando os módulos necessários
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calendarOptions = {
    initialView: 'dayGridMonth', // Exibição do mês
    plugins: [dayGridPlugin, interactionPlugin], // Definindo os plugins necessários
    dateClick: this.handleDateClick.bind(this), // Ligando o evento de clique ao método
  };

  selectedTime: string = ''; // Inicializando a variável
  showEventForm = false;

  // Usando o tipo 'any' para o parâmetro 'arg' no método 'handleDateClick'
  handleDateClick(arg: any) { 
    this.showEventForm = true;
    alert(`Data selecionada: ${arg.dateStr}`);
  }

  submitEvent() {
    alert(`Evento criado para ${this.selectedTime}`);
    this.showEventForm = false;
  }
}
