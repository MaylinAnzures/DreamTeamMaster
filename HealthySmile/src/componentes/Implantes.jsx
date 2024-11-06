import React, { useEffect } from 'react';
import './Implantes.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Implantes() {
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
                <img src="modelos1.png" alt="Modelo 3D" width="800" height="auto" />
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
                        <img src="s1i.png" alt="Dolor en el sitio del implante" />
                        <p>Dolor o incomodidad en el sitio del implante.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2i.png" alt="Hinchazón de las encías" />
                        <p>Hinchazón de las encías.</p>
                    </div>
                    <div className="symptom">
                        <img src="s3i.png" alt="Dolor en el sitio del implante" />
                        <p>Sangrado leve después de la cirugía..</p>
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

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1i.jpg" alt="Complicación 1" />
                        <img src="c2i.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>
                            Si no se trata, la gingivitis puede avanzar a periodontitis, una condición más grave que puede provocar la pérdida de dientes. Las complicaciones adicionales pueden incluir:
                            Abscesos en las encías,recesión de las encías, daño a los tejidos blandos y los huesos que sostienen los dientes.
                        </p>
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src="c3i.jpg" alt="Complicación 3" />
                        <img src="c4i.png" alt="Complicación 4" />
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
                <img src="p1i.png" alt="Prevención Imagen 1" />
                <img src="p2i.jpg" alt="Prevención Imagen 2" />
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

