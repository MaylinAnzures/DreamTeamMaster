import React from "react";
import HeaderApp from "../componentes/header";
import FooterApp from "../componentes/footer";
import Chatsito from "./Chatsito";

export default function Chat(){
    return(<>
        <HeaderApp/>
        <Chatsito/>
        <FooterApp/>
    </>);
}