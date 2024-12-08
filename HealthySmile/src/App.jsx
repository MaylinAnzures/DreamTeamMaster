import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImplementacionChat from './Inicio/ImplementacionChat';
import Consulta from './Inicio/Consulta';
import Chatboti from './Inicio/Chatbot';
import NotFound from './Inicio/NotFound';
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import AyudaYSoporte from './componentes/AyudaYSoporte.jsx';
import RegistrarSesion from './componentes/RegistrarSesion.jsx';
import CodigoVerificacion from './componentes/CodigoVerificacion.jsx';
import Inicio from './componentes/Inicio.jsx';
import EducacionDental from './componentes/EducacionDental.jsx';
import Gingivitis from './componentes/Gingivitis.jsx';
import Cancer from './componentes/Cancer.jsx';
import Caries from './componentes/Caries.jsx';
import Halitosis from './componentes/Halitosis.jsx';
import Implantes from './componentes/Implantes.jsx';
import Periodontitis from './componentes/Periodontitis.jsx';
import Sensibilidad from './componentes/Sensibilidad.jsx';
import Quiste from './componentes/Quiste.jsx';
import Traumatismo from './componentes/Traumatismo.jsx';
import Home from './componentes/Home.jsx';
import AddConsult from './Inicio/AddConsult.jsx';
import Chat from './Inicio/Chat.jsx';
import { useUserContext } from '../src/componentes/UserContext.jsx';
import Decision from './componentes/Decision.jsx';
import DiagnosisChatbot from './Inicio/Diagnostico.jsx';
import Chatbot from './Inicio/Chatbot';
import ChatbotIntro from './Inicio/Chatbotito.jsx';
import Index from './index.jsx';
window.global = window;

function App() {
  const { estaLogueado } = useUserContext();

  return (
    <div className="app-container">
      <Routes>
        {/* Redirige a /Inicio solo si estaLogueado es true; de lo contrario, redirige a /Decision */}
        <Route path="/" element={<Navigate to={estaLogueado ? "/Inicio" : "/Decision"} />} />
        
        <Route path="/ImplementacionChat" element={<ImplementacionChat />} />
        <Route path="/borrar" element={<Index />} />

        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/Chatbot" element={<Chatboti />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/AyudaYSoporte" element={<AyudaYSoporte />} />
        <Route path="/Registro" element={<RegistrarSesion />} />
        <Route path="/Verificacion" element={<CodigoVerificacion />} />
        
        <Route path="/Inicio" element={<Home />} />
        <Route path='/Home' element={<Inicio/>}/>
        <Route path="/EducacionDental" element={<EducacionDental />} />
        <Route path="/Gingivitis" element={<Gingivitis />} />
        <Route path="/Cancer" element={<Cancer />} />
        <Route path="/AgregarConsulta" element={<AddConsult />} />

        <Route path="/Caries" element={<Caries />} />
        <Route path="/Halitosis" element={<Halitosis />} />
        <Route path="/Implantes" element={<Implantes />} />
        <Route path="/Periodontitis" element={<Periodontitis />} />
        <Route path="/Sensibilidad" element={<Sensibilidad />} />
        <Route path="/Quiste" element={<Quiste />} />
        <Route path="/Traumatismo" element={<Traumatismo />} />
        <Route path="/Diagnostico" element={<DiagnosisChatbot />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Chatbotito" element={<ChatbotIntro />} />
        <Route path="/Decision" element={<Decision />} />
      </Routes>
    </div>
  );
}

export default App;
