import React, { useState, useEffect } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert'; // Importación del componente Alert de MUI
import './CodigoVerificacion.css';

export default function CodigoVerificacion() {
    const {
        codigoDeVerificacion,
        setCodigoDeVerificacion,
        usuarioLogueado,
        setUsuarioLogueado,
        correo,
        setCorreo,
        contrasena,
        setContrasena,
        cedulaProfesional,
        setCedulaProfesional,
        setNivelPermisos,
        setIdUsuario,
        setIdEspecialista,
        setEstaLogueado,
        especialidad,
        setEspecialidad,
        descripcion,
        setDescripcion,
    } = useUserContext();

    const [userInputCode, setUserInputCode] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutos en segundos
    const [loginWaitTime, setLoginWaitTime] = useState(0); // Inicialmente en 0
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCodigoDeVerificacion(null);
                    setUsuarioLogueado(null);
                    setCorreo(null);
                    setContrasena(null);
                    setCedulaProfesional(null);
                    setNivelPermisos(null);
                    setIdUsuario(null);
                    setIdEspecialista(null);
                    setEstaLogueado(false);
                    setEspecialidad(null)
                    setDescripcion(null)
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Limpiar intervalo en desmontaje
    }, [setCodigoDeVerificacion, setUsuarioLogueado, setCorreo, setContrasena, setCedulaProfesional, setNivelPermisos, setIdUsuario, setIdEspecialista, setEstaLogueado,setEspecialidad,setDescripcion]);

    const handleVerification = async () => {
        if (userInputCode === codigoDeVerificacion) {
            setVerificationMessage('Código correcto');
            setIsError(false);

            try {
                let response;
                if (cedulaProfesional) {
                    response = await fetch('http://localhost:3000/api/crearEspecialista', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nomUser: usuarioLogueado,
                            correoUser: correo,
                            contrasenaUser: contrasena,
                            cedulaProfesional: cedulaProfesional,
                            descripcion: descripcion, // Añadido
                            especialidad: especialidad, 
                            
                        }),
                    });
                } else {
                    response = await fetch('http://localhost:3000/api/crearPaciente', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nomUser: usuarioLogueado,
                            correoUser: correo,
                            contrasenaUser: contrasena,
                        }),
                    });

                    setCedulaProfesional(null);
                    setDescripcion(null);
                }

                if (response.ok) {
                    console.log(`Usuario ${cedulaProfesional ? 'especialista' : 'paciente'} creado exitosamente`);

                    // Iniciar el cronómetro de espera para el inicio de sesión
                    setLoginWaitTime(60); // Cambiar a 1 minuto
                    const waitUntilReady = new Promise(resolve => {
                        const interval = setInterval(() => {
                            setLoginWaitTime(prev => {
                                if (prev <= 1) {
                                    clearInterval(interval);
                                    resolve();
                                    return 0;
                                }
                                return prev - 1;
                            });
                        }, 1000);
                    });

                    // Esperar hasta que el cronómetro llegue a cero
                    await waitUntilReady;

                    // Iniciar sesión después de que se complete el cronómetro
                    const loginResponse = await fetch('http://localhost:3000/api/LogInUsuario', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ correoUser: correo, contrasenaUser: contrasena }),
                    });

                    if (loginResponse.ok) {
                        const userData = await loginResponse.json();
                        console.log("Inicio de sesión exitoso:", userData);

                        // Actualiza el contexto con los datos del usuario logueado
                        setUsuarioLogueado(userData.nomUser);
                        console.log("Usuario logueado:", userData.nomUser);

                        setIdUsuario(userData.idUsuario);
                        console.log("ID Usuario:", userData.idUsuario);

                        setNivelPermisos(userData.nivelPermisos);
                        console.log("Nivel de permisos:", userData.nivelPermisos);

                        setEstaLogueado(true);
                        console.log("Estado de sesión:", true);

                        if (userData.nivelPermisos === 2) {
                            setIdEspecialista(userData.idEspecialista); 
                            console.log("ID Especialista:", userData.idEspecialista);
                        }

                        setCodigoDeVerificacion(null);
                        setContrasena(null);

                        // Navegar después de actualizar el contexto
                        navigate('/Diagnostico');
                    } else {
                        console.error("Error en el inicio de sesión:", await loginResponse.json());
                        setIsError(true);
                    }
                } else {
                    console.error("Error en la creación del usuario:", await response.json());
                    setIsError(true);
                }
            } catch (error) {
                console.error("Error en la solicitud de creación de usuario o inicio de sesión:", error);
                setIsError(true);
            }
        } else {
            setVerificationMessage('Código incorrecto');
            setIsError(true);
        }
    };

    return (
        <div>
            <HeaderApp />
            <div id='cod-vef'>
                <div id='inputcito-veri'>
                    <input 
                        type="text" 
                        value={userInputCode} 
                        onChange={(e) => setUserInputCode(e.target.value)} 
                        placeholder="Ingrese su código de verificación" 
                    />
                </div>
                <button onClick={handleVerification}>Verificar</button>
                <div id='inf-code-validation'>
                    <p>Tiempo restante para verificación: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}</p>
                    {loginWaitTime > 0 && loginWaitTime < 60 && (
                        <p className="login-wait-time">Tiempo estimado para el inicio de sesión: {Math.floor(loginWaitTime / 60)}:{String(loginWaitTime % 60).padStart(2, '0')}</p>
                    )}
                    {isError && <Alert id='Alertita' severity="error">Codigo incorrecto</Alert>}
                </div>
            </div>
            <FooterApp/>
        </div>
    );
}