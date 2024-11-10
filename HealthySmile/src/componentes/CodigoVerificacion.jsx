import React, { useState, useEffect } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
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
    } = useUserContext();

    const [userInputCode, setUserInputCode] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutos en segundos
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
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Limpiar intervalo en desmontaje
    }, [setCodigoDeVerificacion, setUsuarioLogueado, setCorreo, setContrasena, setCedulaProfesional, setNivelPermisos, setIdUsuario, setIdEspecialista, setEstaLogueado]);

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
                            tipoUser: 'Especialista',
                            nivelPermisos: 2,
                            cedulaProfesional: cedulaProfesional,
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
                            nivelPermisos: 1,
                        }),
                    });

                    setCedulaProfesional(null);
                }

                if (response.ok) {
                    console.log(`Usuario ${cedulaProfesional ? 'especialista' : 'paciente'} creado exitosamente`);

                    // Esperar a que el usuario esté registrado antes de hacer login
                    let retries = 5;
                    let loginResponse = null;

                    // Intentamos varias veces para asegurarnos que los datos ya estén disponibles en la base de datos
                    while (retries > 0 && !loginResponse) {
                        loginResponse = await fetch('http://localhost:3000/api/LogInUsuario', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ correoUser: correo, contrasenaUser: contrasena }),
                        });

                        if (!loginResponse.ok) {
                            console.log("Esperando a que el usuario esté registrado...");
                            retries--;
                            await new Promise((resolve) => setTimeout(resolve, 1000)); // Esperamos 1 segundo antes de intentar nuevamente
                        }
                    }

                    if (loginResponse && loginResponse.ok) {
                        const userData = await loginResponse.json();
                        console.log("Inicio de sesión exitoso:", userData);
                        navigate('/Home');
                        setCodigoDeVerificacion(null);
                        setContrasena(null);
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
                <h2>Verificación de Correo</h2>
                <input 
                    type="text" 
                    value={userInputCode} 
                    onChange={(e) => setUserInputCode(e.target.value)} 
                    placeholder="Ingrese el código de verificación" 
                />
                <button onClick={handleVerification}>Verificar</button>
                {verificationMessage && <p>{verificationMessage}</p>}
                {isError && <p className="error-message">Fallo al crear el usuario</p>}
                <p>Tiempo restante: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}</p>
            </div>
            <FooterApp />
        </div>
    );
}
