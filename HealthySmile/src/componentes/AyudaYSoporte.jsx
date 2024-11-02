import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './AyudaYSoporte.css';
import MyButton from './Button';

export default function AyudaYSoporte() {
    return (
        <div>
            <HeaderApp/>
            <div id='init-ayudaYsoporte' className='container'>
                <img src='/public/sp3.jpg' className='image'/>
                <div className='overlay'>
                    <h1>Ayuda y soporte</h1>
                    <p>¿Tienes alguna duda? Aquí encontrarás respuestas a las preguntas
                        mas frecuentes sobre nuestros servicios, tu cuenta y como funciona Healthy Smile.
                    </p>
                    <MyButton
                        label="Enviar pregunta"
                    ></MyButton>
                </div>
            </div>
            <div id='preguntasFrecuentes' className='imagenTexto'>
                <figure className='imagenTexto-img'/>
                <div className='imagenTexto-texto'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
                        Si no ver tu pregunta aquí, envíanosla y con gusto te atenderemos.
                    </p>
                </div>
            </div>
            <FooterApp/>
        </div>
    );
}
