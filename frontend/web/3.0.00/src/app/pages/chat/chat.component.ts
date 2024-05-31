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
