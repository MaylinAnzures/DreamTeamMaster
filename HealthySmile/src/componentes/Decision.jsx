import React from 'react';
import FooterApp from './footer';
import HeaderApp from './header';
import './IniciarSesion.css';
import MyOutlinedButton from './OutlinedButton';
import { useUserContext } from './UserContext';

export default function Decision() {
    const {
        usuarioLogueado,
        tipoUsuario,
        cedulaProfesional,
        idUsuario,
        idEspecialista,
        nivelPermisos,
        codigoDeVerificacion,
        contrasena,
        correo,
        estaLogueado,
        especialidad,
        descripcion,
    } = useUserContext();

    return (
        <div>
            <HeaderApp />
            <div className='section-one allY'>
                <div className='section-one-content'>
                    <h1>Entra a tu perfil personal</h1>
                    <a href='/IniciarSesion'>
                        <MyOutlinedButton
                            label="INICIAR SESIÓN"
                            color="var(--original-IniciarSesion-colorButton-white,white)"
                            borderColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                            hoverColor="var(--original-IniciarSesion-colorButton-black,black)"
                            hoverBorderColor="var(--color-principal)"
                            backgroundColor="var(--original-IniciarSesion-colorButton-blue,#478ac9)"
                            hoverBackgroundColor="var(--original-IniciarSesion-colorButton-white,white)"
                        />
                    </a>
                    <a href='/Registro'>
                        <MyOutlinedButton
                            label="REGISTRARSE"
                            color="var(--original-IniciarSesion-colorButton-white,white)"
                            borderColor="var(--original-IniciarSesion-colorButton-white,white)"
                            hoverColor="var(--original-IniciarSesion-colorButton-black,black)"
                            hoverBorderColor="var(--original-IniciarSesion-colorButton-white,white)"
                            backgroundColor="transparent"
                            hoverBackgroundColor="var(--original-IniciarSesion-colorButton-white,white)"
                        />
                    </a>
                </div>
                {/* Mostrar todas las variables del contexto */}
                <div className="context-values">
                    <p><strong>Usuario Logueado:</strong> {usuarioLogueado}</p>
                    <p><strong>Tipo de Usuario:</strong> {tipoUsuario}</p>
                    <p><strong>Cédula Profesional:</strong> {cedulaProfesional}</p>
                    <p><strong>ID de Usuario:</strong> {idUsuario}</p>
                    <p><strong>ID de Especialista:</strong> {idEspecialista}</p>
                    <p><strong>Nivel de Permisos:</strong> {nivelPermisos}</p>
                    <p><strong>Código de Verificación:</strong> {codigoDeVerificacion}</p>
                    <p><strong>Contraseña:</strong> {contrasena}</p>
                    <p><strong>Correo:</strong> {correo}</p>
                    <p><strong>Especialidad : </strong>{especialidad}</p>
                    <p><strong>Descripcion : </strong> {descripcion}</p>
                    <p><strong>Está Logueado:</strong> {estaLogueado ? 'true' : 'false'}
</p>
                </div>
            </div>
            <FooterApp />
        </div>
    );
}
