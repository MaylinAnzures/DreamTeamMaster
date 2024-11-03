import React, { useState } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './AyudaYSoporte.css';
import MyButton from './Button';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import FormPregunta from './FormPregunta';
import BusquedaFrecuente from './BusquedaFrecuente';

export default function AyudaYSoporte() {
    const [searchQuery, setSearchQuery] = useState(''); // Estado para el campo de búsqueda

    // Función para desplazar a la sección de "Contáctenos"
    const handleScrollToContactenos = () => {
        const contactenosSection = document.getElementById('Contactenos');
        if (contactenosSection) {
            contactenosSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Función para manejar el cambio en el campo de búsqueda
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Actualiza el estado con el valor del campo de búsqueda
    };

    return (
        <div>
            <HeaderApp />
            <div className='init-ayudaYsoporte container'>
                <img src='/public/sp3.jpg' className='image' alt='Ayuda y Soporte' />
                <div className='overlay'>
                    <h1>Ayuda y <br />soporte</h1>
                    <p>¿Tienes alguna duda? Aquí encontrarás respuestas a las <br />
                        preguntas más frecuentes sobre nuestros servicios, tu <br />
                        cuenta y cómo funciona Healthy Smile.
                    </p>
                    <MyButton label="ENVIAR PREGUNTA" onClick={handleScrollToContactenos} />
                </div>
            </div>
            <div className='preguntasFrecuentes imagenTexto'>
                <figure className='imagenTexto-img'></figure>
                <div className='imagenTexto-texto'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Encuentra respuestas a las preguntas más comunes sobre <br />
                        nuestros servicios.
                        Si no ves tu pregunta aquí, envíanosla y con <br />
                        gusto te atenderemos.
                    </p>

                    {/* Input de búsqueda */}
                    <input
                        type="search"
                        placeholder="Buscar pregunta frecuente"
                        value={searchQuery}
                        onChange={handleSearchChange} // Actualiza el estado al escribir o borrar
                        className="input-search"
                    />

                    {/* Renderiza el componente BusquedaFrecuente o PreguntasFrecuentes según el contenido del campo de búsqueda */}
                    {searchQuery ? (
                        <BusquedaFrecuente query={searchQuery} />
                    ) : (
                        <PreguntasFrecuentes />
                    )}
                </div>
            </div>
            <section className='Contactenos' id='Contactenos'>
                <div className='contactenos-container'>
                    <hr className='contactenos-divider' />
                    <img src='../../public/sp1.jpg' className='contactenos-image' alt='Contactenos' />
                    <div className='form-container'>
                        <FormPregunta />
                    </div>
                </div>
            </section>
            <FooterApp />
        </div>
    );
}
