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
    Hola: "Buen día, un gusto poder hablar con usted",
    "¿Cómo pago por los servicios?": "Aceptamos pagos a través de tarjeta de crédito, débito y transferencias bancarias.",
    "¿Puedo pedir más de un servicio a la vez?": "Claro, puedes seleccionar múltiples servicios en la misma solicitud.",
    "¿Qué hago si un albañil me roba mis herramientas?": "Contacta inmediatamente a nuestro servicio al cliente para tomar las acciones necesarias.",
    "¿Puedo reprogramar una cita?": "Sí, puedes reprogramar tu cita desde tu cuenta en nuestra página o contactando directamente al profesional contratado.",
    "¿Cómo puedo verificar la experiencia del profesional?": "Cada profesional tiene un perfil con sus calificaciones y comentarios de clientes anteriores.",
    "¿Qué pasa si no estoy satisfecho con el trabajo realizado?": "Contacta con nuestro servicio al cliente para discutir la situación y encontrar una solución.",
    "¿Ofrecen servicios durante los fines de semana?": "Sí, ofrecemos servicios los siete días de la semana. Verifica la disponibilidad en nuestra página.",
    "¿Cómo puedo dejar una reseña del servicio?": "Después de completar el servicio, recibirás un enlace para dejar tu reseña y calificación.",
    "¿Los profesionales están asegurados?": "Sí, todos nuestros profesionales cuentan con seguro de responsabilidad civil para tu tranquilidad.",
    "¿Puedo solicitar un servicio para el mismo día?": "La disponibilidad de servicios para el mismo día depende de la agenda de los profesionales. ¡Contáctanos para verificar la disponibilidad!",
    
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

