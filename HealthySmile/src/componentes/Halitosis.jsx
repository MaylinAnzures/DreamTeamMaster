import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {House_Halitosis}  from './House_Halitosis'
import './Halitosis.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';
import { OrbitControls } from '@react-three/drei';

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
            <HeaderApp />
            <div className="hero">
                <h1>Halitosis</h1>
            </div>

            {/* Primera sección: "¿Qué es la halitosis?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es la halitosis?</h2>
                <p>La halitosis, o mal aliento, es un olor desagradable que sale de la boca y que puede estar causado por una mala higiene oral, enfermedades bucales o problemas de salud subyacentes.</p>
            </section>

            <div className="section" id="modelos-3d">
    <h2 className="titulo-principal" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Modelo 3D - Implantes
    </h2>
    <Canvas
        style={{
            height: '70vh', // Asegura un tamaño adecuado para el canvas
            width: '100%',
            margin: '0 auto', // Centra el canvas horizontalmente
        }}
        camera={{
            position: [0, 2, 5], // Posición de la cámara para ver claramente el modelo
            fov: 50, // Campo de visión ajustado
        }}
    >
        {/* Iluminación */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Modelo 3D */}
        <House_Halitosis scale={[0.6, 0.6, 0.6]} position={[0, -0.5, 0]} />

        {/* Controles para interactuar con el modelo */}
        <OrbitControls target={[0, 0, 0]} />
        </Canvas>
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
                <p>Los síntomas más comunes de la halitosis incluyen:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1h.png" alt="Sabor desagradable en la boca" />
                        <p>Sabor desagradable en la boca</p>
                    </div>
                    <div className="symptom">
                        <img src="s2h.jpg" alt="Boca seca" />
                        <p>Boca seca</p>
                    </div>
                    <div className="symptom">
                        <img src="s3h.jpg" alt="Sangrado en las encías o en los tejidos blandos" />
                        <p>Sangrado en las encías o en los tejidos blandos</p>
                    </div>
                    <div className="symptom">
                        <img src="s4h.png" alt="Mal olor" />
                        <p>Mal olor</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">La halitosis puede tener varias causas, como:</p>
                <hr />
                <div className="causes">
                    <div className="cause-item">
                        <div className="number-circle circle-1">01</div>
                        <p className="cause-text">Mala higiene oral.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-2">02</div>
                        <p className="cause-text">Consumo de tabaco y alcohol.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-3">03</div>
                        <p className="cause-text">Infecciones bucales.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-4">04</div>
                        <p className="cause-text">Problemas digestivos.</p>
                    </div>
                </div>
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1h.jpg" alt="Complicación 1" />
                        <img src="c2h.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>El mal aliento crónico puede afectar la vida social y la autoestima. Además, puede ser un signo de enfermedades subyacentes como diabetes o enfermedades respiratorias.</p>
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <ul>
                    <li>Mejorar la higiene oral.</li>
                    <li>Tratar infecciones o problemas digestivos subyacentes.</li>
                    <li>Usar enjuagues bucales recomendados por un profesional.</li>
                </ul>
            </div>

            {/* Barra inferior */}
            <FooterApp />
        </div>
    );
}
