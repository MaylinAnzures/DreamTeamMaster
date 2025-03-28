import React from 'react';
import './Header.css';
import Logito from "../../public/Logito.png";
import Badge from './Badge';
import BasicMenu from './MenuItem';
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from '../componentes/UserContext.jsx';

const menuOptions = [
    { label: 'Consulta', to: '/Consulta' },
    { label: 'Chatbot', to: '/Chatbot' },
    { label: 'Control de citas', to: '#' },
];

const menuOptions2 = [
    { label: 'Tienda', to: '#' },
    { label: 'Carrito de compras', to: '#' },
    { label: 'Pagos', to: '#' },
];

export default function HeaderApp() {
    const { estaLogueado } = useUserContext();

    const secureLink = (to) => (estaLogueado ? to : "/Decision");

    return (
        <header>
            <Link to={secureLink("/Inicio")}>
                <img src={Logito} alt="EducaSim Logo" className="logo" />
            </Link>
            <nav className="link-container">
                <NavLink to={secureLink("/Inicio")} className={(navData) => (navData.isActive ? "activeStyle" : '')}>
                    Home
                </NavLink>
                <NavLink to={secureLink("/Consulta")} className={(navData) => (navData.isActive ? "activeStyle" : '')}>
                Seguimiento
                </NavLink>
                <NavLink to={secureLink("/EducacionDental")} className={(navData) => (navData.isActive ? "activeStyle" : '')}>
                    Educación Dental
                </NavLink>
                <BasicMenu buttonLabel="Tienda Virtual" menuOptions={menuOptions2.map(option => ({ ...option, to: secureLink(option.to) }))} />
                <NavLink to={secureLink("/Gestion")} className={(navData) => (navData.isActive ? "activeStyle" : '')}>
                    Gestion
                </NavLink>
                <NavLink to={secureLink("/AyudaYSoporte")} className={(navData) => (navData.isActive ? "activeStyle" : '')}>
                    Ayuda y soporte
                </NavLink>
                <NavLink to={secureLink("#")}>
                    <Badge />
                </NavLink>
            </nav>
        </header>
    );
}
