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
            <div className="body">
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
                                        <p style={{ fontSize: '20px', marginTop: '-100px', lineHeight: 1.6 }}>
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
                            {/* Add other slides here */}
                        </div>
                        <button className="prev" onClick={() => moveSlide('carousel1', -1)}>&#10094;</button>
                        <button className="next" onClick={() => moveSlide('carousel1', 1)}>&#10095;</button>
                    </div>

                    <br />
                    <p style={{ textAlign: 'left', fontSize: '45px', fontWeight: 'bold', paddingLeft: '200px' }}>
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
                            {/* Add other slides here */}
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
                                {/* Add other specialists here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp />
        </div>
    );
}
