import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText, Box } from '@mui/material';

const questions = [
  "¿Sientes dolor en alguno de tus dientes al consumir alimentos fríos o calientes?",
  "¿Has notado manchas oscuras o blanquecinas en alguno de tus dientes?",
  "¿Sientes dolor o sensibilidad al masticar ciertos alimentos?",
  "¿Tienes dificultad para limpiar algunos dientes debido a la forma en que están ubicados?",
  "¿Hace más de un año que no visitas al dentista?"
];

const DiagnosisChatbot = () => {
  const [messages, setMessages] = useState([]); // Almacena toda la conversación
  const [step, setStep] = useState(0); // Índice de la pregunta actual
  const [showOptions, setShowOptions] = useState(true);

  // Función para agregar un mensaje del bot
  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { sender: 'bot', text }]);
  };

  // Función para agregar un mensaje del usuario
  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
  };

  // Mostrar la pregunta correspondiente al `step` actual solo una vez
  useEffect(() => {
    if (step < questions.length) {
      // Verifica si la pregunta ya está en `messages` para evitar duplicados
      if (!messages.some((msg) => msg.sender === 'bot' && msg.text === questions[step])) {
        addBotMessage(questions[step]);
        setShowOptions(true); // Mostrar opciones después de agregar la pregunta
      }
    } else if (step === questions.length) {
      // Mostrar diagnóstico al finalizar todas las preguntas
      const diagnosis = getDiagnosis();
      addBotMessage(diagnosis);
      setShowOptions(false); // No mostrar opciones después del diagnóstico
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]); // Ejecutar `useEffect` solo cuando `step` cambia

  const handleAnswer = (answer) => {
    addUserMessage(answer); // Agrega la respuesta del usuario
    setShowOptions(false); // Oculta las opciones mientras el bot "responde"

    // Incrementa `step` después de un retraso
    setTimeout(() => {
      setStep((prevStep) => prevStep + 1); // Incrementa el `step` para mostrar la siguiente pregunta
    }, 1000);
  };

  const getDiagnosis = () => {
    const yesCount = messages.filter(msg => msg.sender === 'user' && msg.text === "Sí").length;
    if (yesCount >= 3) {
      return "Podrías estar experimentando síntomas de caries dental. Te recomendamos visitar a un dentista para una evaluación completa y tratamiento adecuado.";
    } else if (yesCount === 1 || yesCount === 2) {
      return "Podrías tener algunos síntomas de sensibilidad dental. Te sugerimos prestar atención a estos síntomas y considerar una visita al dentista si persisten.";
    } else {
      return "Parece que no tienes síntomas de caries o sensibilidad dental importantes en este momento. Mantén una buena higiene dental y visita al dentista regularmente para prevención.";
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: 'inline-block',
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
                    color: msg.sender === 'user' ? '#fff' : '#000'
                  }}
                >
                  {msg.text}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
      {showOptions && step < questions.length && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Button variant="contained" onClick={() => handleAnswer("Sí")}>Sí</Button>
          <Button variant="contained" color="secondary" onClick={() => handleAnswer("No")}>No</Button>
        </Box>
      )}
    </Box>
  );
};

export default DiagnosisChatbot;
