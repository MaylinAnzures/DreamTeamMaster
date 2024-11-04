import { createContext, useContext, useState, useEffect } from 'react';

// Crear contexto
export const UserContext = createContext();

// Componente Proveedor de Contexto
export const UserProvider = ({ children }) => {
  // Cargar valores de Local Storage o establecer valores predeterminados
  const [usuarioLogueado, setUsuarioLogueado] = useState(localStorage.getItem('usuarioLogueado') || null);
  const [tipoUsuario, setTipoUsuario] = useState(localStorage.getItem('tipoUsuario') || null);
  const [cedulaProfesional, setCedulaProfesional] = useState(localStorage.getItem('cedulaProfesional') || null);
  const [idUsuario, setIdUsuario] = useState(localStorage.getItem('idUsuario') || null);
  const [idEspecialista, setIdEspecialista] = useState(localStorage.getItem('idEspecialista') || null);
  const [nivelPermisos, setNivelPermisos] = useState(localStorage.getItem('nivelPermisos') || null);
  const [codigoDeVerificacion, setCodigoDeVerificacion] = useState(localStorage.getItem('codigoDeVerificacion') || null);
  const [contrasena, setContrasena] = useState(localStorage.getItem('contrasena') || null); // Nuevo estado para la contraseña
  const [correo, setCorreo] = useState(localStorage.getItem('correo') || null); // Nuevo estado para el correo

  // Actualizar Local Storage cada vez que cambian los valores
  useEffect(() => {
    localStorage.setItem('usuarioLogueado', usuarioLogueado);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    localStorage.setItem('cedulaProfesional', cedulaProfesional);
    localStorage.setItem('idUsuario', idUsuario);
    localStorage.setItem('idEspecialista', idEspecialista);
    localStorage.setItem('nivelPermisos', nivelPermisos);
    localStorage.setItem('codigoDeVerificacion', codigoDeVerificacion);
    localStorage.setItem('contrasena', contrasena); // Guardar contrasena
    localStorage.setItem('correo', correo); // Guardar correo
  }, [usuarioLogueado, tipoUsuario, cedulaProfesional, idUsuario, idEspecialista, nivelPermisos, codigoDeVerificacion, contrasena, correo]);

  return (
    <UserContext.Provider value={{ 
      usuarioLogueado, 
      setUsuarioLogueado, 
      tipoUsuario, 
      setTipoUsuario, 
      cedulaProfesional, 
      setCedulaProfesional, 
      idUsuario, 
      setIdUsuario, 
      idEspecialista, 
      setIdEspecialista, 
      nivelPermisos, 
      setNivelPermisos,
      codigoDeVerificacion, 
      setCodigoDeVerificacion,
      contrasena, // Pasar contrasena
      setContrasena, // Función para actualizar contrasena
      correo, // Pasar correo
      setCorreo // Función para actualizar correo
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useUserContext = () => {
  return useContext(UserContext);
};
