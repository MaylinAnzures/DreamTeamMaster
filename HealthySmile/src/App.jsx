
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Index from './index';
import ImplementacionChat from './Inicio/ImplementacionChat';
import Consulta from './Inicio/Consulta';
import Chatboti from './Inicio/Chatbot';
import NotFound from './Inicio/NotFound';
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AyudaYSoporte from './componentes/AyudaYSoporte.jsx';
import RegistrarSesion from './componentes/RegistrarSesion.jsx';
import CodigoVerificacion from './componentes/CodigoVerificacion.jsx';



function App() {
  return (

    <div className="app-container">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ImplementacionChat" element={<ImplementacionChat />} />
        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/Chatbot" element={<Chatboti />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/AyudaYSoporte" element={<AyudaYSoporte />} />
        <Route path="/Registro" element={<RegistrarSesion />} />
        <Route path="/Verificacion" element={<CodigoVerificacion />} />
      </Routes>
    </div>
  )}

export default App;
