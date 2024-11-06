import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './IniciarSesion.css';
import MyOutlinedButton from './OutlinedButton';

export default function Decision() {
    return (
        <div>
            <HeaderApp />
                <div className='section-one allY'>
                    <div className='section-one-content'>
                        <h1>Entra a tu perfil personal</h1>
                        <a href='/IniciarSesion'>
                        <MyOutlinedButton
                            label="INICIAR SESIÓN"
                            color="var(--original-IniciarSesion-colorButton-white,white)"
                            borderColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                            hoverColor="var(--original-IniciarSesion-colorButton-black,black)"
                            hoverBorderColor="var(--color-principal)"
                            backgroundColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                            hoverBackgroundColor="var(--original-IniciarSesion-colorButton-white,white)"
                        />
                         </a>
                    <a href='/Registro'> <MyOutlinedButton
                            label="REGISTRARSE"
                            color="var(--original-IniciarSesion-colorButton-white,white)"
                            borderColor="var(--original-IniciarSesion-colorButton-white,white)"
                            hoverColor="var(--original-IniciarSesion-colorButton-black,black)"
                            hoverBorderColor="var(--original-IniciarSesion-colorButton-white,white)"
                            backgroundColor="transparent"
                            hoverBackgroundColor="var(--original-IniciarSesion-colorButton-white,white)"
                        /> </a>
                    </div>
                </div>
            <FooterApp />
        </div>
    );
}
