import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useUserContext } from './UserContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './FormPregunta.css';

export default function FormPregunta() {
  const { idUsuario } = useUserContext();

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const preguntaData = {
      pregunta: mensaje,
      idUsuario: idUsuario
    };

    try {
      const response = await fetch('http://localhost:3000/api/crearPregunta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preguntaData),
      });

      if (!response.ok) {
        throw new Error('Error al crear la pregunta frecuente');
      }

      const result = await response.json();
      setResponseMessage('Pregunta enviada correctamente');
      setIsSuccess(true);
      setIsError(false);

      setNombre('');
      setCorreo('');
      setMensaje('');

    } catch (error) {
      console.error('Error al enviar la pregunta:', error);
      setResponseMessage('Error al enviar la pregunta. Inténtalo de nuevo.');
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <Card className="PreguntaFrec_Card allY">
      <CardContent>
        <h1 className="PreguntaFrec_titulo1">Contáctenos</h1>
        <form className="PreguntaFrec_form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type='text'
            id='PreguntaFrec_nombreUser'
            placeholder='Ingresa tu nombre'
            autoComplete='off'
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <label htmlFor="correo">Email</label>
          <input
            type='email'
            id='PreguntaFrec_correoUser'
            placeholder='Ingresa un email válido'
            autoComplete='off'
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <br />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id='PreguntaFrec_mensajeUser'
            placeholder='Describe tu inconveniente'
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <br />
          <input type='submit' className="PreguntaFrec_submit" value='ENVIAR' />
        </form>

        {/* Mostrar mensaje de éxito */}
        {isSuccess && (
          <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
            <Alert severity="success">{responseMessage}</Alert>
          </Stack>
        )}

        {/* Mostrar mensaje de error */}
        {isError && (
          <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
            <Alert severity="error">{responseMessage}</Alert>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
