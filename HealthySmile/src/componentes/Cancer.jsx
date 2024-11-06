import React, { useEffect } from 'react';
import './Cancer.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Cancer() {
    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }, []);

    return (
        <div>
            <HeaderApp></HeaderApp>
            {/* Sección destacada de título "Gingivitis" */}
            <div className="hero">
                <h1>Cancer</h1>
            </div>

            {/* Primera sección: "¿Qué es el cáncer bucal?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es el cáncer bucal?</h2>
                <p>El cáncer bucal se refiere a los tumores malignos que pueden desarrollarse en los tejidos de la boca
                incluidos los labios, la lengua, las encías, el paladar, 
                las mejillas y la garganta.Es una enfermedad seria que requiere un diagnóstico temprano para mejorar 
                las probabilidades de tratamiento exitoso.</p>
            </section>

            {/* Segunda sección: "Modelos 3D" */}
            <div className="section" id="modelos-3d">
                <h2 className="titulo-principal">Modelo 3D</h2>
                <img src="modeloc.png" alt="Modelo 3D" width="800" />
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" />
                <p>Algunos factores que aumentan el riesgo de desarrollar cáncer bucal son:</p>
                <ul className="risk-factors">
                    <li>Consumo de tabaco o alcohol.</li>
                    <li>Exposición a infecciones por VPH.</li>
                    <li>Antecedentes familiares de cáncer.</li>
                    <li>Dieta pobre en frutas y verduras.</li>
                    <li>Edad avanzada (mayores de 50 años).</li>
                </ul>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los síntomas más comunes del cáncer bucal incluyen:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1c.png" alt="Dolor en el sitio del implante" />
                        <p>Llagas o úlceras en la boca que no sanan</p>
                    </div>
                    <div className="symptom">
                        <img src="s2c.png" alt="Hinchazón de las encías" />
                        <p>Bultos o áreas engrosadas en los labios, encías o dentro de la boca</p>
                    </div>
                    <div className="symptom">
                        <img src="s3c.png" alt="Dolor en el sitio del implante" />
                        <p>Manchas blancas o rojas en el interior de la boca</p>
                    </div>
                    <div className="symptom">
                        <img src="s4c.png" alt="Hinchazón de las encías" />
                        <p>Dolor o dificultad para tragar.</p>
                    </div>
                    <div className="symptom">
                        <img src="s5c.png" alt="Dolor en el sitio del implante" />
                        <p>Pérdida de dientes sin razón aparente.</p>
                    </div>
                    <div className="symptom">
                        <img src="s6c.png" alt="Hinchazón de las encías" />
                        <p>Dolor en la mandíbula o rigidez</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">El cáncer bucal se desarrolla cuando las células en la boca sufren mutaciones en su ADN...</p>
                <hr />
                <div className="causes">
                    <div className="cause-item">
                        <div className="number-circle circle-1">01</div>
                        <p className="cause-text">Tabaquismo o consumo de tabaco en cualquier forma.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-1">02</div>
                        <p className="cause-text">Consumo excesivo de alcohol.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-1">03</div>
                        <p className="cause-text">Infección por el virus del papiloma humano (VPH).</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-1">04</div>
                        <p className="cause-text">Exposición excesiva al sol (para el cáncer en los labios).</p>
                    </div>
                </div>
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1c.jpg" alt="Complicación 1" />
                        <img src="c2c.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>El cáncer bucal puede extenderse a otras partes 
                de la boca y cuerpo si no se trata a tiempo. 
                Las complicaciones incluyen:</p>
                <li>Pérdida de tejidos y órganos afectados.</li>
                <li>Dificultades para hablar o tragar.</li>
                <li>Antecedentes familiares de cáncer.</li>
                <li>Desfiguración facial.</li>
                <li>Extensión del cáncer a otras áreas del cuerpo (metástasis).</li>   
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src="c3c.jpg" alt="Complicación 3" />
                        <img src="c4c.jpg" alt="Complicación 4" />
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <p className="subtitle"><strong>El tratamiento depende de la gravedad del traumatismo:</strong></p>
                <ul>
                    <li>Cirugía: Para extirpar el tumor y los tejidos afectados.</li>
                    <li>Radioterapia: Uso de rayos X de alta energía para destruir las células cancerosas.</li>
                    <li>Quimioterapia: Uso de medicamentos para eliminar células cancerosas.</li>
                    <li>Terapia dirigida: Uso de medicamentos que atacan características específicas de las células cancerosas.</li>
                </ul>
            </div>

            {/* Barra inferior */}
            <FooterApp />
        </div>
    );
}
