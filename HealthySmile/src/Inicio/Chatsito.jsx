import React, { useState, useEffect } from "react";
import Stomp from 'stompjs';
import SockJS from "sockjs-client";
import { Avatar, Button, List, ListItem, ListItemText, TextField, Typography, Box } from "@mui/material";
import { useUserContext } from './../componentes/UserContext'; 

const Chatsito = () => {
  const { usuarioLogueado } = useUserContext() || {};
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const [stompClient, setStompClient] = useState(null);
  const [active, setActive] = useState(false);

  // UseEffect para establecer el nickname cuando el usuario está logueado
  useEffect(() => {
    console.debug('useEffect: usuarioLogueado:', usuarioLogueado);
    if (usuarioLogueado) {
      setNickname(usuarioLogueado);
    }
  }, [usuarioLogueado]);

  // UseEffect para conectar al WebSocket solo una vez
  useEffect(() => {
    // Solo intentamos conectar si el socket aún no está activo
    if (!active) {
      conectar();  // Se conecta al WebSocket solo una vez
    }
  }, [active]); // El efecto se ejecuta solo cuando el estado 'active' cambia

  // Función para conectar al WebSocket
  const conectar = () => {
    console.debug('Intentando conectar al WebSocket...');
    if (!active) {
      console.debug('Conectando al WebSocket...');
      const socket = new SockJS('http://localhost:8080/ws');
      const client = Stomp.over(socket);

      client.connect({}, () => {
        console.debug('Conexión WebSocket exitosa');
        client.subscribe('/topic/messages', (message) => {
          console.debug('Mensaje recibido del servidor:', message);
          const receivedMessage = JSON.parse(message.body);
          setMessages(prevMessages => [...prevMessages, receivedMessage]); 
        });
      }, (error) => {
        console.error('Error de conexión:', error);
      });

      setStompClient(client);
      setActive(true);  // Marcar como activo una vez conectado
      console.debug('stompClient configurado:', client);
    } else {
      console.debug('Ya se está conectado, no es necesario conectar nuevamente.');
    }
  };

  // Función para manejar cambios en el campo de mensaje
  const handleMessageChange = (event) => {
    console.debug('Mensaje cambiado:', event.target.value);
    setMessage(event.target.value);
  };

  // Función para enviar mensaje
  const sendMessage = () => {
    console.debug('Enviando mensaje...');
    
    // Verificar si stompClient está disponible antes de enviar el mensaje
    if (!stompClient) {
      console.error('No se puede enviar el mensaje, WebSocket no está conectado');
      return;  // Si el stompClient no está disponible, no intentamos enviar el mensaje
    }

    if (message.trim()) {
      console.debug('Mensaje a enviar:', message);
      const chatMessage = {
        nickname,
        message,
      };

      stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
      setMessage('');
      console.debug('Mensaje enviado:', chatMessage);
    } else {
      console.debug('El mensaje está vacío, no se enviará.');
    }
  };

  // Si no hay usuario logueado, mostrar mensaje de carga
  if (!usuarioLogueado) {
    console.debug('Usuario no logueado, mostrando cargando...');
    return <div>Cargando...</div>;
  }

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Box display="flex" alignItems="center" bgcolor="#092B5A" color="#fff" p={2}>
        <Avatar sx={{ bgcolor: "#fff", color: "#3f51b5", mr: 2 }}>
          {nickname.charAt(0)}
        </Avatar>
        <Typography variant="h6">{nickname}</Typography>
      </Box>

      <Box flex={1} p={2} bgcolor="#f9f9f9" overflow="auto">
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ justifyContent: msg.nickname === nickname ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={msg.message}
                sx={{
                  p: 1.5,
                  bgcolor: msg.nickname === nickname ? '#d1e7dd' : '#e2e3e5',
                  borderRadius: 2,
                  maxWidth: '60%',
                  color: '#333'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box display="flex" alignItems="center" p={2} borderTop="1px solid #ddd">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe un mensaje"
          value={message}
          onChange={handleMessageChange}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        
        <Button onClick={sendMessage} color="primary" disabled={!message.trim()}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Chatsito;
