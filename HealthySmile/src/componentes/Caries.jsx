import React, { useEffect } from 'react';
import './Caries.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta
import FooterApp from './footer';
import HeaderApp from './header';

export default function Caries() {
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
                <h1>Caries</h1>
            </div>

      {/* Sección "¿Qué son las caries?" */}
      <section id="que-son-implantes">
        <div className="background-shapes">
          <div className="square"></div>
          <div className="rectangle"></div>
        </div>
        <h2 className="titulo-principal">¿Qué son las caries?</h2>
        <p>
          La caries dental es el daño que ocurre cuando los ácidos producidos por
          las bacterias en la boca descomponen el esmalte dental, lo que lleva a la
          formación de pequeños agujeros o "cavidades". Es uno de los problemas dentales
          más comunes, pero puede prevenirse y tratarse si se detecta a tiempo.
        </p>
      </section>

      {/* Sección "Modelo 3D" */}
      <div className="section" id="modelos-3d">
        <h2 className="titulo-principal">Modelo 3D</h2>
        <img src="m1ca.png" alt="Modelo 3D" width="800" height="auto" />
      </div>

      {/* Sección "Factores de riesgo" */}
      <div className="section" id="factores-riesgo">
        <h2 className="titulo-principal">Factores de riesgo</h2>
        <hr className="divider" />
        <p>Algunos factores que aumentan el riesgo de desarrollar caries son:</p>
        <ul className="risk-factors">
          <li>Consumo frecuente de alimentos y bebidas con alto contenido de azúcar.</li>
          <li>Inadecuada higiene bucal.</li>
          <li>Boca seca, causada por ciertos medicamentos o condiciones médicas.</li>
          <li>Reflujo gástrico, que puede exponer los dientes a ácidos estomacales.</li>
        </ul>
      </div>

      {/* Sección "Síntomas" */}
      <div className="section" id="sintomas">
        <h2 className="titulo-principal">Síntomas</h2>
        <p>En las primeras etapas, la caries puede no mostrar síntomas. A medida que avanza, los síntomas pueden incluir:</p>
        <div className="symptoms-container">
          <div className="symptom">
            <img src="s1ca.jpg" alt="Sensibilidad dental" />
            <p>Sensibilidad dental, particularmente con alimentos o bebidas calientes, frías o dulces.</p>
          </div>
          <div className="symptom">
            <img src="s2ca.jpg" alt="Manchas en los dientes" />
            <p>Manchas marrones, negras o blancas en la superficie de los dientes.</p>
          </div>
          <div className="symptom">
            <img src="s3ca.jpg" alt="Mal aliento persistente" />
            <p>Mal aliento persistente.</p>
          </div>
          <div className="symptom">
            <img src="s4ca.jpg" alt="Cavidades visibles" />
            <p>Agujeros visibles o cavidades en los dientes.</p>
          </div>
        </div>
      </div>

      {/* Sección "Causas" */}
      <div className="content">
      <h1 className="title">Causas</h1>
        <hr />
        <div className="causes">
          <div className="cause-item">
            <div className="number-circle">01</div>
            <p className="cause-text">Caídas accidentales.</p>
          </div>
          <div className="cause-item">
            <div className="number-circle">02</div>
            <p className="cause-text">Golpes durante actividades deportivas.</p>
          </div>
          <div className="cause-item">
            <div className="number-circle">03</div>
            <p className="cause-text">Accidentes automovilísticos.</p>
          </div>
          <div className="cause-item">
            <div className="number-circle">04</div>
            <p className="cause-text">Mordeduras a objetos duros.</p>
          </div>
        </div>
      </div>

      {/* Sección "Complicaciones" */}
      <div className="section" id="complicaciones">
        <div className="circle-container">
          <div className="circle-images">
            <img src="c1ca.png" alt="Complicación 1" />
            <img src="c2ca.jpg" alt="Complicación 2" />
          </div>
          <div className="center-circle">
            <h2>Complicaciones</h2>
            <p>Si no se trata, la caries puede causar complicaciones graves, como:</p>
            <ul>
              <li>Dolor intenso de dientes.</li>
              <li>Infecciones en la raíz del diente.</li>
              <li>Problemas en la masticación y alineación de los dientes.</li>
              <li>Abscesos dentales.</li>
              <li>Pérdida de dientes.</li>
            </ul>
          </div>
          <div className="circle-images">
            <img src="c3ca.jpg" alt="Complicación 3" />
            <img src="c4ca.jpg" alt="Complicación 4" />
          </div>
        </div>
      </div>

      {/* Sección "Prevención" */}
      <div className="section" id="prevencion">
        <h2 className="titulo-principal">Prevención</h2>
        <p>Puedes prevenir las caries siguiendo estos hábitos:</p>
        <ul>
          <li>Cepíllate los dientes al menos dos veces al día con pasta dental con flúor.</li>
          <li>Usa hilo dental diariamente para limpiar entre los dientes.</li>
          <li>Limita el consumo de alimentos y bebidas azucaradas.</li>
          <li>Bebe suficiente agua, especialmente agua fluorada.</li>
          <li>Acude regularmente al dentista para limpiezas y chequeos profesionales.</li>
        </ul>
        <div className="images">
          <img src="p1ca.jpg" alt="Prevención Imagen 1" />
          <img src="p2ca.jpg" alt="Prevención Imagen 2" />
        </div>
      </div>

      {/* Sección "Tratamiento" */}
      <div className="section" id="tratamiento">
        <h2>Tratamiento</h2>
        <p className="subtitle">
          <strong>El tratamiento de la caries varía según la gravedad:</strong>
        </p>
        <ul>
          <li>Flúor: En las etapas iniciales, el flúor puede ayudar a revertir el daño en el esmalte.</li>
          <li>Empastes dentales: Si la caries ha avanzado, el dentista eliminará el tejido dañado y lo rellenará.</li>
          <li>Coronas: Si la caries ha destruido una gran parte del diente, puede requerir una corona dental.</li>
          <li>Endodoncia: Si la infección llega al nervio del diente, puede ser necesaria una endodoncia.</li>
          <li>Extracción dental: En casos graves, cuando el diente está muy dañado, puede requerirse extracción.</li>
        </ul>
      </div>
      <FooterApp></FooterApp>
        </div>
    );
}

