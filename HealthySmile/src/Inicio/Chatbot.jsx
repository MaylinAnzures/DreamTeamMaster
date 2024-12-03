import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, List, ListItem, ListItemText, Box, Grid, Paper, Typography, Divider } from '@mui/material';
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";

const Chatbot = () => {
  const navigate = useNavigate(); 

  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState(''); 

  const sendMessage = async () => {
    if (!input) return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);

    try {
      const response = await fetch('http://localhost:8080/bot/chat?prompt=' + encodeURIComponent(input), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.text();
        setMessages((prev) => [...prev, { sender: 'bot', text: data }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Error al obtener la respuesta del chatbot.' },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error de conexión con el chatbot.' },
      ]);
    }

    setInput(''); 
  };

  return (
    <>
      <HeaderApp />
      <Grid container sx={{ height: 'calc(100vh - 128px)' }}>
        <Grid item xs={2} sx={{ backgroundColor: '#2A2F4F', color: 'white', p: 2 }}>
          <h4>Chatbot</h4>
          <Divider sx={{ borderColor: 'white', mb: 2 }} />
          <Button fullWidth sx={{ color: 'white', mb: 1 }}
              onClick={() => navigate('/Consulta')}>
              Volver a consultas
          </Button>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
              <List>
                {messages.map((msg, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                      primary={msg.sender === 'user' ? 'Tú' : 'Chatbot'}
                      secondary={msg.text}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
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
                onClick={sendMessage}
              >
                Enviar
              </Button>
            </Box>
          </Paper>
        </Grid>

       
        <Grid item xs={2} sx={{ backgroundColor: '#E5E5E5', p: 2 }}>
          <h7>Si tienes dudas o problemas con el chatbot no olvides preguntar en ayuda y gestión</h7>
        </Grid>
      </Grid>
      <FooterApp />
    </>
  );
};

export default Chatbot;