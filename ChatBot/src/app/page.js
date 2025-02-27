"use client";
import React, { useState } from 'react';
import './Chatbot.css';
import { alimentacion, clubes, curriculum, discapacidades, entrevistasTrabajo, finDeSemana, tutoria, pasantias, apoyo } from './Preguntas2';
import { saludos, horario, biblioteca, inscripcion, eventos, preguntasTecnologicas, preguntasCuriosas, preguntasDeCulturaGeneral, preguntasDeEntretenimiento } from './Preguntas2';
import { preguntasDeHumor, preguntasDeTrabajo, preguntasFilosoficas, preguntasSobreRelaciones, preguntasSobreViajes, religion, amor, entreteni } from './Preguntas2';
import { chatbot, estudiante, calendario } from './Preguntas2';

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


    const Calendario = calendario;
    const Saludos = saludos;
    const Horario = horario;
    const Biblioteca = biblioteca;
    const Inscripcion = inscripcion;
    const Eventos = eventos;
    const Apoyo = apoyo;
    const Discapacidades = discapacidades;
    const Turoria = tutoria;
    const Pasantias = pasantias;
    const Curriculum = curriculum;
    const EntrevistasTrabajo = entrevistasTrabajo;
    const Clubes = clubes;
    const FinDeSemana = finDeSemana;
    const Alimentacion = alimentacion;
    const PreguntasTecnologicas = preguntasTecnologicas;
    const PreguntasFilosoficas = preguntasFilosoficas;
    const PreguntasSobreRelaciones = preguntasSobreRelaciones;
    const PreguntasCuriosas = preguntasCuriosas;
    const PreguntasDeHumor = preguntasDeHumor;
    const PreguntasSobreViajes = preguntasSobreViajes;
    const PreguntasDeTrabajo = preguntasDeTrabajo;
    const PreguntasDeEntretenimiento = preguntasDeEntretenimiento;
    const PreguntasDeCulturaGeneral = preguntasDeCulturaGeneral;
    const Religion = religion;
    const Amor = amor;
    const Entreteni = entreteni;
    const Chatbot = chatbot;
    const Estudiante = estudiante;

    // Preguntas sobre el calendario académico
    if (Calendario.some(prueba => input.includes(prueba))) {
      return 'El calendario académico para este semestre es del 1 de septiembre al 15 de diciembre.';
    }
    
    if (Saludos.some(prueba => input.includes(prueba))) {
      return 'hola, como puedo ayudarte?.';
    }

    // Preguntas sobre el horario de clases
    if (Horario.some(prueba => input.includes(prueba))) {
      return 'Puedes encontrar tu horario de clases en el portal estudiantil.';
    }

    // Preguntas sobre la biblioteca
    if (Biblioteca.some(prueba => input.includes(prueba))) {
      return 'La biblioteca está ubicada en el edificio central. Su horario es de 8:00 AM a 8:00 PM.';
    }

    // Preguntas sobre inscripción
    if (Inscripcion.some(prueba => input.includes(prueba))) {
      return 'Los períodos de inscripción para cursos comienzan el 20 de agosto.';
    }

    // Preguntas sobre eventos en el campus
    if (Eventos.some(prueba => input.includes(prueba))) {
      return 'Esta semana hay un evento importante: la feria de empleo el viernes a las 10:00 AM en el auditorio principal.';
    }

    // Preguntas sobre apoyo estudiantil
    if (Apoyo.some(prueba => input.includes(prueba))) {
      return 'Puedes obtener ayuda en el departamento de bienestar estudiantil, ubicado en el edificio de servicios estudiantiles.';
    }

    // Don Mauri, uste trabaja desde aqui
    // Preguntas sobre recursos para estudiantes con discapacidades
    if (Discapacidades.some(prueba => input.includes(prueba))) {
      return 'La universidad ofrece varios recursos para estudiantes con discapacidades, incluyendo servicios de accesibilidad y apoyo académico. Puedes obtener más información en el departamento de servicios estudiantiles.';
    }

    // Preguntas sobre asesoramiento o tutoría
    if (Turoria.some(prueba => input.includes(prueba))) {
      return 'La universidad ofrece servicios de asesoramiento académico y tutoría para ayudar a los estudiantes a mejorar su rendimiento. Puedes contactar al centro de tutoría para más detalles.';
    }

    // Preguntas sobre pasantías o prácticas profesionales
    if (Pasantias.some(prueba => input.includes(prueba))) {
      return 'Puedes encontrar pasantías y prácticas profesionales a través del centro de carreras de la universidad. Ellos te pueden ayudar a encontrar oportunidades relevantes para tu carrera.';
    }

    // Preguntas sobre currículum vitae
    if (Curriculum.some(prueba => input.includes(prueba))) {
      return 'El centro de carreras ofrece recursos y talleres para ayudarte a escribir tu currículum vitae. Puedes programar una cita con un asesor de carreras para obtener asistencia personalizada.';
    }

    // Preguntas sobre talleres para entrevistas de trabajo
    if (EntrevistasTrabajo.some(prueba => input.includes(prueba))) {
      return 'Sí, la universidad ofrece talleres para prepararte para entrevistas de trabajo. Puedes consultar el calendario de eventos del centro de carreras para ver las próximas fechas.';
    }

    // Preguntas sobre clubes o actividades extracurriculares
    if (Clubes.some(prueba => input.includes(prueba))) {
      return 'Hay una variedad de clubes y actividades extracurriculares disponibles en el campus. Puedes encontrar una lista completa en el portal estudiantil o en el centro de actividades estudiantiles.';
    }

    // Preguntas sobre actividades para el fin de semana
    if (FinDeSemana.some(prueba => input.includes(prueba))) {
      return 'Este fin de semana hay varias actividades interesantes, incluyendo una noche de cine el sábado y un torneo de fútbol el domingo. Consulta el calendario de eventos para más detalles.';
    }

    // Preguntas sobre opciones de alimentación en el campus
    if (Alimentacion.some(prueba => input.includes(prueba))) {
      return 'El campus ofrece varias opciones de alimentación, incluyendo cafeterías, restaurantes y máquinas expendedoras. Puedes encontrar más información sobre los horarios y ubicaciones en el portal estudiantil.';
    }

    if (PreguntasTecnologicas.some(prueba => input.includes(prueba))) {
      return 'La tecnología avanza rápidamente, ¿quieres saber más sobre algún tema en particular?';
    }
    
    if (PreguntasFilosoficas.some(prueba => input.includes(prueba))) {
      return 'Las preguntas filosóficas nos hacen reflexionar sobre la vida y la existencia.';
    }
    
    if (PreguntasSobreRelaciones.some(prueba => input.includes(prueba))) {
      return 'Las relaciones humanas son fundamentales en nuestra vida. ¿Qué aspecto te interesa?';
    }
    
    if (PreguntasCuriosas.some(prueba => input.includes(prueba))) {
      return 'Las preguntas curiosas nos llevan a explorar nuevas ideas y conocimientos.';
    }
    
    if (PreguntasDeHumor.some(prueba => input.includes(prueba))) {
      return 'Aquí tienes un chiste: ¿Por qué el libro de matemáticas estaba triste? ¡Porque tenía demasiados problemas!';
    }
    
    if (PreguntasSobreViajes.some(prueba => input.includes(prueba))) {
      return 'Viajar nos abre nuevas perspectivas. ¿A dónde te gustaría ir?';
    }
    
    if (PreguntasDeTrabajo.some(prueba => input.includes(prueba))) {
      return 'El trabajo es parte fundamental de la vida. ¿Cómo puedo ayudarte?';
    }
    
    if (PreguntasDeEntretenimiento.some(prueba => input.includes(prueba))) {
      return 'El entretenimiento nos permite desconectar y disfrutar. ¿Qué te interesa?';
    }
    
    if (PreguntasDeCulturaGeneral.some(prueba => input.includes(prueba))) {
      return 'La cultura general nos permite comprender mejor el mundo. ¿Qué quieres saber?';
    }
    
    if (Religion.some(prueba => input.includes(prueba))) {
      return 'Las preguntas sobre religión pueden ser muy profundas. ¿Tienes alguna en particular?';
    }
    
    if (Amor.some(prueba => input.includes(prueba))) {
      return 'El amor es un tema complejo y hermoso. ¿Qué te gustaría saber?';
    }
    
    if (Entreteni.some(prueba => input.includes(prueba))) {
      return 'El entretenimiento nos ayuda a relajarnos. ¿Qué te gustaría hacer?';
    }
    
    if (Chatbot.some(prueba => input.includes(prueba))) {
      return 'Soy un chatbot diseñado para responder preguntas. ¿Cómo puedo ayudarte?';
    }
    
    if (Estudiante.some(prueba => input.includes(prueba))) {
      return 'La educación es clave para el crecimiento. ¿En qué necesitas ayuda?';
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