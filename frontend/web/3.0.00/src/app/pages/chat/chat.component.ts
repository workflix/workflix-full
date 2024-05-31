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

  messages: Message[] = [];
  value: string = '';

  constructor(public chatService: ChatService) { }

  ngOnInit() {
      this.messages.push(new Message('bot', '¡Bienvenido! Puedes preguntar cosas como "¿Cómo pago por los servicios?" o "¿Puedo pedir más de un servicio a la vez?".'));
      this.messages.push(new Message('bot', '"¿Qué hago si un albañil me roba mis herramientas?","¿Puedo reprogramar una cita?"'));
      this.messages.push(new Message('bot', '"¿Cómo puedo verificar la experiencia del profesional?","¿Qué pasa si no estoy satisfecho con el trabajo realizado?"'));
      this.messages.push(new Message('bot', '"¿Ofrecen servicios durante los fines de semana?","¿Cómo puedo dejar una reseña del servicio?"'));
      this.messages.push(new Message('bot', '"¿Los profesionales están asegurados?","¿Puedo solicitar un servicio para el mismo día?"'));
      this.messages.push(new Message('bot', '"¿Cómo puedo cancelar un servicio?","¿Puedo obtener una factura por el servicio?"'));
      this.messages.push(new Message('bot', ' "¿Ofrecen algún tipo de garantía por los servicios?","¿Cómo puedo saber si el profesional contratado está certificado?"'));

      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    if (this.value.trim()) {
      this.chatService.getBotAnswer(this.value);
      this.value = '';
    }
  }

}
