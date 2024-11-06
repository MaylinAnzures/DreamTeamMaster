import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';

const Chatbot = () => {

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
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 2 }}>
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
      <TextField
        fullWidth
        label="Escribe tu mensaje"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        sx={{ mt: 1 }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default Chatbot;
