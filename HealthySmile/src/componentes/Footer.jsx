import React from "react";
import './Footer.css';
import Logito from "../../public/Logito.png"


export default function FooterApp() {
    return (
        <footer id={"app"}>
            <img src={Logito}></img>
            <t7>© Propiedad de TechnoInc. 2024</t7>
        </footer>
    )
}
