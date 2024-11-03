import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './AyudaYSoporte.css';
import MyButton from './Button';
import PreguntasFrecuentes from './PreguntasFrecuentes';

export default function AyudaYSoporte() {
    return (
        <div>
            <HeaderApp/>
            <div className='init-ayudaYsoporte container'>
                <img src='/public/sp3.jpg' className='image' alt='Ayuda y Soporte'/>
                <div className='overlay'>
                    <h1>Ayuda y soporte</h1>
                    <p>¿Tienes alguna duda? Aquí encontrarás respuestas a las preguntas
                        más frecuentes sobre nuestros servicios, tu cuenta y cómo funciona Healthy Smile.
                    </p>
                    <MyButton label="Enviar pregunta" />
                </div>
            </div>
            <div className='preguntasFrecuentes imagenTexto'>
                <figure className='imagenTexto-img'></figure>
                <div className='imagenTexto-texto'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
                        Si no ves tu pregunta aquí, envíanosla y con gusto te atenderemos.
                    </p>
                    <PreguntasFrecuentes />
                </div>
            </div>
            <FooterApp/>
        </div>
    );
}
