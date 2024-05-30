import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // audioFile = new Audio(
  //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
  // );
  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap:any = {
    Hola: "Hola mi loco",
    "Quien sos?": "Soy un exclavo de la secta de workflix",
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

  // playFile() {
  //   this.audioFile.play();
  // }

  // playAudio() {
  //   this.playFile("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3");
  // }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap["default"];
  }
}

