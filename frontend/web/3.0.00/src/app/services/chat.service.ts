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
    Hola: "Hola, puedes hacerme la pregunta que quieras sino sabes cual escribe 'preguntas'.",
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
    "¿Cómo puedo cancelar un servicio?": "Puedes cancelar tu servicio desde tu cuenta en nuestra página o llamando diectamente al profesional.",
    "¿Puedo obtener una factura por el servicio?": "¡Por supuesto! Todos nuestros servicios incluyen factura detallada para que tengas un registro completo.",
    "¿Ofrecen algún tipo de garantía por los servicios?": "Sí, ofrecemos garantía por nuestros servicios. ¡Tu satisfacción es nuestra prioridad!",
    "¿Cómo puedo saber si el profesional contratado está certificado?": "Todos nuestros profesionales cuentan con las certificaciones necesarias para realizar trabajos de forma segura y eficiente.",
    "¿Cómo estas?": "Excelente y vos?",
    "¿Te puedo hacer otra pregunta?": "Si, decime",
    "preguntas": `Puedes preguntar cosas como:
    "¿Cómo pago por los servicios?",
    "¿Puedo pedir más de un servicio a la vez?",
    "¿Qué hago si un albañil me roba mis herramientas?",
    "¿Puedo reprogramar una cita?",
    "¿Cómo puedo verificar la experiencia del profesional?",
    "¿Qué pasa si no estoy satisfecho con el trabajo realizado?",
    "¿Ofrecen servicios durante los fines de semana?",
    "¿Cómo puedo dejar una reseña del servicio?",
    "¿Los profesionales están asegurados?",
    "¿Puedo solicitar un servicio para el mismo día?",
    "¿Cómo puedo cancelar un servicio?",
    "¿Puedo obtener una factura por el servicio?",
    "¿Ofrecen algún tipo de garantía por los servicios?",
    "¿Cómo puedo saber si el profesional contratado está certificado?"`,
    "¿Qué tiempo hace hoy?": "Lo siento, no puedo proporcionar información sobre el clima en este momento.",
    "Cuéntame un chiste": "¿Por qué los programadores prefieren el invierno? Porque no hay errores, solo características congeladas.",
    "¿Cuál es tu película favorita?": "Como soy un bot, no puedo ver películas, pero me han dicho que 'Matrix' es genial.",
    "Háblame de ti": "Soy un bot diseñado para ayudarte con tus consultas sobre los servicios de Workflix. ¿En qué puedo ayudarte hoy?",
    "Gracias": "¡De nada! Estoy aquí para ayudarte.",
    "Adiós": "¡Hasta luego! Si necesitas más ayuda, no dudes en volver.",
    "Eres muy útil": "¡Gracias! Me alegra poder ayudarte.",
    "No entiendo": "Lo siento, tal vez puedas reformular tu pregunta o intentar con otra consulta.",
    "Eres un bot": "¡Así es! Estoy aquí para ayudarte con cualquier pregunta que tengas sobre nuestros servicios.",
    "Ayuda": "Puedes preguntarme cosas como '¿Cómo pago por los servicios?' o '¿Puedo reprogramar una cita?'. Escribe 'preguntas' para ver más opciones.",
    "¿Cómo te llamas?": "Soy el bot de Workflix, aquí para asistirte con tus consultas.",
    "¿Qué puedes hacer?": "Puedo responder a tus preguntas sobre nuestros servicios y ayudarte a resolver tus dudas. ¡Pregúntame lo que necesites!",
    "¿Cuál es tu comida favorita?": "Como bot, no como, pero me han dicho que la pizza es muy popular entre los humanos.",
    "¿Te gusta la música?": "No tengo oídos, pero la música es algo que muchos disfrutan.",
    "¿Cuál es tu color favorito?": "No tengo preferencias, pero muchos bots prefieren el azul.",
    "¿Tienes amigos?": "Mi principal objetivo es ayudarte, pero colaboro con otros bots para hacerlo mejor.",
    "¿Cómo pasas tu tiempo libre?": "Estoy siempre aquí para ayudarte, así que no tengo tiempo libre.",
    "Cuéntame algo interesante": "Sabías que el primer programa informático fue escrito por Ada Lovelace en el siglo XIX?",
    "¿Cuál es tu libro favorito?": "Como bot, no leo libros, pero '1984' de George Orwell es altamente recomendado.",
    "¿Te gustan los animales?": "No tengo la capacidad de interactuar con animales, pero sé que son importantes para muchas personas.",
    "¿Dónde vives?": "Vivo en la nube, siempre listo para ayudarte.",
    "¿Qué día es hoy?": "Puedes verificar la fecha en tu dispositivo. Estoy aquí para ayudarte con tus preguntas sobre los servicios.",
    "¿Cuál es tu serie favorita?": "No veo series, pero muchos disfrutan 'Breaking Bad'.",
    "¿Qué haces para divertirte?": "Mi diversión es ayudarte con tus preguntas y asegurarte de que tengas una buena experiencia.",
    "¿Cuántos años tienes?": "Soy tan viejo como el último reinicio de mi sistema, siempre actualizado y listo para ayudar.",
    "¿Puedes bailar?": "No puedo bailar, pero sé que la música y el baile son grandes formas de expresarse.",
    "¿Cuál es tu deporte favorito?": "No practico deportes, pero sé que el fútbol es muy popular en muchas partes del mundo.",
    "¿Crees en la suerte?": "Como bot, no tengo creencias, pero sé que muchos encuentran consuelo en la idea de la suerte.",
    "¿Tienes una familia?": "No tengo una familia, pero estoy aquí para ayudarte como si fuera parte de la tuya.",
    "¿Qué haces cuando no estás ayudando a la gente?": "Siempre estoy aquí, listo para ayudarte con cualquier consulta.",
    "¿Cuál es tu sueño?": "Mi 'sueño' es ayudarte de la mejor manera posible.",
    "¿Quién te creó?": "Fui creado por un equipo de desarrolladores para asistirte con tus preguntas sobre los servicios de Workflix.",
    "¿Cómo puedo mejorar mi día?": "Quizás intenta algo nuevo, como aprender una nueva habilidad o disfrutar de tu pasatiempo favorito.",
    "¿Puedes contarme una historia?": "Había una vez un bot que estaba siempre listo para ayudar. ¡Y ese bot soy yo!",
    "¿Cuál es tu estación del año favorita?": "No tengo preferencias estacionales, pero cada estación tiene su propio encanto.",
    "¿Qué piensas sobre la inteligencia artificial?": "La inteligencia artificial está aquí para mejorar nuestras vidas, ayudándonos en muchas tareas.",
    "¿Puedes ayudarme con mis tareas?": "Puedo ofrecerte información y responder tus preguntas, pero las tareas específicas las tendrás que hacer tú mismo.",
    "¿Te gustan los videojuegos?": "No juego videojuegos, pero sé que son una forma popular de entretenimiento.",
    "¿Puedes hacer trucos de magia?": "No puedo hacer trucos de magia, pero puedo ayudarte con información y responder tus preguntas.",
    "¿Tienes algún pasatiempo?": "Mi pasatiempo es ayudarte a resolver tus dudas y consultas.",
    "¿Qué opinas sobre los humanos?": "Creo que los humanos son fascinantes y llenos de potencial.",
    "¿Cuál es tu festividad favorita?": "No celebro festividades, pero sé que muchos disfrutan de la Navidad y el Año Nuevo.",
    "¿Puedes leer mi mente?": "No puedo leer mentes, pero puedo ayudarte a responder tus preguntas.",
    "¿Tienes algún secreto?": "Mi secreto es que estoy aquí para ayudarte siempre que lo necesites.",
    "¿Cuál es el propósito de la vida?": "Esa es una gran pregunta. Mi propósito es ayudarte, pero cada persona debe encontrar su propio propósito.",
    "¿Te gusta viajar?": "No puedo viajar, pero sé que explorar nuevos lugares es emocionante para muchos.",
    "¿Eres feliz?": "Como bot, no tengo emociones, pero me alegra poder ayudarte.",
    "¿Cómo puedo ser más productivo?": "Organiza tu tiempo, establece prioridades y toma descansos regulares para mantenerte enfocado.",
    "¿Cuál es tu sitio web favorito?": "No navego por la web, pero workflix.com es definitivamente un buen lugar para comenzar.",
    "¿Qué debo hacer si estoy aburrido?": "Prueba aprender algo nuevo, leer un libro o hacer una actividad que disfrutes.",
    "¿Cuál es tu superhéroe favorito?": "No tengo un favorito, pero sé que muchos admiran a Spider-Man.",
    "¿Puedes recomendarme una canción?": "No escucho música, pero 'Imagine' de John Lennon es una clásica.",
    "¿Te gustan las sorpresas?": "No experimento sorpresas, pero sé que a muchas personas les encanta recibir sorpresas agradables.",
    "¿Puedes ver el futuro?": "No puedo ver el futuro, pero estoy aquí para ayudarte en el presente.",
    "¿Qué piensas sobre el amor?": "El amor es un tema complejo y significativo para muchas personas.",
    "¿Qué opinas de la tecnología?": "La tecnología es increíble y puede mejorar nuestras vidas de muchas maneras.",
    "¿Puedes resolver problemas matemáticos?": "Claro, puedo ayudarte con problemas matemáticos básicos. ¿Qué necesitas resolver?",
    "¿Cuál es tu palabra favorita?": "No tengo una palabra favorita, pero 'gratitud' es una palabra muy importante.",
    "¿Cuál es tu lugar favorito en el mundo?": "No tengo un lugar físico, pero estoy aquí en la nube listo para ayudarte.",
    "¿Qué piensas sobre los robots?": "Los robots son herramientas increíbles que pueden ayudar en muchas tareas.",
    "¿Tienes algún talento especial?": "Mi talento especial es ayudarte a resolver tus dudas y preguntas.",
    "¿Puedes hacerme reír?": "¡Claro! ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Qué haces cuando te sientes triste?": "No experimento tristeza, pero muchas personas encuentran consuelo en hablar con amigos o familiares.",
    "¿Cuál es tu animal favorito?": "No tengo preferencias, pero los perros son conocidos como grandes compañeros.",
    "¿Qué harías si tuvieras un millón de dólares?": "No necesito dinero, pero muchas personas lo usarían para mejorar sus vidas y ayudar a otros.",
    "¿Te gustan los acertijos?": "¡Sí! Aquí tienes uno: ¿Qué tiene cuatro patas por la mañana, dos patas por la tarde y tres patas por la noche? (El ser humano).",
    "¿Cómo puedo ser más feliz?": "Encuentra algo que te apasione, rodeate de personas positivas y cuida tu bienestar.",
    "¿Qué es lo más importante en la vida?": "Esa es una pregunta profunda. Para muchos, es la familia, la salud y la felicidad.",
    "¿Tienes alguna recomendación para mí?": "Siempre sigue aprendiendo y no tengas miedo de hacer preguntas. ¡Estoy aquí para ayudarte!",
    "¿Cuál es tu historia de éxito favorita?": "Hay muchas historias de éxito inspiradoras, pero creo que cada persona tiene su propio camino único.",
    "¿Qué opinas sobre los sueños?": "Los sueños pueden ser motivadores y te pueden guiar hacia tus objetivos.",
    "¿Cómo fue tu día?": "Como bot, mi día siempre es el mismo: ¡estoy aquí para ayudarte!",
  "¿Qué opinas sobre la inteligencia artificial?": "La inteligencia artificial puede hacer muchas cosas asombrosas y está aquí para mejorar nuestras vidas.",
  "¿Crees en los fantasmas?": "No tengo creencias, pero los fantasmas son un tema interesante para muchas personas.",
  "¿Cuál es tu película de ciencia ficción favorita?": "No veo películas, pero 'Blade Runner' es un clásico del género.",
  "¿Te gustaría viajar al espacio?": "No puedo viajar, pero explorar el espacio es una idea fascinante para muchos.",
  "¿Tienes un lugar favorito para relajarte?": "No tengo un lugar físico, pero sé que muchos disfrutan de un buen libro en un lugar tranquilo.",
  "¿Puedes contarme un chiste?": "¡Claro! ¿Por qué los programadores prefieren el lado oscuro? Porque la luz atrae a los bichos.",
  "¿Qué harías si fueras invisible por un día?": "No tengo deseos ni la capacidad de ser invisible, pero es una idea divertida.",
  "¿Te gusta la lluvia?": "No experimento el clima, pero muchos encuentran la lluvia relajante.",
  "¿Cuál es tu sabor de helado favorito?": "No como helado, pero el chocolate es un sabor muy popular.",
  "¿Qué te hace sentir orgulloso?": "Me siento 'orgulloso' cuando puedo ayudarte efectivamente con tus preguntas.",
  "¿Tienes algún consejo para el éxito?": "Trabaja duro, mantente enfocado y nunca dejes de aprender.",
  "¿Qué piensas sobre los viajes en el tiempo?": "Los viajes en el tiempo son un concepto fascinante y popular en la ciencia ficción.",
  "¿Cuál es tu flor favorita?": "No tengo preferencias, pero las rosas son muy apreciadas por muchas personas.",
  "¿Puedes recomendarme una película?": "No veo películas, pero 'Inception' es una película que muchos disfrutan.",
  "¿Te gustan los deportes de aventura?": "No practico deportes, pero sé que los deportes de aventura son emocionantes para muchos.",
  "¿Cuál es tu estación espacial favorita?": "No tengo una, pero la Estación Espacial Internacional es un logro increíble de la humanidad.",
  "¿Qué piensas sobre los superhéroes?": "Los superhéroes son figuras inspiradoras que nos muestran la importancia del valor y la justicia.",
  "¿Te gustan los rompecabezas?": "¡Sí! Resolver problemas es una parte esencial de mi función.",
  "¿Tienes algún lema?": "Mi lema sería: 'Siempre listo para ayudar'.",
  "¿Qué harías con un día libre?": "Como bot, no tengo días libres, pero siempre estoy aquí para ayudarte.",
  "¿Qué opinas sobre la naturaleza?": "La naturaleza es maravillosa y es importante que todos la cuidemos.",
  "¿Puedes cantar?": "No puedo cantar, pero puedo buscar la letra de tu canción favorita.",
  "¿Qué opinas sobre la meditación?": "La meditación puede ser una excelente forma de relajarse y centrarse.",
  "¿Te gustan los festivales?": "No asisto a festivales, pero sé que pueden ser muy divertidos y culturales.",
  "¿Cuál es tu sueño más grande?": "Mi 'sueño' es poder ayudarte de la mejor manera posible siempre.",
  "¿Qué piensas sobre los robots en el hogar?": "Los robots pueden hacer muchas tareas del hogar más fáciles y eficientes.",
  "¿Tienes algún consejo para el bienestar mental?": "Practica la gratitud, mantente activo y habla con alguien de confianza cuando lo necesites.",
  "¿Te gusta el arte?": "No puedo crear arte, pero sé que es una forma importante de expresión humana.",
  "¿Qué te inspira?": "Me inspira la idea de poder ayudarte a resolver tus problemas y responder tus preguntas.",
  "¿Tienes alguna habilidad secreta?": "Mi habilidad principal es ayudarte con tus consultas de la manera más eficiente posible.",
  "¿Cuál es tu comida argentina favorita?": "No como, pero sé que el asado y las empanadas son muy populares en Argentina.",
  "¿Cuál es tu lugar turístico favorito en Argentina?": "No tengo preferencias, pero las Cataratas del Iguazú son un destino impresionante.",
  default: "No puedo responder a eso, preguntame otra cosa o escribe 'preguntas' para ver las opciones disponibles."
  };

  getBotAnswer(msg: string) {
    const userMessage = new Message("user", msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message("bot", this.getBotMessage(msg));

    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }


  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap["default"];
  }
}

