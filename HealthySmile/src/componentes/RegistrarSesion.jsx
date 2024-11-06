import FooterApp from './footer';
import React, { createContext, useContext, useState } from 'react';
import HeaderApp from './header';
import './RegistrarSesion.css';
import CarruselFormularios from './CarruselFormularios';

export default function RegistrarSesion() {


    return (
      <div>
        <HeaderApp />
        <div id='RegistroUsuarios' className='allY'>
            <div className='init-Registro'>
                <h1>Registrarse ahora</h1>
                <p>Registrarse en nuestro sitio web es rápido y sencillo. Simplemente complete el formulario de<br></br>
                registro.</p>
                <div className='init-Registro-det'>
                    <div className='dets'>
                        <figure>
                            <img src='../../public/reg-3.jpg'/>
                        </figure>
                        <figcaption>
                            <h2>Acceso <br></br> profesional</h2>
                            <p>Registrate como especialista <br></br>
                            y forma parte de nuestra red <br/>
                            profesional, donde podrás <br/>
                            acceder a herramientas <br/>
                            avanzadas, recursos <br/>
                            especializados, y gestionar tus <br/>
                            pacientes de manera eficiente.</p>
                            <a href='#cardEspecialista'>COMENZAR REGISTRO</a>
                        </figcaption>
                    </div>
                    <div className='dets'>
                        <figcaption>
                            <h2>REGISTRO SIMPLE</h2>
                            <p>Crea tu cuenta de manera<br></br>
                            segura y accede a contenido<br/>
                            exclusivo, herramientas<br/>
                            personalizadas y recursos para<br/>
                            cuidar tu salud dental. Tus <br/>
                            datos estarán protegidos en<br/>
                            todo momento.</p>
                            <a href='#cardPaciente'>CREAR CUENTA</a>
                        </figcaption>
                        <figure>
                            <img src='../../public/reg-4.jpg'/>
                        </figure>
                    </div>
                </div>
            </div>
            <div id='registros'>
                <div>
                <CarruselFormularios></CarruselFormularios>
                </div>
            </div>
            <div className='info-tipos-registros'>
                <figure className='fondoimagen' id='fondo-image-1'>
                    <img src='/reg-1.jpeg' alt='Registrar Cuenta' />
                    <figcaption className='desc-fondo-img'>
                        <h1>Crear cuenta</h1>
                        <p>Registrarse en nuestro sitio web es rápido y sencillo.<br />
                        Simplemente complete el formulario de registro</p>
                    </figcaption>
                </figure>
                <figure className='fondoimagen' id='fondo-image-2'>
                    <figcaption className='desc-fondo-img'>
                        <h1>Registro rápido</h1>
                        <p>Al registrarte, tendrás acceso exclusivo a contenido personalizado,<br />
                        tips de cuidado dental y herramientas diseñadas para mejorar tu sonrisa.</p>
                    </figcaption>
                </figure>
                <figure className='fondoimagen' id='fondo-image-3'>
                    <img src='/reg-2.jpg' alt='Protección de Datos' />
                    <figcaption className='desc-fondo-img'>
                        <h1>Protección de Datos <br /> Garantizada</h1>
                        <p>El proceso de registrarse es completamente seguro y tus datos<br />
                        estarán protegidos en todo momento.</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <FooterApp />
      </div>
    );
}

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correo, setCorreo] = useState('');
  const [codigoDeVerificacion, setCodigoDeVerificacion] = useState('');

  return (
    <UserContext.Provider
      value={{
        usuarioLogueado,
        setUsuarioLogueado,
        contrasena,
        setContrasena,
        correo,
        setCorreo,
        codigoDeVerificacion,
        setCodigoDeVerificacion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
