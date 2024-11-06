import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Index from './index';
import ImplementacionChat from './Inicio/ImplementacionChat';
import Consulta from './Inicio/Consulta';
import Chatboti from './Inicio/Chatbot';
import NotFound from './Inicio/NotFound';
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
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
import Chat from './Inicio/Chat.jsx';
import { useUserContext } from '../src/componentes/UserContext.jsx';  // Asegúrate de importar el contexto

function App() {
  // Consumir el estado de estaLogueado desde el contexto
  const { estaLogueado } = useUserContext();

  return (
    <div className="app-container">
      <Routes>
        {/* Redirección condicional */}
        <Route 
          path="/" 
          element={<Navigate to={estaLogueado ? "/Inicio" : "/Registro"} />} 
        />
        <Route path="/ImplementacionChat" element={<ImplementacionChat />} />
        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/Chatbot" element={<Chatboti />} />
        <Route path='/Chat' element={<Chat/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/AyudaYSoporte" element={<AyudaYSoporte />} />
        <Route path="/Registro" element={<RegistrarSesion />} />
        <Route path="/Verificacion" element={<CodigoVerificacion />} />
        <Route path="/Home" element={<Inicio />} />
        <Route path="/EducacionDental" element={<EducacionDental />} />
        <Route path="/Gingivitis" element={<Gingivitis />} />
        <Route path="/Cancer" element={<Cancer />} />
        <Route path="/Caries" element={<Caries />} />
        <Route path="/Halitosis" element={<Halitosis />} />
        <Route path="/Implantes" element={<Implantes />} />
        <Route path="/Periodontitis" element={<Periodontitis />} />
        <Route path="/Sensibilidad" element={<Sensibilidad />} />
        <Route path="/Quiste" element={<Quiste />} />
        <Route path="/Traumatismo" element={<Traumatismo />} />
        <Route path="/Inicio" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
