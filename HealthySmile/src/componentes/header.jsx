import React from 'react';
import './Header.css';
import Logito from "../../public/Logito.png"
import Badge  from './Badge';
import { Link, NavLink } from "react-router-dom";

export default function HeaderApp() {
    return (
        <header>
            <Link to="#">
                <img src={Logito}alt="EducaSim Logo" className="logo"></img>
            </Link>
            <nav className={"link-container"}>
            <NavLink to="#">Home</NavLink>
                <NavLink to="#">Consulta</NavLink>
                <NavLink to="#">Educacion dental</NavLink>
                <NavLink to="#">Tienda Virtual</NavLink>
                <NavLink to="#">Gestion</NavLink>
                <NavLink to="#">Ayuda y soporte</NavLink>
                <NavLink to="#">
                    <Badge/>                    </NavLink>          
                  </nav>
        </header>
    );
}