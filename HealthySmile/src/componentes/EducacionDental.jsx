import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './EducacionDental.css'; // Asegúrate de que este archivo CSS esté en la ruta correcta

export default function EducacionDental() {
    return (
        <div>
            <HeaderApp />
            <section className="hero">
                <h2>Visualización de Modelos 3D</h2>
            </section>

            <section className="gallery">
                <div className="gallery-item">
                    <img src="gingivitis.png" alt="Gingivitis" />
                    <a href="/Gingivitis" target="_blank" rel="noopener noreferrer">
                        <p>Gingivitis</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="Caries.png" alt="Caries Dental" />
                    <a href="/Caries" target="_blank" rel="noopener noreferrer">
                        <p>Caries Dental</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="Cáncer.jpg" alt="Cáncer bucal" />
                    <a href="/Cancer" target="_blank" rel="noopener noreferrer">
                        <p>Cáncer bucal</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="traumatismo.jpg" alt="Traumatismos bucodentales" />
                    <a href="/Traumatismo" target="_blank" rel="noopener noreferrer">
                        <p>Traumatismos bucodentales</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="Halitosis.jpg" alt="Halitosis" />
                    <a href="/Halitosis" target="_blank" rel="noopener noreferrer">
                        <p>Halitosis</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="sensibilidad.jpg" alt="Sensibilidad dental" />
                    <a href="/Sensibilidad" target="_blank" rel="noopener noreferrer">
                        <p>Sensibilidad dental</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="implantes.jpg" alt="Implantes" />
                    <a href="/Implantes" target="_blank" rel="noopener noreferrer">
                        <p>Implantes</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="Periodontitis.jpg" alt="Periodontitis" />
                    <a href="/Periodontitis" target="_blank" rel="noopener noreferrer">
                        <p>Periodontitis</p>
                    </a>
                </div>
                <div className="gallery-item">
                    <img src="quistes.png" alt="Quistes bucales" />
                    <a href="/Quiste" target="_blank" rel="noopener noreferrer">
                        <p>Quistes bucales</p>
                    </a>
                </div>
            </section>
            <FooterApp />
        </div>
    );
}
