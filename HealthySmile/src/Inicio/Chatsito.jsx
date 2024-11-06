import React, { useState, useEffect } from "react";
import Stomp from 'stompjs';
import SockJS from "sockjs-client";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { useUserContext } from './../componentes/RegistrarSesion'; 
const Chatsito = () => {
    const { usuarioLogueado } = useUserContext(); 
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState(usuarioLogueado); 
    const [stompClient, setStompClient] = useState(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setNickname(usuarioLogueado);
    }, [usuarioLogueado]);

    const conectar = () => {
        if (!active) {
          const socket = new SockJS('http://localhost:8080/ws');
          const client = Stomp.over(socket);

          client.connect({}, () => {
            client.subscribe('/topic/messages', (message) => {
              const receivedMessage = JSON.parse(message.body);
              setMessages(prevMessages => [...prevMessages, receivedMessage]); 
            });
          }, (error) => {
            console.error('Connection error: ', error);
          });

          setStompClient(client);
          setActive(true);
        }
    };

    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };

    const sendMessage = () => {
        conectar();
        if (message.trim()) {
          const chatMessage = {
            nickname,
            message,
          };

          stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
          setMessage('');
        }
    };

    return (
      <Box display="flex" flexDirection="column" flex={1}>
      <Box display="flex" alignItems="center" bgcolor="#3f51b5" color="#fff" p={2}>
        <Avatar sx={{ bgcolor: "#fff", color: "#3f51b5", mr: 2 }}>
          {specialist.name.charAt(0)}
        </Avatar>
        <Typography variant="h6">{specialist.name}</Typography>
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
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};


export default Chatsito;
