import React, { useEffect } from 'react';
import './Sensibilidad.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Sensibilidad() {
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
            {/* Sección destacada de título "Sensibilidad Dental" */}
            <div className="hero">
                <h1>Sensibilidad Dental</h1>
            </div>

            {/* Primera sección: "¿Qué es?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es la sensibilidad dental?</h2>
                <p>
                    La sensibilidad dental es una afección en la que los dientes experimentan dolor o malestar al entrar en contacto con alimentos o bebidas frías, calientes, dulces o ácidas. Esto ocurre cuando la capa protectora del diente (el esmalte) se desgasta o las encías se retraen, exponiendo la dentina subyacente.
                </p>
            </section>

            {/* Segunda sección: "Modelos 3D" */}
            <div className="section" id="modelos-3d">
                <h2 className="titulo-principal">Modelo 3D</h2>
                <img src="modelos.png" alt="Modelo 3D" width="800" height="auto" />
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" />
                <ul className="risk-factors">
                    <li>Mala técnica de cepillado (cepillarse con demasiada fuerza).</li>
                    <li>Dietas ricas en alimentos y bebidas ácidas.</li>
                    <li>Enfermedades de las encías que provocan la recesión de las encías.</li>
                    <li>Bruxismo no tratado.</li>
                </ul>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los síntomas de la sensibilidad dental incluyen:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1s.jpg" alt="Dolor en el sitio del implante" />
                        <p>Dolor agudo y repentino al comer o beber algo frío, caliente, ácido o dulce.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2s.jpg" alt="Hinchazón de las encías" />
                        <p>Malestar dental al cepillarse o usar hilo dental.</p>
                    </div>
                    <div className="symptom">
                        <img src="s3s.jpg" alt="Hinchazón de las encías" />
                        <p>Sensación de hormigueo o dolor en los dientes sin razón aparente.</p>
                    </div>
                    <div className="symptom">
                        <img src="s4s.jpg" alt="Hinchazón de las encías" />
                        <p>Dientes desplazados o aflojados.</p>
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
                        <p className="cause-text">Desgaste del esmalte por cepillado agresivo.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-2">02</div>
                        <p className="cause-text">Uso excesivo de productos blanqueadores dentales.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-3">03</div>
                        <p className="cause-text">Recesión de las encías, lo que expone la raíz del diente.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-4">04</div>
                        <p className="cause-text">Caries no tratadas.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-5">05</div>
                        <p className="cause-text">Dientes fracturados o agrietados.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-6">06</div>
                        <p className="cause-text">Bruxismo (rechinar de dientes).</p>
                    </div>
                </div>
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1s.png" alt="Complicación 1" />
                        <img src="c2s.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>Si no se trata, la sensibilidad dental puede empeorar con el tiempo y causar dolor crónico o desarrollar problemas dentales más graves, como caries o infecciones.</p>
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <ul>
                    <li>Pastas dentales desensibilizantes: Estas pastas bloquean las señales nerviosas del diente, reduciendo el dolor.</li>
                    <li>Flúor: El dentista puede aplicar flúor en las áreas afectadas para fortalecer el esmalte.</li>
                    <li>Selladores dentales: Para cubrir las áreas expuestas de la dentina y prevenir el dolor.</li>
                    <li>Injerto de encía: En casos de recesión severa de las encías, un injerto puede proteger las raíces expuestas.</li>
                    <li>Tratamiento de conducto: En casos extremos, si otros tratamientos no funcionan, puede ser necesaria una endodoncia.</li>
                </ul>
            </div>

            {/* Barra inferior */}
            <FooterApp />
        </div>
    );
}
