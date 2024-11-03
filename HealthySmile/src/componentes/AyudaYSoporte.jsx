import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './AyudaYSoporte.css';
import MyButton from './Button';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import FormPregunta from './FormPregunta';

export default function AyudaYSoporte() {
    return (
        <div>
            <HeaderApp/>
            <div className='init-ayudaYsoporte container'>
                <img src='/public/sp3.jpg' className='image' alt='Ayuda y Soporte'/>
                <div className='overlay'>
                    <h1>Ayuda y <br/> 
                        soporte</h1>
                    <p>¿Tienes alguna duda? Aquí encontrarás respuestas a las <br/>
                        preguntas
                        más frecuentes sobre nuestros servicios, tu <br/>
                         cuenta y cómo funciona Healthy Smile.
                    </p>
                    <MyButton label="ENVIAR PREGUNTA" />
                </div>
            </div>
            <div className='preguntasFrecuentes imagenTexto'>
                <figure className='imagenTexto-img'></figure>
                <div className='imagenTexto-texto'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Encuentra respuestas a las preguntas más comunes sobre <br/>
                         nuestros servicios.
                        Si no ves tu pregunta aquí, envíanosla y con <br/>
                        gusto te atenderemos.
                    </p>
                    <PreguntasFrecuentes />
                </div>
            </div>
            <section className='Contactenos'>
                <FormPregunta/>
            </section>
            <FooterApp/>
        </div>
    );
}
