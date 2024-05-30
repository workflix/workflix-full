import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
 
  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap:any = {
    Hola: "Hola mi loco",
    "Que hago si un albañil me roba mis herramientas?": "Jodete por boludo",
    "Que secta?": "Los que viven acotando boludeces",
    default: "No puedo responder a eso, preguntame otra cosa"
  };

  getBotAnswer(msg: string) {
    const userMessage = new Message("user", msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message("bot", this.getBotMessage(msg));

    setTimeout(() => {
      // this.playFile();
      this.conversation.next([botMessage]);
    }, 1500);
  }


  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap["default"];
  }
}

