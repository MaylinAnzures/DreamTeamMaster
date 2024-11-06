import React from 'react';
import Chatbot from './Chatbot';
import DiagnosisChatbot from './Diagnostico';
import ChatApp from './ChatApp';
import HeaderApp from '../componentes/header';
import FooterApp from '../componentes/footer';

function ImplementacionChat() {
  return (
    <div>
      <HeaderApp/>
      <ChatApp/>
      <FooterApp/>
    </div>
  );
}

export default ImplementacionChat;
