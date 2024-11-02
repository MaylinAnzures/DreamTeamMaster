import './App.css'
import Index from './index.jsx'
import IniciarSesion from './componentes/IniciarSesion.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 



function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
      </Routes>
    </Router>
    
    </>
  );
  
  
}
  
export default App;