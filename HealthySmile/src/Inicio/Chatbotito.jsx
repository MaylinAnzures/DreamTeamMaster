import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './ChatIntro.css';

const ChatIntro = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/chat');
  };

  return (
    <Box className="chat-intro-container">
      <Box className="chat-intro-content">
        <Typography variant="h3" component="h1" className="chat-intro-title">
          Comunícate con nuestro Chatbot
        </Typography>
        <Typography variant="subtitle1" component="p" className="chat-intro-subtitle">
          Comparte tus síntomas en un chat
        </Typography>
        <Button variant="outlined" className="chat-intro-button" onClick={handleNavigation}>
          IR
        </Button>
      </Box>
      <Box className="chat-intro-image">
        <img src="./../public/chatbotito.jpg" alt="Chatbot" />
      </Box>
    </Box>
  );
};

export default ChatIntro;
