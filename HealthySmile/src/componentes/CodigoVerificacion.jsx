import React, { useState, useEffect } from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import './CodigoVerificacion.css'; // Asegúrate de usar la ruta correcta


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
        nivelPermisos,
    } = useUserContext();

    const [userInputCode, setUserInputCode] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutos en segundos
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Expiración: poner todos los valores a null
                    setCodigoDeVerificacion(null);
                    setUsuarioLogueado(null);
                    setCorreo(null);
                    setContrasena(null);
                    setCedulaProfesional(null);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Limpiar intervalo en desmontaje
    }, [setCodigoDeVerificacion, setUsuarioLogueado, setCorreo, setContrasena, setCedulaProfesional]);

    const handleVerification = async () => {
        if (userInputCode === codigoDeVerificacion) {
            setVerificationMessage('Código correcto'); // Código verificado correctamente

            try {
                let response;
                // Selección de la ruta y datos basados en la cédula profesional
                if (cedulaProfesional) {
                    // Crear Especialista
                    response = await fetch('http://localhost:3000/api/crearEspecialista', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nomUser: usuarioLogueado,
                            correoUser: correo,
                            contrasenaUser: contrasena,
                            tipoUser: 'especialista',
                            nivelPermisos: nivelPermisos,
                            cedulaProfesional: cedulaProfesional,
                        }),
                    });
                } else {
                    // Crear Paciente
                    response = await fetch('http://localhost:3000/api/crearPaciente', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nomUser: usuarioLogueado,
                            correoUser: correo,
                            contrasenaUser: contrasena,
                            nivelPermisos: nivelPermisos,
                        }),
                    });
                }

                if (response.ok) {
                    console.log(`Usuario ${cedulaProfesional ? 'especialista' : 'paciente'} creado exitosamente`);

                    // Redirigir a la API de inicio de sesión con los datos de correo y contraseña
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

                        // Redirigir a la página de Ayuda y Soporte
                        navigate('/Home');
                        setCodigoDeVerificacion(null); // Limpiar código de verificación
                        setContrasena(null); // Limpiar la contraseña por seguridad
                    } else {
                        console.error("Error en el inicio de sesión:", await loginResponse.json());
                    }
                } else {
                    console.error("Error en la creación del usuario:", await response.json());
                }

            } catch (error) {
                console.error("Error en la solicitud de creación de usuario o inicio de sesión:", error);
            }
        } else {
            setVerificationMessage('Código incorrecto'); // Código incorrecto
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
                {verificationMessage && <p>{verificationMessage}</p>} {/* Mostrar mensaje de verificación */}
                <p>Tiempo restante: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}</p>
            </div>
            <FooterApp />
        </div>
    );
}
