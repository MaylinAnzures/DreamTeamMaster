import React, { useEffect } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './Home.css';
import car21 from './car21.png';
import car22 from './car22.png';
import car23 from './car23.png';
import car24 from './car24.png';
import car25 from './car25.png';
import car26 from './car26.png';
import espe1 from './espe1.png';
import panel1 from './panel1.png';
import panel2 from './panel2.png';
import panel3 from './panel3.png';
import panel4 from './panel4.png';
import panel5 from './panel5.png';
import panel6 from './panel6.png';
import panel7 from './panel7.png';

export default function Home() {
    useEffect(() => {
        // Reemplazo de `window.onload` para que funcione cuando el componente monte
        window.scrollTo(0, 0);

        // Configuración inicial para cada carrusel
        document.querySelectorAll('.carousel').forEach(carousel => {
            carousel.setAttribute("data-current-slide", 0);
        });
    }, []);
    
    const showSlide = (carouselId, slideIndex) => {
        const carousel = document.querySelector(`#${carouselId} .carousel-slide`);
        if (!carousel) return;

        const totalSlides = carousel.children.length;

        if (slideIndex >= totalSlides) {
            slideIndex = 0; // Volver al primer slide
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - 1; // Volver al último slide
        }

        carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
        document.getElementById(carouselId).setAttribute("data-current-slide", slideIndex);
    };

    // Función para mover al siguiente o anterior slide
    const moveSlide = (carouselId, step) => {
        const carousel = document.getElementById(carouselId);
        const currentSlide = parseInt(carousel.getAttribute("data-current-slide")) || 0;
        showSlide(carouselId, currentSlide + step);
    };

    return (
        <div>
            <HeaderApp />
            <div className="bodyMax">
            <div className="general">
                <div id="carousel1" className="carousel">
                    <div className="carousel-slide">
                        <div className="slide panel1">
                            <p style={{ fontSize: '9vw', color: 'pink', fontFamily: "'Times New Roman', Times, serif" }}>
                                Cuida tu Sonrisa
                            </p>
                            <p style={{ fontSize: '2vw' }}>
                                Agiliza tu cita dental desde casa. Regístrate hoy y accede a servicios
                                <br />de consulta, productos dentales y más.
                            </p>
                            <div className="button-container">
                                <button className="bazul">SOLICITAR CONSULTA</button>
                                <button className="button2">IR A LA TIENDA</button>
                            </div>
                        </div>
                        <div className="slide panel2" style={{ backgroundColor: 'lightslategrey' }}>
                            <div className="contenedor">
                                <div className="columna">
                                    <p style={{ fontSize: '110px', fontFamily: "'Times New Roman', Times, serif" }}>
                                        Nuestro equipo
                                    </p>
                                    <p style={{ fontSize: '20px', lineHeight: 1.6 }}>
                                        Nuestros especialistas están comprometidos con la
                                        <br />excelencia en el cuidado dental. Cada uno de ellos
                                        <br />aporta una amplia experiencia y conocimientos en
                                        <br />diversas áreas de la odontología, asegurando un
                                        <br />tratamiento personalizado y efectivo para cada
                                        <br />paciente.
                                    </p>
                                    <button className="bslide2">CONOCER ESPECIALISTAS</button>
                                </div>
                                <div className="columnamedio">
                                    <img src={panel2} alt="Panel 2" className="imgpanel2" />
                                </div>
                            </div>
                        </div>
                        <div className="slide panel3"></div>
                        <div className="slide panel4">
                            <div className="contenedor">
                                <div className="columnamedio">
                                    <img src={panel4} className="imgpanel4" alt="Panel 4" />
                                </div>
                                <div className="columna">
                                    <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                                        Tu aliado para una salud dental integral
                                    </p>
                                    <p style={{ fontSize: '100px', fontFamily: "'Times New Roman', Times, serif" }}>
                                        ¡Más que una página online dental!
                                    </p>
                                    <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                                        En HealthySmile no solo ofrecemos consultas y<br />
                                        productos, sino una experiencia completa para<br />
                                        mejorar tu bienestar dental. Conectamos con<br />
                                        expertos, proporcionamos soluciones a medida y<br />
                                        te acompañamos en cada paso hacia una sonrisa<br />
                                        más saludable y feliz.
                                    </p>
                                    <button className="bazul">ÚNETE AHORA</button>
                                </div>
                            </div>
                        </div>

                        <div className="slide panel5"></div>

                        <div className="slide panel6" style={{ backgroundColor: 'lightgrey' }}>
                            <div className="contenedor">
                                <div className="columna">
                                    <p style={{ fontSize: '80px', fontFamily: "'Times New Roman', Times, serif" }}>
                                        Cuidado dental <br />
                                        <b>online</b>
                                    </p>
                                    <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                                        Descubre productos dentales de alta calidad<br />
                                        para cuidar de tu salud bucal desde la<br />
                                        comodidad de tu hogar. Ofrecemos una<br />
                                        variedad de artículos que van desde cepillos<br />
                                        hasta tratamientos especializados.
                                    </p>
                                    <button className="comprar">COMPRAR ONLINE</button>
                                </div>
                                <div className="columnamedio">
                                    <img src={panel6} className="imgpanel6" alt="Panel 6" />
                                </div>
                            </div>
                        </div>

                        <div className="slide panel7">
                            <p style={{ fontSize: '25px', lineHeight: '1.6' }}>
                                Especialistas en sonrisas
                            </p>
                            <p style={{ fontSize: '110px', fontFamily: "'Times New Roman', Times, serif" }}>
                                Descubre el poder de<br />
                                una sonrisa saludable
                            </p>
                            <br />
                            <button className="bpanel7">ÚNETE A LA EXPERIENCIA</button>
                        </div>
                    </div>
                    <button className="prev" onClick={() => moveSlide('carousel1', -1)}>&#10094;</button>
                    <button className="next" onClick={() => moveSlide('carousel1', 1)}>&#10095;</button>
                </div>

                <br />
                <p style={{ textAlign: 'center', fontSize: '45px', fontWeight: 'bold' }}>
                    Tratamientos Dentales Integrales
                </p>
                <p style={{ fontSize: '25px' }}>
                    Ofrecemos todos nuestros tratamientos y servicios en instalaciones cómodas y modernas, garantizando los más altos estándares de calidad.
                </p>
                <br />

                <div id="carousel2" className="carousel">
                    <div className="carousel-slide">
                        <div className="slide">
                            <div className="contenedor">
                                <div className="columna">
                                    <img src={car21} alt="Car 21" className="imgcar2" />
                                </div>
                                <div className="columna">
                                    <img src={car22} alt="Car 22" className="imgcar2" />
                                </div>
                                <div className="columna">
                                    <img src={car23} alt="Car 23" className="imgcar2" />
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="contenedor">
                                <div className="columna">
                                    <img src={car24} className="imgcar2" />
                                </div>
                                <div className="columna">
                                    <img src={car25} className="imgcar2" />
                                </div>
                                <div className="columna">
                                    <img src={car26} className="imgcar2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="prev" onClick={() => moveSlide('carousel2', -1)}>&#10094;</button>
                    <button className="next" onClick={() => moveSlide('carousel2', 1)}>&#10095;</button>
                </div>
                <br />
                <button className="explora">EXPLORAR MÁS</button>
                <br /><br /><br /><br />
                <div className="morado">
                    <div className="contenedor">
                        <div className="columna">
                            <p style={{ fontSize: '60px', fontWeight: 'bold' }}>
                                Consulta a nuestros<br />especialistas por chat<br />de forma gratuita
                            </p>
                        </div>
                        <div className="columnamedio">
                            <button className="mbuton">CONSULTA AHORA</button>
                        </div>
                    </div>
                </div>
                <br /><br />
                <p style={{ fontSize: '40px' }}>Conoce a Nuestros Especialistas</p>
                <div className="espe">
                    <div className="contenedor">
                        <div className="columnamedio">
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Samaria Patiño Cataño</h1>
                                <h3>Cédula: 2850636</h3>
                                <p>Odontóloga general con un enfoque en la salud dental preventiva y estética.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                            <div>
                                <img src={espe1} alt="Especialista" className="especialistas" />
                                <h1>Sigmund Rodríguez Rojas</h1>
                                <h3>Cédula: 5782277</h3>
                                <p>Especializado en el tratamiento quirúrgico de tumores malignos, con amplia experiencia en procedimientos mínimamente invasivos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />
                    <div className="azul">
                        <br /><br />
                        <div className="contenedor">
                        <div className="columnamedio">
                            <button className="bazul">CERCA DE TI EN CUALQUIER LUGAR</button>
                        </div>
                        <div className="columnamedio">
                            <button className="bazul">TECHNOINC@GMAIL.COM</button>
                        </div>
                        <div className="columnamedio">
                            <button className="bazul">LUNES A VIERNES: 7:00 A 20:00 HORAS</button>
                        </div>
                        </div>
                        <br />
                        <p style={{ fontSize: '80px', fontWeight: 'bold' }}>55 2000 6100</p>
                    </div>
                    <div className="contenedor">
                        <div className="columna form1">
                        <h3>CALL US</h3>
                        <p style={{ color: 'cornflowerblue', fontWeight: 'bold' }}>55 2000 6100</p>
                        <h3>LOCATION</h3>
                        <p>Riobamba 800, Lindavista, Gustavo A. Madero,<br />07300 Ciudad de México, CDMX</p>
                        <h3>HORARIO COMERCIAL</h3>
                        <p>Lun - Vie: 7 am - 0 pm, Sáb - Dom: 8 am - 10 pm</p>
                        </div>
                        <div className="columnamedio form2">
                        <h1>Contáctenos</h1>
                        <input type="text" name="nombre" placeholder="Ingresa tu nombre" autoFocus autoComplete="off" className="ingresa" />
                        <br />
                        <input type="email" name="email" placeholder="Ingresa un email válido" autoFocus autoComplete="off" className="ingresa" />
                        <br /><br /><br />
                        <input type="text" name="nombre" placeholder="Notas para el doctor" autoFocus autoComplete="off" className="ingresa" />
                        <br /><br />
                        <button className="entregar">ENTREGAR</button>
                        <br />
                        </div>
                    </div>
                    <br /><br /><br /><br />
            </div>
        </div>
            <FooterApp />
        </div>
    );
}
