import './App.css'
import Index from './index.jsx'
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import AyudaYSoporte from './componentes/AyudaYSoporte.jsx';



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
        <Route path='/AyudaYSoporte' element={<AyudaYSoporte/>}/>
      </Routes>
    </Router>
    
    </>
  );
  
  
}
  
export default App;