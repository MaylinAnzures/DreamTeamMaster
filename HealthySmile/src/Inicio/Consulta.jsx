import React, { useState, useEffect, useRef } from "react";
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";
import Chat from "./Chatsito";

function Consulta(){
    return (
        <>
            <HeaderApp />
            <Chat/>
            <FooterApp />
        </>
    );
};


export default Consulta;
