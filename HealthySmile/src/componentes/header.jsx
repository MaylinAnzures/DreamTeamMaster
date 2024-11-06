import React from 'react';
import './Header.css';
import Logito from "../../public/Logito.png"
import Badge  from './Badge';
import BasicMenu from './MenuItem';
import { Link, NavLink } from "react-router-dom";

const menuOptions = [
    { label: 'Consulta Urgente', to: '/Consulta' },
    { label: 'Chatbot', to: '/Chatbot' },
    { label: 'Control de citas', to: '#' },
  ];

  const menuOptions2 = [
    { label: 'Tienda', to: '#' },
    { label: 'Carrito de compras', to: '#' },
    { label: 'Pagos', to: '#' },
  ];
export default function HeaderApp() {
    return (
        <header>
            <Link to="/">
                <img src={Logito}alt="EducaSim Logo" className="logo"></img>
            </Link>
            <nav className={"link-container"}>
            <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="/Home">Home</NavLink>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="#">Inicio Sesion</NavLink>
                <BasicMenu  buttonLabel="Consulta Virtual" menuOptions={menuOptions} />
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')} to="#">Educación Dental</NavLink>                
                <BasicMenu buttonLabel="Tienda Virtual" menuOptions={menuOptions2}/>
                <NavLink className={(navData) => (navData.isActive ? "activeStyle" : '')}  to="#">Gestion</NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "activeStyle" : '')} to="/AyudaYSoporte">Ayuda y soporte</NavLink>
                <NavLink to="#">
                    <Badge/>                    </NavLink>          
                  </nav>
        </header>
    );
}
