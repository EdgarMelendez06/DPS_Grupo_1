"use client";
import React, { useState } from 'react';
import './Chatbot.css';
import {locacion, libros} from './PreguntasBiblio.js';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Almacena los mensajes
  const [input, setInput] = useState(''); // Almacena el input del usuario

  // Función para manejar el envío de mensajes
  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' }; // Mensaje del usuario
      setMessages([...messages, userMessage]); // Agrega el mensaje del usuario al estado

      // Genera una respuesta del bot
      const botResponse = getBotResponse(input);
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);

      setInput(''); // Limpia el input
    }
  };

  // Función para limpiar los mensajes
  const handleClear = () => {
    setMessages([]); // Limpia todos los mensajes
  };



  // Función para generar respuestas del bot
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    const Locacion = locacion;
    const Libros = libros;

    if (Locacion.some(prueba => input.includes(prueba))) {
      return 'viva la alegria';
    }

    // Preguntas sobre el calendario académico
    if (input.includes('calendario académico') || input.includes('calendario') || input.includes('fechas importantes') || input.includes('cuál es el calendario académico para este semestre')) {
      return 'El calendario académico para este semestre es del 1 de septiembre al 15 de diciembre.';
    }
    
    if (input.includes('hola') || input.includes('buenas') || input.includes('tardes') || input.includes('noches')) {
      return 'hola, como puedo ayudarte?.';
    }

    if (input.includes('toyota') || input.includes('cupra')) {
      return 'carritos baratos y mamalones.';
    }

    if (input.includes('steach')) {
      return 'mohana significa familia';
    }

    // Preguntas sobre el horario de clases
    if (input.includes('horario de clases') || input.includes('horario') || input.includes('clases') || input.includes('dónde puedo encontrar mi horario de clases')) {
      return 'Puedes encontrar tu horario de clases en el portal estudiantil.';
    }

    // Preguntas sobre la biblioteca
    if (input.includes('biblioteca') || input.includes('horario biblioteca') || input.includes('ubicación biblioteca')) {
      return 'La biblioteca está ubicada en el edificio central. Su horario es de 8:00 AM a 8:00 PM.';
    }

    // Preguntas sobre inscripción
    if (input.includes('inscripción') || input.includes('inscribirme') || input.includes('cursos') || input.includes('cuándo son los períodos de inscripción para cursos')) {
      return 'Los períodos de inscripción para cursos comienzan el 20 de agosto.';
    }

    // Preguntas sobre eventos en el campus
    if (input.includes('eventos') || input.includes('actividades') || input.includes('campus')) {
      return 'Esta semana hay un evento importante: la feria de empleo el viernes a las 10:00 AM en el auditorio principal.';
    }

    // Preguntas sobre apoyo estudiantil
    if (input.includes('apoyo') || input.includes('estrés') || input.includes('problemas emocionales') || input.includes('dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales')) {
      return 'Puedes obtener ayuda en el departamento de bienestar estudiantil, ubicado en el edificio de servicios estudiantiles.';
    }

    // Don Mauri, uste trabaja desde aqui
    // Preguntas sobre recursos para estudiantes con discapacidades
    if (input.includes('discapacidades') || input.includes('recursos disponibles para estudiantes con discapacidades')) {
      return 'La universidad ofrece varios recursos para estudiantes con discapacidades, incluyendo servicios de accesibilidad y apoyo académico. Puedes obtener más información en el departamento de servicios estudiantiles.';
    }

    // Preguntas sobre asesoramiento o tutoría
    if (input.includes('asesoramiento') || input.includes('tutoría') || input.includes('mejorar mi rendimiento académico') || input.includes('qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico')) {
      return 'La universidad ofrece servicios de asesoramiento académico y tutoría para ayudar a los estudiantes a mejorar su rendimiento. Puedes contactar al centro de tutoría para más detalles.';
    }

    // Preguntas sobre pasantías o prácticas profesionales
    if (input.includes('pasantías') || input.includes('prácticas profesionales') || input.includes('cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera') || input.includes('pasantias') || input.includes('practicas')) {
      return 'Puedes encontrar pasantías y prácticas profesionales a través del centro de carreras de la universidad. Ellos te pueden ayudar a encontrar oportunidades relevantes para tu carrera.';
    }

    // Preguntas sobre currículum vitae
    if (input.includes('currículum vitae') || input.includes('recursos para ayudarme a escribir mi currículum vitae')) {
      return 'El centro de carreras ofrece recursos y talleres para ayudarte a escribir tu currículum vitae. Puedes programar una cita con un asesor de carreras para obtener asistencia personalizada.';
    }

    // Preguntas sobre talleres para entrevistas de trabajo
    if (input.includes('talleres') || input.includes('entrevistas de trabajo') || input.includes('talleres disponibles para prepararme para entrevistas de trabajo')) {
      return 'Sí, la universidad ofrece talleres para prepararte para entrevistas de trabajo. Puedes consultar el calendario de eventos del centro de carreras para ver las próximas fechas.';
    }

    // Preguntas sobre clubes o actividades extracurriculares
    if (input.includes('clubes') || input.includes('actividades extracurriculares') || input.includes('qué clubes o actividades extracurriculares están disponibles en el campus')) {
      return 'Hay una variedad de clubes y actividades extracurriculares disponibles en el campus. Puedes encontrar una lista completa en el portal estudiantil o en el centro de actividades estudiantiles.';
    }

    // Preguntas sobre actividades para el fin de semana
    if (input.includes('actividad interesante') || input.includes('fin de semana') || input.includes('hay alguna actividad interesante planeada para el fin de semana')) {
      return 'Este fin de semana hay varias actividades interesantes, incluyendo una noche de cine el sábado y un torneo de fútbol el domingo. Consulta el calendario de eventos para más detalles.';
    }

    // Preguntas sobre opciones de alimentación en el campus
    if (input.includes('alimentación') || input.includes('opciones de alimentación') || input.includes('cuáles son las opciones de alimentación disponibles en el campus')) {
      return 'El campus ofrece varias opciones de alimentación, incluyendo cafeterías, restaurantes y máquinas expendedoras. Puedes encontrar más información sobre los horarios y ubicaciones en el portal estudiantil.';
    }

    return 'Lo siento, no entendí tu pregunta. ¿Puedes ser más específico?';
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot de Soporte Estudiantil</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button onClick={handleSend}>Enviar</button>
        <button onClick={handleClear}>Limpiar</button>
      </div>
    </div>
  );
};

export default Chatbot;