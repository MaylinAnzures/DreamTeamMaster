import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {House_modeloextra}  from './House_modeloextra'
import './Quiste.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';
import { OrbitControls } from '@react-three/drei';

export default function QuisteBucal() {
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
            <div id="bodyMitzi">
{/* Sección destacada de título "Quiste Bucal" */}
<div className="hero">
                <h1>Quiste Bucal</h1>
            </div>

            {/* Primera sección: "¿Qué es?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es un quiste bucal?</h2>
                <p>
                    Un quiste bucal es un saco lleno de líquido que se forma en los tejidos de la boca. Puede aparecer en las encías, los labios, la lengua o los huesos maxilares. Generalmente son benignos, pero pueden crecer y causar problemas si no se tratan.
                </p>
            </section>

           {/* Segunda sección: "Modelos 3D" */}
           <div className="section" id="modelos-3d">
                 <h2 className="titulo-principal" style={{ marginBottom: '0px' }}>Modelo 3D</h2>
            <Canvas 
                style={{ height: '400px', width: '100%', marginTop: '10px' }} // Ajuste de margen para colocar el modelo justo debajo del título
                camera={{ position: [0, 2, 5], fov: 50 }} // Cámara para que el modelo sea visible
             >
               {/* Iluminación mejorada */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Modelo 3D */}
         <House_modeloextra />
        
        {/* Agregar controles para rotar el modelo */}
                 <OrbitControls />
            </Canvas>
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" /> {/* Línea blanca debajo del encabezado */}
                <ul className="risk-factors">
                    <li>Mala higiene oral.</li>
                    <li>Historia de infecciones dentales recurrentes.</li>
                    <li>Traumatismos dentales previos.</li>
                </ul>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los síntomas pueden incluir:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1q.jpg" alt="Hinchazón en la boca o mandíbula" />
                        <p>Hinchazón en la boca o mandíbula.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2q.jpg" alt="Dolor o incomodidad" />
                        <p>Dolor o incomodidad, especialmente al masticar.</p>
                    </div>
                    <div className="symptom">
                        <img src="s3q.jpg" alt="Dientes flojos o desplazados" />
                        <p>Dientes flojos o desplazados.</p>
                    </div>
                    <div className="symptom">
                        <img src="s4q.jpg" alt="Dificultad para mover la lengua" />
                        <p>Dificultad para mover la lengua o la mandíbula en casos graves.</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">Los quistes bucales pueden formarse por:</p>
                <hr />
                <div className="causes">
                    <div className="cause-item">
                        <div className="number-circle circle-1">01</div>
                        <p className="cause-text">Infecciones dentales o enfermedades no tratadas.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-2">02</div>
                        <p className="cause-text">Dientes no erupcionados o impactados.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-3">03</div>
                        <p className="cause-text">Traumatismos en la boca.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-4">04</div>
                        <p className="cause-text">Desarrollos anormales de los tejidos bucales.</p>
                    </div>
                </div>
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1q.jpg" alt="Complicación 1" />
                        <img src="c2q.jpeg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>Si no se tratan, los quistes bucales pueden causar:</p>
                        <ul>
                            <li>Daño a los dientes y huesos cercanos.</li>
                            <li>Infecciones.</li>
                            <li>Dificultades para masticar o hablar.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <ul>
                    <li>Drenaje o extirpación quirúrgica: El dentista o cirujano oral puede extraer el quiste para prevenir complicaciones.</li>
                    <li>Tratamiento de la infección: Si hay una infección presente, se recetarán antibióticos.</li>
                    <li>Evaluación y seguimiento: Exámenes regulares para monitorear el área y asegurarse de que el quiste no vuelva a formarse.</li>
                </ul>
            </div>
            </div>
            <FooterApp />
        </div>
    );
}
