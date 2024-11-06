// App.js
import React, { useEffect } from 'react';
import HeaderApp from './header';
import FooterApp from './footer';
import './Implantes.css';
import logoSmile from './logoSmile.png';
import modelosi from '/modelosi.png';
import s1i from '/s1i.png';
import s2i from '/s2i.png';
import s3i from '/s3i.png';
import p1i from '/p1i.png';
import p2i from '/p2i.jpeg';
import c1i from '/c1i.jpg';
import c2i from '/c2i.jpeg';
import c3i from '/c3i.jpg';
import c4i from '/c4i.jpg';

const App = () => {
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
            
            <div className="hero">
                <h1>Implantes</h1>
            </div>
            
            <section id="que-son-implantes" className="section">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué son los implantes?</h2>
                <p>Los implantes dentales son dispositivos de titanio que se insertan en el hueso maxilar para reemplazar la raíz de un diente perdido. Una vez integrados, sirven como base para coronas, puentes o dentaduras postizas, proporcionando una solución permanente para la pérdida de dientes.</p>
            </section>

            <div className="section" id="modelos-3d">
                <h2 className="titulo-principal">Modelo 3D</h2>
                <img src={modelosi} alt="Modelo 3D" width="800" height="auto" />
            </div>

            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" />
                <ul className="risk-factors">
                    <li>Fumar puede afectar la cicatrización del implante.</li>
                    <li>Enfermedades sistémicas como la diabetes no controlada pueden interferir en la integración del implante.</li>
                    <li>Falta de suficiente hueso maxilar para sostener el implante.</li>
                    <li>Mala higiene oral que puede llevar a infecciones alrededor del implante.</li>
                </ul>
            </div>

            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>Los implantes dentales no presentan síntomas propiamente dichos, ya que son una solución para la pérdida de dientes. Sin embargo, después de la colocación de un implante, pueden aparecer síntomas temporales como:</p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src={s1i} alt="Dolor en el sitio del implante" />
                        <p>Dolor o incomodidad en el sitio del implante.</p>
                    </div>
                    <div className="symptom">
                        <img src={s2i} alt="Hinchazón de las encías" />
                        <p>Hinchazón de las encías.</p>
                    </div>
                    <div className="symptom">
                        <img src={s3i} alt="Sangrado leve después de la cirugía" />
                        <p>Sangrado leve después de la cirugía.</p>
                    </div>
                </div>
            </div>

            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">Los implantes se utilizan para reemplazar dientes que se han perdido por:</p>
                <hr />
                <div className="causes">
                    <div className="cause-item">
                        <div className="number-circle circle-1">01</div>
                        <p className="cause-text">Enfermedad periodontal avanzada.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-2">02</div>
                        <p className="cause-text">Traumatismos dentales.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-3">03</div>
                        <p className="cause-text">Caries severas.</p>
                    </div>
                    <div className="cause-item">
                        <div className="number-circle circle-4">04</div>
                        <p className="cause-text">Pérdida de dientes por envejecimiento o desgaste.</p>
                    </div>
                </div>
            </div>

            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src={c1i} alt="Complicación 1" />
                        <img src={c2i} alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>Las complicaciones pueden incluir:</p>
                        <ul>
                            <li>Infección en el sitio del implante.</li>
                            <li>Daño a estructuras cercanas, como otros dientes o nervios.</li>
                            <li>Falla en la integración del implante con el hueso (implante flojo).</li>
                            <li>Periimplantitis (inflamación alrededor del implante).</li>
                        </ul>
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src={c3i} alt="Complicación 3" />
                        <img src={c4i} alt="Complicación 4" />
                    </div>
                </div>
            </div>

            <div className="section" id="prevencion">
                <div className="text">
                    <h2 className="titulo-principal">Prevención</h2>
                    <p>Para cuidar los implantes y prevenir complicaciones:</p>
                    <ul>
                        <li>Mantén una excelente higiene oral, cepillando alrededor del implante y usando hilo dental.</li>
                        <li>Evita fumar, ya que afecta la cicatrización.</li>
                        <li>Visita regularmente al dentista para chequeos y limpiezas.</li>
                    </ul>
                </div>
                <div className="images">
                    <img src={p1i} alt="Prevención Imagen 1" />
                    <img src={p2i} alt="Prevención Imagen 2" />
                </div>
            </div>

            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <p className="subtitle"><strong>El proceso de colocación del implante incluye:</strong></p>
                <ul>
                    <li>Evaluación previa: Un examen detallado de la boca y los huesos para asegurarse de que puedes recibir un implante.</li>
                    <li>Cirugía de colocación: El implante de titanio se inserta en el hueso maxilar.</li>
                    <li>Integración ósea: Se permite que el implante se fusione con el hueso durante varios meses.</li>
                    <li>Colocación de la corona: Una vez integrado, se coloca una corona que imita la apariencia de un diente natural.</li>
                </ul>
            </div>

            <FooterApp />
        </div>
    );
};

export default App;
