import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useUserContext } from './UserContext';
import './FormLogIn.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FormLogIn() {
  const [correoInput, setCorreoInput] = useState('');
  const [contrasenaInput, setContrasenaInput] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // Hook para redirigir

  const {
    setUsuarioLogueado,
    setTipoUsuario,
    setCedulaProfesional,
    setIdUsuario,
    setIdEspecialista,
    setNivelPermisos,
    setEstaLogueado,
    setPreliminar,
    setFotoPerfil,
    setDescripcion,
    setEspecialidad,
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
      setIdEspecialista(result.tipoUser === 'Especialista' ? result.idEspecialista : null);
      setNivelPermisos(result.nivelPermisos);
      setPreliminar(result.preliminar);
      setFotoPerfil(result.fotoPerfil);
      setDescripcion(result.tipoUser === 'Especialista' ? result.descripcion : null);
      setEspecialidad(result.tipoUser === 'Especialista' ? result.especialidad : null);

      // Establecer `estaLogueado` en `true`
      setEstaLogueado(true);

      // Redirigir al Home
      navigate('/Inicio');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setIsError(true); // Mostrar mensaje de error
    }
  };

  return (
    <Card className='FormLogIn_Card allY'>
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

        {/* Mostrar mensaje de error */}
        {isError && (
          <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
            <Alert severity="error">Inicio fallido. Inténtalo de nuevo.</Alert>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
