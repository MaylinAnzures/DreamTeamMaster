import { useState } from 'react'

import './App.css'
import HeaderApp from './componentes/header';
import MyButton from './componentes/Button';
import { BrowserRouter as Router } from 'react-router-dom'; 


function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
    <Router>
    <HeaderApp/>
    </Router>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
       <h1>Bienvenido a MUI App</h1>
      <MyButton className="custom-button" onClick={() => alert('Botón presionado!')}>
        ¡Click aquí!
      </MyButton>
    </div>
    </>
  );
  
  
}

export default App;