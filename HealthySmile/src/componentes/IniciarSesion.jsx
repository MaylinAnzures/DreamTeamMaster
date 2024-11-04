import React, { useEffect } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './IniciarSesion.css';
import MyOutlinedButton from './OutlinedButton';
import MyButton from './Button';
import FormLogIn from './FormLogIn';

export default function IniciarSesion() {
    useEffect(() => {
        const patrocinadores = document.querySelectorAll('.patrocinadores figure img');

        function handleScroll() {
            patrocinadores.forEach((img) => {
                const rect = img.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Verifica si la imagen está visible en la ventana
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    // Añadir clase de animación
                    img.classList.add('animate');
                } else {
                    // Remover clase de animación si se sale de la vista
                    img.classList.remove('animate');
                }
            });
        }

        // Ejecuta la función al hacer scroll
        window.addEventListener('scroll', handleScroll);
        // Llamada inicial para verificar la posición en el primer render
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para desplazarse suavemente a la sección accesoRapido
    const handleScrollToAccesoRapido = () => {
        const accesoRapidoSection = document.getElementById('accesoRapido');
        if (accesoRapidoSection) {
            accesoRapidoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <HeaderApp />
            <div className='section-one allY'>
                <div className='section-one-content'>
                    <h1>Entra a tu perfil personal</h1>
                    <MyOutlinedButton
                        label="INICIAR SESIÓN"
                        color="var(--original-IniciarSesion-colorButton-white,white)"
                        borderColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                        hoverColor="var(--original-IniciarSesion-colorButton-black,black)"
                        hoverBorderColor="var(--color-principal)"
                        backgroundColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                        hoverBackgroundColor="var(--original-IniciarSesion-colorButton-white,white)"
                        onClick={handleScrollToAccesoRapido} // Agrega el manejador de clic aquí
                    />
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
            <div className='patrocinadores'>
                <figure><img src='../../public/patrocinador1.png' alt="Patrocinador 1" /></figure>
                <figure><img src='../../public/patrocinador2.png' alt="Patrocinador 2" /></figure>
                <figure><img src='../../public/patrocinador4.png' alt="Patrocinador 4" /></figure>
                <figure><img src='../../public/patrocinador3.png' alt="Patrocinador 3" /></figure>
                <figure><img src='../../public/patrocinador5.jpg' alt="Patrocinador 5" /></figure>
            </div>
            <div className='section-two'>
                <figure></figure>
                <figcaption>
                    <h5>Acceso rápido</h5>
                    <h2>Acceso rápido y sencillo</h2>
                    <p>Para iniciar sesión en nuestro sitio web, simplemente haga clic en el enlace correspondiente.</p>
                </figcaption>
            </div>
            <div className='section-three'>
                <figcaption>
                    <h5>Sesión activa</h5>
                    <h2>Ingreso seguro</h2>
                    <p>La página de inicio de sesión le pedirá que ingrese su nombre de usuario y contraseña.</p>
                </figcaption>
                <figure></figure>
            </div>
            <div className='section-registrarse'>
                <h2>Forma parte de la familia Healthy Smile y cuida de tu <br /> sonrisa con nosotros</h2>
                <figure>
                    <img src='../../public/signUpImage.png' alt="Registro" />
                </figure>
                <figcaption>
                    <p>La seguridad de tu cuenta es importante. Asegúrate de utilizar una contraseña segura y de no compartirla 
                        con <br /> nadie para proteger tu información personal.</p>
                </figcaption>
              <a href='/Registro'><MyButton label="REGISTRARSE"/> </a>
            </div>
            <div className='section-accesoRapido'>
                <div className='prueba'>
                    <div className='accesoRapido' id='accesoRapido'><FormLogIn /></div>
                    <div className='info-accesoRapido'>
                        <h5>Sesión activa</h5>
                        <h6>Accede con tu cuenta.</h6>
                        <h5>Ingreso seguro</h5>
                        <h6>Ingresa tus datos personales.</h6>
                        <h5>Abrir sesión</h5>
                    </div>
                </div>
            </div>
            <FooterApp />
        </div>
    );
}
