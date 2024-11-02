import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './IniciarSesion.css';
import MyOutlinedButton from './OutlinedButton';
import MyButton from './Button';

export default function IniciarSesion() {
    return (
        <div>
            <HeaderApp/>
            <div id='section-one'>
                <div id='section-one-content'>
                <h1>Entra a tu perfil personal</h1>
                <MyOutlinedButton
                    label="INICIAR SESIÓN"
                    color="var(--color-text-alt)"
                    borderColor="var(--color-principal-claro-button)"
                    hoverColor="var(--color-text-alt)"
                    hoverBorderColor="var(--color-principal)"
                    backgroundColor="var(--color-principal-claro-button)"
                    hoverBackgroundColor="var(--color-principal-claro)"
                    />

                    <MyOutlinedButton
                    label="REGISTRARSE"
                    color="var(--color-text)"
                    borderColor="var(--color-text)"
                    hoverColor="var(--color-text)"
                    hoverBorderColor="var(--color-principal-clarote)"
                    backgroundColor="white"
                    hoverBackgroundColor="var(--color-principal-clarote)"
                    />
                </div>
            </div>
            <div id='patrocinadores'>
                <figure>
                    <img src='../../public/patrocinador1.png'/>
                </figure>
                <figure>
                    <img src='../../public/patrocinador2.png'/>
                </figure>
                <figure>
                    <img src='../../public/patrocinador4.png'/>
                </figure>
                <figure>
                    <img src='../../public/patrocinador3.png'/>
                </figure>
                <figure>
                    <img src='../../public/patrocinador5.jpg'/>
                </figure>
            </div>
            <div id='section-two'>
                <figure>
                    
                </figure>
                <figcaption>
                    <h5>Acceso rápido</h5>
                    <h2>Acceso rápido y sencillo</h2>
                    <p>Para iniciar sesipon en nuestro sitio web, 
                        simplemente haga click en el enlace 
                        correspondiente.</p>
                </figcaption>
            </div>
            <div id='section-three'>
                <figcaption>
                    <h5>Sesión activa</h5>
                    <h2>Ingreso seguro</h2>
                    <p>Lapágina de inicio de sesion le pedira que ingrese 
                        su nombre de usuario y contraseña.</p>
                </figcaption>
                <figure></figure>
            </div>
            <div id='section-registrarse'>
                <h2>Forma parte de la familia Healthy Smile y cuida de tu 
                    sonrisa con nosotros</h2>
            </div>
            <figure>
                <img src='../../public/signUpImage.png'/>
            </figure>
            <figcaption>
                <p>La seguridad de tu cuenta es importante. 
                    Asegúrate de utilizar una contraseña segura y 
                    de no compartirla con nadie para proteger tu informacion
                    personal.</p>
            </figcaption>
            <MyButton
                label="Registrarse"
            ></MyButton>
            <div id='section-accesoRapido'>
                <div id='prueba'>
                <div id='accesoRapido'>
                    <h1>jowoefowjfe</h1>
                </div>
                <div id='info-accesoRapido'>
                    <h5>Sesion activa</h5>
                    <h6>Accede con tu cuenta.</h6>
                    <h5>Ingreso seguro</h5>
                    <h6>Ingresa tus datos personales.</h6>
                    <h5>Abrir sesión</h5>
                </div>
                </div>
            </div>
            <FooterApp/>
        </div>
    );
}
