import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './Inicio.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
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
    const navigate = useNavigate(); 

    return (
        <div className="body">
            <HeaderApp />
            <div id="body" className="contenedor">
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
                    </div>
                </div>
            </div>

            <div className="contenedor">
                <div className="columnaiz">
                    <h3 className='tit'>¿Pueden los bots reemplazar a los especialistas?</h3>
                    <p className="text2">
                        El futuro del cuidado dental está aquí, marcando una nueva era de innovación digital y automatización. Healthy Smile es el ejemplo perfecto
                        de cómo la tecnología está transformando el sector de la salud bucal. Con Healthy Smile, la automatización permite una gestión eficiente de
                        citas, el monitoreo continuo del historial dental de los pacientes y la entrega de diagnósticos preliminares basados en modelos 3D de
                        problemas recurrentes. Todo esto contribuye a una experiencia de atención más ágil y precisa, mejorando la satisfacción del paciente
                        mientras permite que los especialistas se centren en lo que más importa: ofrecer cuidados de calidad.
                    </p>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#092B5A',
                            textTransform: 'none',
                            color: 'white',
                            '&:hover': { backgroundColor: '#09738A' },
                        }}
                        onClick={() => navigate('/especialistas')}
                    >
                        Leer más
                    </Button>
                </div>
                <div className="columnamedio">
                    <img src={part21} className="part21" alt="Descripción de la imagen 1" />
                    <img src={part22} className="part21 margen-superior" alt="Descripción de la imagen 2" />
                </div>
            </div>

            <img id="imagen-intermedia" src={part31} alt="Descripción de la imagen" />

            <div className="contenedor">
                <div className="columnaiz" style={{ paddingLeft: '50px', paddingRight: '10px' }}>
                    <p className="titulo">Consulta Virtual</p>
                    <p className="text2">
                        Nuestra plataforma de Consulta Virtual está diseñada para facilitar la interacción entre pacientes y especialistas, ofreciendo acceso rápido
                        y seguro a atención dental de calidad sin necesidad de visitas físicas.
                    </p>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#092B5A',
                            textTransform: 'none',
                            color: 'white',
                            '&:hover': { backgroundColor: '#09738A' },
                        }}
                        onClick={() => navigate('/especialistas')}
                    >
                        Pedir una consulta
                    </Button>
                </div>
                <div className="columnamedio">
                    <img src={part32} className="imagen" alt="Descripción de la imagen" />
                </div>
            </div>

            <div className="contenedor">
                <div className="columnamedio">
                    <img src={part33} className="imagen" alt="Descripción de la imagen" />
                </div>
                <div className="columnamedio" style={{ paddingLeft: '10px', paddingRight: '50px' }}>
                    <p className="titulo">Educación Dental</p>
                    <p className="text2">
                        Puedes acceder a recursos educativos sobre salud bucal, incluyendo guías, modelos 3D, hábitos y consejos para tratar tu problema.
                    </p>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#092B5A',
                            textTransform: 'none',
                            color: 'white',
                            '&:hover': { backgroundColor: '#09738A' },
                        }}
                        onClick={() => navigate('/especialistas')}
                    >
                        Explorar más sobre educacion dental
                    </Button>
                </div>
            </div>

            <div className="contenedor">
                <div className="columnamedio">
                    <img src={part34} className="imagen" alt="Descripción de la imagen" />
                </div>
                <div className="columnamedio" style={{ paddingLeft: '10px', paddingRight: '50px' }}>
                    <p className="titulo">Tienda Virtual</p>
                    <p className="text2">Explora nuestra tienda, añade productos al carrito, sube tu receta médica si es necesario y recibe tu pedido en casa.</p>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#092B5A',
                            textTransform: 'none',
                            size: 'large',
                            color: 'white',
                            '&:hover': { backgroundColor: '#09738A' },
                        }}
                        onClick={() => navigate('/especialistas')}x
                    >
                        Comprar
                    </Button>
                </div>
            </div>

            <FooterApp />
        </div>
    );
}
