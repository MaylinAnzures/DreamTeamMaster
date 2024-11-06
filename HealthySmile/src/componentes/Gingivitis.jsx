import React, { useEffect } from 'react';
import './Gingivitis.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Gingivitis() {
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

            {/* Primera sección: "¿Qué es?" */}
            <section id="que-son-implantes">
                <div className="background-shapes">
                    <div className="square"></div>
                    <div className="rectangle"></div>
                </div>
                <h2 className="titulo-principal">¿Qué es la gingivitis?</h2>
                <p>
                    La gingivitis es una forma común y leve de enfermedad de las encías (enfermedad periodontal) que causa irritación, enrojecimiento e
                    hinchazón (inflamación) de la parte de las encías que rodea la base de los dientes. La gingivitis es
                    común, y es importante tratarla a tiempo, ya que puede llevar a formas más graves de enfermedad de las encías (periodontitis) y,
                    finalmente, a la pérdida de dientes.
                </p>
            </section>

            {/* Segunda sección: "Modelos 3D" */}
            <div className="section" id="modelos-3d">
                <h2 className="titulo-principal">Modelo 3D</h2>
                <img src="m1g.png" alt="Modelo 3D" width="800" height="auto" />
            </div>

            {/* Tercera sección: "Factores de riesgo" */}
            <div className="section" id="factores-riesgo">
                <h2 className="titulo-principal">Factores de riesgo</h2>
                <hr className="divider" /> {/* Línea blanca debajo del encabezado */}
                <p>
                    Las personas con mayor riesgo son aquellas que participan en deportes
                    de contacto sin protectores bucales, los niños pequeños, y las personas
                    con condiciones médicas que afectan la coordinación o el equilibrio.
                </p>
            </div>

            {/* Cuarta sección: "Síntomas" */}
            <div className="section" id="sintomas">
                <h2 className="titulo-principal">Síntomas</h2>
                <p>
                    Los síntomas de la gingivitis pueden ser leves, por lo que es posible que no te des cuenta de que tienes la afección.
                    Sin embargo, los signos y síntomas comunes de la gingivitis incluyen:
                </p>
                <div className="symptoms-container">
                    <div className="symptom">
                        <img src="s1g.jpg" alt="Dolor en el sitio del implante" />
                        <p>Encías inflamadas o hinchadas.</p>
                    </div>
                    <div className="symptom">
                        <img src="s2g.png" alt="Hinchazón de las encías" />
                        <p>Encías de color rojo oscuro o violáceo.</p>
                    </div>
                    <div className="symptom">
                        <img src="s3g.jpg" alt="Dolor en el sitio del implante" />
                        <p>Encías retraídas (las encías que se han separado de los dientes).</p>
                    </div>
                    <div className="symptom">
                        <img src="s4g.jpeg" alt="Hinchazón de las encías" />
                        <p>Encías que sangran fácilmente al cepillarte o usar hilo dental.</p>
                    </div>
                </div>
            </div>

            {/* Quinta sección: "Causas" */}
            <div className="content">
                <h1 className="title">Causas</h1>
                <p className="intro">
                    La causa más común de la gingivitis es la acumulación de placa bacteriana en los dientes. La placa es una película pegajosa e incolora
                    que se forma en los dientes cuando las bacterias en la boca interactúan con los alimentos y bebidas. Si no se elimina con el cepillado y
                    el uso de hilo dental, la placa puede endurecerse y convertirse en sarro, lo que irrita las encías y provoca gingivitis.
                </p>
                <hr />
            </div>

            {/* Sexta sección: "Complicaciones" */}
            <div className="section" id="complicaciones">
                <div className="circle-container">
                    <div className="circle-images" style={{ marginBottom: '-60px' }}>
                        <img src="c1g.jpg" alt="Complicación 1" />
                        <img src="c2g.jpg" alt="Complicación 2" />
                    </div>
                    <div className="center-circle">
                        <h2>Complicaciones</h2>
                        <p>
                            Si no se trata, la gingivitis puede avanzar a periodontitis, una condición más grave que puede provocar la pérdida de dientes. Las complicaciones adicionales pueden incluir:
                            <li>Abscesos en las encías.</li>
                            <li>Recesión de las encías.</li>
                            <li>Daño a los tejidos blandos y los huesos que sostienen los dientes.</li>
                        </p>
                    </div>
                    <div className="circle-images" style={{ marginTop: '-60px' }}>
                        <img src="c3g.jpg" alt="Complicación 3" />
                        <img src="c4g.png" alt="Complicación 4" />
                    </div>
                </div>
            </div>

            {/* Octava sección: "Tratamiento" */}
            <div className="section" id="tratamiento">
                <h2>Tratamiento</h2>
                <p className="subtitle"><strong>El tratamiento para la gingivitis es sencillo si se detecta en una etapa temprana. Los pasos comunes incluyen:</strong></p>
                <ul>
                    <li>Limpieza profesional: Tu dentista o higienista dental eliminará toda la placa, el sarro y las bacterias de la boca.</li>
                    <li>Instrucciones de higiene oral: Te enseñarán a mantener una buena rutina de limpieza en casa para evitar la reaparición de la enfermedad.</li>
                    <li>Cuidado en el hogar: Mejorar tus hábitos de cepillado y uso de hilo dental es clave para revertir la gingivitis.</li>
                </ul>
                <p>
                    Si se siguen estas recomendaciones, la gingivitis suele desaparecer en unos días o semanas. En casos más avanzados, puede ser necesario un tratamiento más agresivo, como raspado y alisado radicular.
                </p>
            </div>
            <FooterApp></FooterApp>
        </div>
    );
}
