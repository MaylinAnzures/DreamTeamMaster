import React from "react";
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";

function NotFound(){
    return(
        <>
        <HeaderApp/>
        <h1>No se que buscabas</h1>
        <FooterApp/>
        
        </>
    );
}

export default NotFound;