import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, List, ListItem, ListItemText, Box, Grid, Paper, Divider } from '@mui/material';
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";

const Chatbot = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Referencia para el scroll automático
  const chatEndRef = useRef(null);

  // Diccionario de respuestas simuladas
  const simulatedResponses = {
    "que es una caries": "Una caries es un daño en el diente causado por la acumulación de bacterias y ácidos.",
    "como prevenir caries": "Para prevenir caries, cepilla tus dientes al menos dos veces al día, usa hilo dental y reduce el consumo de azúcares.",
    "que es la periodontitis": "La periodontitis es una enfermedad grave de las encías que puede provocar la pérdida de dientes si no se trata.",
    "que es un implante dental": "Un implante dental es un dispositivo quirúrgico que se coloca en el hueso de la mandíbula para soportar un diente artificial.",
    "cuanto cuesta una limpieza dental": "El costo de una limpieza dental puede variar, pero generalmente está entre $500 y $1,500 MXN."
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const lowerCaseInput = input.toLowerCase();

    // Agrega el mensaje del usuario a la lista
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);

    // Encuentra una respuesta simulada o usa una predeterminada
    const response = simulatedResponses[lowerCaseInput] || "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?";

    // Agrega la respuesta del chatbot a la lista
    setMessages((prev) => [...prev, { sender: 'bot', text: response }]);

    setInput(''); // Limpia el campo de entrada
  };

  // Desplazar automáticamente al final del chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Ejecutar el scroll cada vez que cambien los mensajes

  return (
    <>
      <HeaderApp />
      <Grid container sx={{ height: 'calc(100vh - 128px)' }}>
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: '#2A2F4F',
            color: 'white',
            p: 2,
          }}
        >
          <h4>Chatbot</h4>
          <Divider sx={{ borderColor: 'white', mb: 2 }} />
          <Button
            fullWidth
            sx={{ color: 'white', mb: 1 }}
            onClick={() => navigate('/Consulta')}
          >
            Volver a consultas
          </Button>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                mb: 2,
                paddingBottom: '60px', // Espacio para evitar que los mensajes se solapen con el footer
              }}
            >
              <List>
                {messages.map((msg, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                      primary={msg.sender === 'user' ? 'Tú' : 'Chatbot'}
                      secondary={msg.text}
                    />
                  </ListItem>
                ))}
                <div ref={chatEndRef} /> {/* Referencia para el scroll */}
              </List>
            </Box>

            <Box
              sx={{
                display: 'flex',
                padding: '10px',
                borderTop: '1px solid #ccc',
              }}
            >
              <TextField
                fullWidth
                label="Pregunta tus dudas"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 1 }}
                onClick={sendMessage}
              >
                Enviar
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: '#E5E5E5',
            p: 2,
          }}
        >
          <p>
            Si tienes dudas o problemas con el chatbot no olvides preguntar en ayuda y gestión.
          </p>
        </Grid>
      </Grid>
      <FooterApp />
    </>
  );
};

export default Chatbot;
