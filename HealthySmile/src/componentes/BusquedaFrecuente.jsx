import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PreguntasFrecuentes.css';
import { useUserContext } from './UserContext';

export default function BusquedaFrecuente({ query }) {
    const { nivelPermisos, idEspecialista } = useUserContext();
    const [preguntas, setPreguntas] = useState([]);
    const [respuestas, setRespuestas] = useState({});
    const [parametrosEnviados, setParametrosEnviados] = useState({});
    const [openAccordionIndex, setOpenAccordionIndex] = useState(-1); // Estado para rastrear el acordeón abierto

    useEffect(() => {
        const endpoint = query ? 'http://localhost:3000/api/buscarPregunta' : 'http://localhost:3000/api/obtenerPreguntas';
        const params = query ? { pregunta: query } : {};

        console.log("Consultando endpoint:", endpoint, "con parámetros:", params);

        axios.get(endpoint, { params })
            .then((response) => {
                console.log("Preguntas obtenidas:", response.data);
                setPreguntas(response.data.slice(0, 5)); // Limitar a 5 resultados
            })
            .catch((error) => {
                console.error("Error al obtener preguntas frecuentes:", error);
            });
    }, [query]);

    const handleRespuestaChange = (event, index) => {
        const { value } = event.target;
        setRespuestas((prevRespuestas) => ({
            ...prevRespuestas,
            [index]: value,
        }));
    };

    const handleEnviarRespuesta = (index) => {
        const pregunta = preguntas[index];

        console.log("Índice de pregunta:", index);
        console.log("Pregunta al enviar respuesta:", pregunta);
        console.log("Respuesta ingresada:", respuestas[index]);

        // Aseguramos que se tiene un ID válido
        if (!pregunta || !pregunta.idPreguntaFrecuente) {
            console.error("ID de pregunta no encontrado");
            return;
        }

        const respuesta = respuestas[index];
        const parametros = {
            idPreguntaFrecuente: pregunta.idPreguntaFrecuente,
            idEspecialista,
            respuesta,
        };

        setParametrosEnviados((prevParams) => ({
            ...prevParams,
            [pregunta.idPreguntaFrecuente]: parametros,
        }));

        console.log("Parámetros enviados:", parametros);

        axios.post('http://localhost:3000/api/responderPregunta', parametros)
            .then(response => {
                console.log("Respuesta enviada:", response.data);
                // Limpiar el campo de respuesta
                setRespuestas((prevRespuestas) => ({
                    ...prevRespuestas,
                    [index]: '',
                }));
            })
            .catch(error => {
                console.error("Error al enviar respuesta:", error);
            });
    };

    const handleAccordionChange = (index) => {
        // Si se abre el acordeón que ya está abierto, cerrarlo; de lo contrario, abrir el nuevo
        setOpenAccordionIndex(openAccordionIndex === index ? -1 : index);
    };

    return (
        <>
            {preguntas.length > 0 ? (
                preguntas.map((pregunta, index) => (
                    <Accordion 
                        key={pregunta.idPreguntaFrecuente || index} 
                        className='acordeon' 
                        expanded={openAccordionIndex === index} // Establecer si el acordeón está expandido
                        onChange={() => handleAccordionChange(index)} // Manejar el cambio de acordeón
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <div className='preguntita'>
                                <strong>{pregunta.pregunta || 'Cargando pregunta...'}</strong>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='detalles-pregunta'>
                            {pregunta.respuesta && pregunta.respuesta !== 'aún no hay respuesta para esta pregunta' ? (
                                <div className='respuestita'>
                                    <strong>{pregunta.respuesta}</strong>
                                </div>
                            ) : (
                                <div className='respuestita noPregunta'>
                                    <strong>Aún no hay respuesta para esta pregunta</strong>
                                </div>
                            )}
                            {nivelPermisos > 1 && (
                                <div className='Res_form'>
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

                                    {parametrosEnviados[pregunta.idPreguntaFrecuente] && (
                                        <div className='parametros-enviados'>
                                            <p><strong>Parámetros utilizados:</strong></p>
                                            <p>ID Pregunta Frecuente: {parametrosEnviados[pregunta.idPreguntaFrecuente].idPreguntaFrecuente}</p>
                                            <p>ID Especialista: {parametrosEnviados[pregunta.idPreguntaFrecuente].idEspecialista}</p>
                                            <p>Respuesta: {parametrosEnviados[pregunta.idPreguntaFrecuente].respuesta}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <p>No se encontraron resultados para "{query}".</p>
            )}
        </>
    );
}
