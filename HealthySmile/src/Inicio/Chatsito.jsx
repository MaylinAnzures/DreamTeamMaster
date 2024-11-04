import React, { useState, useEffect } from "react";
import Stomp from 'stompjs';
import SockJS from "sockjs-client";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [stompClient, setStompClient] = useState(null);
    const [active, setActive] = useState(false);
  
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
    }
  
    const handleNicknameChange = (event) => {
      setNickname(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const sendMessage = () => {
        conectar()
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
      <div>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{msg.nickname.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">{msg.nickname}</Typography>
                }
                secondary={msg.message}
              />
            </ListItem>
          ))}
        </List>
  
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            placeholder="Enter your nickname"
            value={nickname}
            onChange={handleNicknameChange}
            autoFocus
          />
          <TextField
            placeholder="Type a message"
            value={message}
            onChange={handleMessageChange}
            fullWidth
          />
          <Button onClick={sendMessage} disabled={!message.trim()}>
            send
          </Button>
            
        </div>
      </div>
    );
  };
  
export default Chat;
