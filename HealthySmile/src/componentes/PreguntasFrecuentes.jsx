import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PreguntasFrecuentes.css';

export default function PreguntasFrecuentes() {
    const [preguntas, setPreguntas] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        axios.get('http://localhost:3000/api/obtenerPreguntas')
            .then((response) => {
                setPreguntas(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener preguntas frecuentes:", error);
            });
    }, []);

    return (
        <>
            {preguntas.map((pregunta, index) => (
                <Accordion key={index} className='acordeon'>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        {/* Mostrar la pregunta y el nombre del usuario en el AccordionSummary */}
                        <div className='preguntita'>
                            <strong>{pregunta.pregunta} </strong> <br />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className='detalles-pregunta'>
                        {/* Mostrar la respuesta y el especialista solo si hay respuesta */}
                        {pregunta.respuesta !== 'aún no hay respuesta para esta pregunta' && (
                            <div className='respuestita'>
                                <strong>{pregunta.respuesta}</strong> <br />
                            </div>
                        )}
                        {pregunta.respuesta === 'aún no hay respuesta para esta pregunta' && (
                            <div className='respuestita'>
                                <strong>Aun no hay respuesta para esta pregunta</strong>
                            </div>
                        )
                        }
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}
