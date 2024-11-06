import React, { useEffect } from 'react';
import './Halitosis.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Halitosis() {
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
                <h1>Gingivitis</h1>
            </div>


{/* Primera sección: "¿Qué es el cáncer bucal?" */}
<section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es la halitosis?</h2>
                <p>La halitosis, o mal aliento, es un olor desagradable que sale de la boca y que puede estar causado por una 
                mala higiene oral, enfermedades bucales o problemas de salud subyacentes.</p>
            </section>

            {/* Segunda sección: "Modelos 3D" */}
            <div className="section" id="modelos-3d">
                <h2 className="titulo-principal">Modelo 3D</h2>
                <img src="modeloh.png" alt="Modelo 3D" width="800" />
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" />
                <ul className="risk-factors">
                    <li>Fumar o masticar tabaco.</li>
                    <li>Consumo excesivo de alcohol.</li>
                    <li>Antecedentes familiares de cáncer.</li>
                    <li>No cepillarse los dientes ni usar hilo dental regularmente.</li>
                    <li>Tener prótesis dentales mal ajustadas.</li>
                </ul>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los síntomas más comunes del cáncer bucal incluyen:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1h.png" alt="Dolor en el sitio del implante" />
                        <p>Sabor desagradable en la boca</p>
                    </div>
                    <div className="symptom">
                        <img src="s2h.jpg" alt="Hinchazón de las encías" />
                        <p>Boca seca</p>
                    </div>
                    <div className="symptom">
                        <img src="s3h.jpg" alt="Dolor en el sitio del implante" />
                        <p>Sangrado en las encías o en los tejidos blandos</p>
                    </div>
                    <div className="symptom">
                        <img src="s4h.png" alt="Hinchazón de las encías" />
                        <p>Mal olor</p>
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
                        <img src="c1h.jpg" alt="Complicación 1" />
                        <img src="c2h.jng" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>El mal aliento crónico puede afectar la vida social y la autoestima. 
                Además, puede ser un signo de enfermedades 
                subyacentes como diabetes o enfermedades respiratorias.</p>
                </div>
            </div>

            {/* Séptima sección: "Prevención" */}
            <div className="section" id="prevencion">
                <div className="text">
                    <h2 className="titulo-principal">Prevención</h2>
                    <p>Para prevenir el cáncer bucal:</p>
                    <ul>
                        <li>Evita el consumo de tabaco y alcohol.</li>
                        <li>Protege tus labios del sol usando protector solar labial.</li>
                        <li>Mantén una dieta rica en frutas y verduras.</li>
                        <li>Vacúnate contra el VPH.</li>
                        <li>Realiza autoexámenes y visita regularmente a tu dentista para chequeos.</li>
                    </ul>
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
