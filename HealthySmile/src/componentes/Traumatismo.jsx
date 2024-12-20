import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {House_Traumatismo}  from './House_Traumatismo'
import './Traumatismo.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';
import { OrbitControls } from '@react-three/drei';

export default function Traumatismos() {
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
            <HeaderApp/>
            {/* Sección destacada de título "Traumatismo Bucodental" */}
            <div className="hero">
                <h1>Traumatismo Bucodental</h1>
            </div>

            {/* Primera sección: "¿Qué son?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué son los traumatismos bucodentales?</h2>
                <p>
                    Los traumatismos bucodentales son lesiones físicas en los dientes, encías, labios o mandíbulas, que pueden resultar de accidentes, caídas o actividades deportivas. 
                    Estos traumatismos pueden variar desde fracturas leves hasta la pérdida completa de dientes.
                </p>
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
        <House_Traumatismo scale={[0.6, 0.6, 0.6]} position={[0, -0.5, 0]} />

        {/* Controles para interactuar con el modelo */}
        <OrbitControls target={[0, 0, 0]} />
    </Canvas>
</div>


            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" />
                <p>
                    Las personas con mayor riesgo son aquellas que participan en deportes de contacto sin protectores bucales, 
                    los niños pequeños, y las personas con condiciones médicas que afectan la coordinación o el equilibrio.
                </p>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los síntomas pueden variar según la gravedad de la lesión, pero incluyen:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1t.jpg" alt="Dolor en el sitio del implante" />
                        <p>Dolor dental, en la mandíbula, dificultad para masticar o hablar.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2t.jpeg" alt="Hinchazón de las encías" />
                        <p>Fracturas visibles en los dientes</p>
                    </div>
                    <div className="symptom">
                        <img src="s3t.jpg" alt="Hinchazón de las encías" />
                        <p>Sangrado en las encías o en los tejidos blandos</p>
                    </div>
                    <div className="symptom">
                        <img src="s4t.png" alt="Hinchazón de las encías" />
                        <p>Dientes desplazados o aflojados</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <hr />
                <div className="causes">
                    <div className="cause-item">
                        <div className="number-circle circle-1">01</div>
                        <p className="cause-text">Caídas accidentales</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-2">02</div>
                        <p className="cause-text">Golpes durante actividades deportivas</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-3">03</div>
                        <p className="cause-text">Accidentes automovilísticos</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-4">04</div>
                        <p className="cause-text">Mordeduras a objetos duros</p>
                    </div>
                </div>
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1t.jpg" alt="Complicación 1" />
                        <img src="c2t.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>Las complicaciones pueden incluir:</p>
                        <li>Infecciones si la lesión no se trata correctamente.</li>
                        <li>Pérdida permanente de dientes.</li>
                        <li>Daño a las encías y al hueso maxilar.</li>
                        <li>Necesidad de tratamientos extensivos como implantes o endodoncias.</li>
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src="c3t.jpg" alt="Complicación 3" />
                        <img src="c4t.png" alt="Complicación 4" />
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <ul>
                    <li>Fracturas dentales: Se pueden reparar con empastes o coronas.</li>
                    <li>Dientes desplazados: Un dentista puede reposicionar los dientes.</li>
                    <li>Dientes perdidos: En caso de que un diente sea expulsado completamente, debe reimplantarse lo antes posible o reemplazarse con un implante.</li>
                </ul>
            </div>

            <FooterApp />
        </div>
    );
}
