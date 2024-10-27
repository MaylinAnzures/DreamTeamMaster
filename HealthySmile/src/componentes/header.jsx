import React from 'react';
import './header.css';
import Logito from "../../public/Logito.png"
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
                <NavLink to="#">Ayuda y soporte</NavLink>          
                  </nav>
        </header>
    );
}
