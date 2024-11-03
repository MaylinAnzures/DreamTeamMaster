import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useUserContext } from './UserContext';
import './FormLogIn.css';

export default function FormLogIn() {
  const [correoInput, setCorreoInput] = useState('');
  const [contrasenaInput, setContrasenaInput] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Obtener funciones del contexto
  const {
    setUsuarioLogueado,
    setTipoUsuario,
    setCedulaProfesional,
    setIdUsuario,
    setIdEspecialista, // Nuevo setter para idEspecialista
    setNivelPermisos,
  } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      correoUser: correoInput,
      contrasenaUser: contrasenaInput,
    };

    try {
      const response = await fetch('http://localhost:3000/api/LogInUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const result = await response.json();

      // Guardar los datos en el contexto
      setUsuarioLogueado(result.nomUser);
      setTipoUsuario(result.tipoUser);
      setCedulaProfesional(result.tipoUser === 'Especialista' ? result.cedulaProfesional : null);
      setIdUsuario(result.idUsuario);
      setIdEspecialista(result.tipoUser === 'Especialista' ? result.idEspecialista : null); // Almacenar idEspecialista
      setNivelPermisos(result.nivelPermisos);

      setResponseMessage('Inicio de sesión exitoso');

      // Limpiar los campos del formulario
      setCorreoInput('');
      setContrasenaInput('');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setResponseMessage('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <Card className='FormLogIn_Card'>
      <CardContent>
        <h1 className='FormLogIn_titulo1'>Acceso rápido</h1>
        <form onSubmit={handleSubmit} className="FormLogIn_form">
          <label htmlFor="FormLogIn_correoUser">Email</label>
          <input
            type="email"
            id="FormLogIn_correoUser"
            name="FormLogIn_correoUser"
            placeholder="Ingrese un correo válido"
            autoComplete="off"
            required
            value={correoInput}
            onChange={(e) => setCorreoInput(e.target.value)}
          />
          <br />
          <label htmlFor="FormLogIn_contrasenaUser">Contraseña</label>
          <input
            type="password"
            id="FormLogIn_contrasenaUser"
            name="FormLogIn_contrasenaUser"
            placeholder="Ingrese contraseña"
            autoComplete="off"
            required
            value={contrasenaInput}
            onChange={(e) => setContrasenaInput(e.target.value)}
          />
          <br />
          <input type="submit" value="Iniciar Sesión" className="FormLogIn_submit" />
        </form>
      </CardContent>
    </Card>
  );
}
