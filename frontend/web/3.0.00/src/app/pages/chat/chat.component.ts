import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  initialMessages: Message[] = [
    new Message('bot', '¡Bienvenido! Puedes preguntar cosas como "¿Cómo pago por los servicios?" o "¿Puedo pedir más de un servicio a la vez?".'),
    new Message('bot', '"¿Qué hago si un albañil me roba mis herramientas?","¿Puedo reprogramar una cita?"'),
    new Message('bot', '"¿Cómo puedo verificar la experiencia del profesional?","¿Qué pasa si no estoy satisfecho con el trabajo realizado?"'),
    new Message('bot', '"¿Ofrecen servicios durante los fines de semana?","¿Cómo puedo dejar una reseña del servicio?"'),
    new Message('bot', '"¿Los profesionales están asegurados?","¿Puedo solicitar un servicio para el mismo día?"'),
    new Message('bot', '"¿Cómo puedo cancelar un servicio?","¿Puedo obtener una factura por el servicio?"'),
    new Message('bot', '"¿Ofrecen algún tipo de garantía por los servicios?","¿Cómo puedo saber si el profesional contratado está certificado?"')
  ];
  messages: Message[] = [];
  value: string = '';

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.messages.push(...this.initialMessages);
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    if (this.value.trim()) {
      // Borrar los mensajes iniciales si existen
      if (this.messages.some(msg => this.initialMessages.includes(msg))) {
        this.messages = this.messages.filter(message => !this.initialMessages.includes(message));
      }
      this.chatService.getBotAnswer(this.value);
      this.value = '';
    }
  }
}
