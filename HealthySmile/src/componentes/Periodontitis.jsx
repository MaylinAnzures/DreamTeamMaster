import React, { useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber';
import {House_Periodontitis}  from './House_Periodontitis'
import './Periodontitis.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';
import { OrbitControls } from '@react-three/drei';

export default function Periodontitis() {
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
            {/* Sección destacada de título "Periodontitis" */}
            <div className="hero">
                <h1>Periodontitis</h1>
            </div>

            {/* Primera sección: "¿Qué es?" */}
            <section id="que-es">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es la periodontitis?</h2>
                <p>
                    La periodontitis es una enfermedad grave de las encías que puede llevar a la pérdida de dientes. Es el resultado de una inflamación
                    prolongada de las encías que causa daño a los tejidos blandos y al hueso que sostiene los dientes. Esta condición puede
                    desarrollarse a partir de una gingivitis no tratada.
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
         <House_Periodontitis />
        
        {/* Agregar controles para rotar el modelo */}
                 <OrbitControls />
            </Canvas>
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" /> {/* Línea blanca debajo del encabezado */}
                <p>
                    Los factores de riesgo para desarrollar periodontitis incluyen el tabaquismo, la diabetes, la genética y la falta de atención a
                    la higiene bucal.
                </p>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>
                    Los síntomas de la periodontitis pueden incluir:
                </p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1p.jpg" alt="Encías inflamadas" />
                        <p>Encías inflamadas y enrojecidas.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2p.png" alt="Mal aliento" />
                        <p>Mal aliento persistente.</p>
                    </div>
                    <div className="symptom">
                        <img src="s3p.jpg" alt="Recesión de las encías" />
                        <p>Recesión de las encías (desplazamiento de las encías de los dientes).</p>
                    </div>
                    <div className="symptom">
                        <img src="s4p.jpeg" alt="Pérdida de dientes" />
                        <p>Pérdida de dientes o movilidad dental.</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">
                    La periodontitis es causada por una combinación de factores, pero la causa principal es la acumulación de placa en los dientes
                    que no se elimina. Además, factores como el tabaquismo y enfermedades sistémicas pueden contribuir a su desarrollo.
                </p>
                <hr />
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1p.jpg" alt="Complicación 1" />
                        <img src="c2p.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>
                            Si no se trata, la periodontitis puede llevar a complicaciones graves, incluyendo:
                            <li>Infecciones en los huesos de la mandíbula.</li>
                            <li>Problemas de salud cardiovascular.</li>
                            <li>Incremento del riesgo de diabetes.</li>
                        </p>
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src="c3p.jpg" alt="Complicación 3" />
                        <img src="c4p.png" alt="Complicación 4" />
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <ul>
                    <li>Limpieza profunda por un dentista para eliminar la placa y el sarro.</li>
                    <li>Instrucciones de higiene bucal personalizadas.</li>
                    <li>En algunos casos, cirugía periodontal puede ser necesaria.</li>
                </ul>
                <p>
                    Con un tratamiento adecuado y un buen cuidado oral, es posible controlar y revertir la periodontitis.
                </p>
            </div>
            <FooterApp></FooterApp>
        </div>
    );
}
