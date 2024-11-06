import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Index from './index';
import ImplementacionChat from './Inicio/ImplementacionChat';
import Consulta from './Inicio/Consulta';
import Chatboti from './Inicio/Chatbot';
import NotFound from './Inicio/NotFound';


function App() {
  return (
    <div className="app-container">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ImplementacionChat" element={<ImplementacionChat />} />
      <Route path="/Consulta" element={<Consulta />} />
      <Route path="/Chatbot" element={<Chatboti />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
