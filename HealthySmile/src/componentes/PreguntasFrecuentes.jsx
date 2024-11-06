import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PreguntasFrecuentes.css';
import { useUserContext } from './UserContext';

export default function PreguntasFrecuentes() {
    const { nivelPermisos, idUsuario, idEspecialista } = useUserContext(); 
    const [preguntas, setPreguntas] = useState(Array(5).fill(null));
    const [respuestas, setRespuestas] = useState({});
    const [parametrosEnviados, setParametrosEnviados] = useState({});
    const [acordeonAbierto, setAcordeonAbierto] = useState(null); // Estado para el acordeón abierto

    const idsPreguntas = [1, 2, 3, 4, 5]; 

    useEffect(() => {
        axios.get('http://localhost:3000/api/obtenerPreguntas')
            .then((response) => {
                setPreguntas(response.data.slice(0, 5));
            })
            .catch((error) => {
                console.error("Error al obtener preguntas frecuentes:", error);
            });
    }, []);

    const handleRespuestaChange = (event, index) => {
        const { value } = event.target;
        setRespuestas((prevRespuestas) => ({
            ...prevRespuestas,
            [index]: value,
        }));
    };

    const handleEnviarRespuesta = (index) => {
        const pregunta = preguntas[index];
        const idPreguntaFrecuente = idsPreguntas[index];

        if (!pregunta) {
            console.error("Pregunta no válida:", pregunta);
            return; 
        }

        const respuesta = respuestas[index];
        const parametros = { 
            idPreguntaFrecuente, 
            idEspecialista, 
            respuesta 
        };

        setParametrosEnviados((prevParams) => ({
            ...prevParams,
            [idPreguntaFrecuente]: parametros,
        }));

        axios.post('http://localhost:3000/api/responderPregunta', parametros)
            .then(response => {
                console.log("Respuesta enviada:", response.data);
                setRespuestas((prevRespuestas) => ({
                    ...prevRespuestas,
                    [index]: '', 
                }));
            })
            .catch(error => {
                console.error("Error al enviar respuesta:", error);
            });
    };

    const handleChangeAcordeon = (index) => {
        // Si el acordeón que se abre es el mismo que está abierto, lo cerramos
        setAcordeonAbierto(acordeonAbierto === index ? null : index);
    };

    return (
        <>
            {preguntas.map((pregunta, index) => (
                <Accordion 
                    key={index} 
                    className='acordeon allY' 
                    expanded={acordeonAbierto === index} // Controla si el acordeón está abierto
                    onChange={() => handleChangeAcordeon(index)} // Cambia el acordeón abierto
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <div className='preguntita'>
                            <strong>{pregunta ? pregunta.pregunta : 'Cargando pregunta...'}</strong><br />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className='detalles-pregunta'>
                        {pregunta && pregunta.respuesta !== 'aún no hay respuesta para esta pregunta' ? (
                            <div className='respuestita'>
                                <strong>{pregunta.respuesta}</strong><br />
                                <p>
                                            idUsuario: {idUsuario}<br />
                                            idEspecialista: {idEspecialista}<br />
                                            nivelPermisos: {nivelPermisos}<br />
                                        </p>
                            </div>
                        ) : (
                            <div className='respuestita noPregunta'>
                                <strong>Aún no hay respuesta para esta pregunta</strong>
                            </div>
                        )}
                        {nivelPermisos > 1 && (
                            <div className='Res_form'>
                                <br/>
                                <label htmlFor={`respuesta-${index}`}>Responder</label>
                                <textarea
                                    id={`respuesta-${index}`}
                                    value={respuestas[index] || ''}
                                    onChange={(event) => handleRespuestaChange(event, index)}
                                />
                                <Button
                                    className='Res_submit'
                                    onClick={() => handleEnviarRespuesta(index)}
                                >
                                    Enviar
                                </Button>

                                {parametrosEnviados[idsPreguntas[index]] && (
                                    <div className='parametros-enviados'>
                                        <p><strong>Parámetros utilizados:</strong></p>
                                        <p>ID Pregunta Frecuente: {parametrosEnviados[idsPreguntas[index]].idPreguntaFrecuente}</p>
                                        <p>ID Especialista: {parametrosEnviados[idsPreguntas[index]].idEspecialista}</p>
                                        <p>Respuesta: {parametrosEnviados[idsPreguntas[index]].respuesta}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}
