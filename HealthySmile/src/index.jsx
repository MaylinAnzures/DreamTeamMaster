import MyButton from './componentes/Button';
import FooterApp from './componentes/footer';
import { useState } from 'react'
import HeaderApp from './componentes/header';

export default function Index() {
    const handleClick = () => {
        alert('Botón presionado!');
      };
    return (
      <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
        <HeaderApp />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Usos de componentes </h1>
          <MyButton
            className="custom-button"
            onClick={handleClick}
            label="¡Click aquí!"
          ></MyButton>
        </div>

        <FooterApp />
      </div>
    );
}