import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useUserContext } from './UserContext';
import './FormPregunta.css';

//maximo 5

export default function FormPregunta() {
  const {idUsuario} = useUserContext();

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

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
      setResponseMessage(result.message); // Guardamos el mensaje de respuesta
      console.log('Pregunta creada:', result.message);
      
      // Limpiar los campos del formulario
      setNombre('');
      setCorreo('');
      setMensaje('');

    } catch (error) {
      console.error('Error al enviar la pregunta:', error);
      setResponseMessage('Error al enviar la pregunta. Inténtalo de nuevo.'); // Mensaje de error
    }
  };

  const {usuarioLogueado,tipoUsuario} = useUserContext();
  

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <h1>Contactenos</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type='text'
            name='nombre'
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
            name='correo'
            placeholder='Ingresa un email valido'
            autoComplete='off'
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <br />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name='mensaje'
            placeholder='Describe tu inconveniente'
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <br />
          <input type='submit' value='Enviar' />
        </form>
      </CardContent>
    </Card>
  );
}

