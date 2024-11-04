import './App.css'
import Index from './index.jsx'
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AyudaYSoporte from './componentes/AyudaYSoporte.jsx';
import RegistrarSesion from './componentes/RegistrarSesion.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CodigoVerificacion from './componentes/CodigoVerificacion.jsx';
import Inicio from './componentes/Inicio.jsx';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
        <Route path='/AyudaYSoporte' element={<AyudaYSoporte/>}/>
        <Route path='/Registro' element={<RegistrarSesion/>}/>
        <Route path='/Verificacion' element={<CodigoVerificacion/>}/>
        <Route path='/Home' element={<Inicio/>}/>
      </Routes>
    </Router>
    
    </>
  );
  
  
}
  
export default App;