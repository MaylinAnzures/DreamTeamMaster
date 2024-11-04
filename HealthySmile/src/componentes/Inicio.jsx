import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './Inicio.css';
import part1 from './part1.png';
import part21 from './part21.png';
import part22 from './part22.png';
import part31 from './part31.png';
import part32 from './part32.png';
import part33 from './part33.png';
import part34 from './part34.png';
import part35 from './part35.png';
import part36 from './part36.png';



export default function Inicio() {
    return (
        <div>
            <HeaderApp />
            <div className="contenedor">
                <div className="columnamedio">
                    <img src={part1} className="imagen" alt="Descripción de la imagen" />
                </div>
                <div className="columnaiz" style={{ backgroundColor: 'rgb(141, 233, 202)' }}>
                    <div className="text1">
                        <p style={{ fontSize: '110px', fontFamily: "'Times New Roman', Times, serif", fontWeight: 550 }}>
                            Healthy Smile
                        </p>
                        <p>
                            El futuro del cuidado dental se acerca rápidamente, marcando el comienzo de una nueva era de innovación digital y transformación en la salud bucal.
                        </p>
                        <br />
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="contenedor">
                <div className="columnaiz">
                    <p>Automatización del Proceso Dental</p>
                    <p style={{ fontSize: '60px', fontWeight: 'bold' }}>
                        ¿Pueden los bots reemplazar a los especialistas?
                    </p>
                    <p>
                        El futuro del cuidado dental está aquí, marcando una nueva era de innovación digital y automatización. Healthy Smile es el ejemplo perfecto
                        de cómo la tecnología está transformando el sector de la salud bucal. Con Healthy Smile, la automatización permite una gestión eficiente de
                        citas, el monitoreo continuo del historial dental de los pacientes y la entrega de diagnósticos preliminares basados en modelos 3D de
                        problemas recurrentes. Todo esto contribuye a una experiencia de atención más ágil y precisa, mejorando la satisfacción del paciente
                        mientras permite que los especialistas se centren en lo que más importa: ofrecer cuidados de calidad.
                    </p>
                    <button className="boton">Leer más</button>
                </div>
                <div className="columnamedio">
                    <img src={part21} className="part21" alt="Descripción de la imagen 1" />
                    <img src={part22} className="part21" alt="Descripción de la imagen 2" />
                </div>
            </div>
            <br /><br />
            <img src={part31} alt="Descripción de la imagen" />
            <div className="contenedor">
                <div className="columnaiz">
                    <p>Consulta Virtual</p>
                    <p>Nuestra plataforma de Consulta Virtual está diseñada para facilitar la interacción entre pacientes y especialistas, ofreciendo acceso rápido
                        y seguro a atención dental de calidad sin necesidad de visitas físicas. Los pacientes pueden reprogramar citas, y recibir diagnósticos
                        preliminares basados en la información proporcionada, todo en tiempo real.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Funcionamiento
                        <br />Regístrate: Crea tu cuenta y completa tu perfil médico.
                        <br />Conéctate: Habla directamente con un especialista desde la comodidad de tu hogar.
                        <br />Recibe tu Diagnóstico: Obtén resultados inmediatos y recomendaciones.
                    </p>
                    <button className="boton">EXPLORAR MÁS SOBRE CONSULTAS VIRTUALES</button>
                </div>
                <div className="columnamedio">
                    <img src={part32} className="imagen" alt="Descripción de la imagen" />
                </div>
            </div>
            <div className="contenedor">
                <div className="columnamedio">
                    <img src={part33} className="imagen" alt="Descripción de la imagen" />
                </div>
                <div className="columnamedio">
                    <p>Educación</p>
                    <p>DENTAL</p>
                    <p>Puedes acceder a recursos educativos sobre salud bucal, incluyendo guías, modelos 3D, hábitos y consejos para tratar tu problema, lo que te
                        ayudará a tomar decisiones informadas sobre tu salud dental.
                    </p>
                    <button className="boton">EXPLORAR MÁS SOBRE EDUCACIÓN DENTAL</button>
                </div>
            </div>
            <div className="contenedor">
                <div className="columnamedio">
                    <p>Tienda</p>
                    <p>VIRTUAL</p>
                    <p>Explora nuestra tienda, añade productos al carrito, sube tu receta médica si es necesario y recibe tu pedido en casa.
                    </p>
                    <button className="boton">Comprar ahora</button>
                </div>
                <div className="columnamedio">
                    <img src={part34} className="imagen" alt="Descripción de la imagen" />
                </div>
            </div>
            <div className="contenedor">
                <div className="columnamedio">
                    <img src={part35} className="imagen" alt="Descripción de la imagen" />
                </div>
                <div className="columnamedio">
                    <p>Ayuda y</p>
                    <p>Soporte</p>
                    <p>Puedes acceder a nuestra sección de Ayuda y Soporte para encontrar preguntas frecuentes, asistencia técnica, que te ayudarán a resolver
                        dudas sobre la plataforma, consultas virtuales y la gestión de citas o compras.
                    </p>
                    <button className="boton">Obtener ayuda</button>
                </div>
            </div>
            <div className="contenedor">
                <div className="columnamedio">
                    <p>Gestión</p>
                    <p>Los administradores pueden gestionar citas, actualizar productos en la tienda, acceder a reportes y estadísticas, y comunicarse con
                        proveedores para asegurar un funcionamiento óptimo de la plataforma.
                    </p>
                    <button className="boton">Acceder</button>
                </div>
                <div className="columnamedio">
                    <img src={part36} className="imagen" alt="Descripción de la imagen" />
                </div>
            </div>
            <FooterApp />
        </div>
    );
}
