// UserContext.jsx
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
  const [correoUser, setCorreoUser] = useState(localStorage.getItem('correoUser') || null);
  const [contrasenaUser, setContrasenaUser] = useState(localStorage.getItem('contrasenaUser') || null);
  const [nivelPermisos, setNivelPermisos] = useState(localStorage.getItem('nivelPermisos') || null);

  // Actualizar Local Storage cada vez que cambian los valores
  useEffect(() => {
    localStorage.setItem('usuarioLogueado', usuarioLogueado);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    localStorage.setItem('cedulaProfesional', cedulaProfesional);
    localStorage.setItem('idUsuario', idUsuario);
    localStorage.setItem('correoUser', correoUser);
    localStorage.setItem('contrasenaUser', contrasenaUser);
    localStorage.setItem('nivelPermisos', nivelPermisos);
  }, [usuarioLogueado, tipoUsuario, cedulaProfesional, idUsuario, correoUser, contrasenaUser, nivelPermisos]);

  return (
    <UserContext.Provider value={{ usuarioLogueado, setUsuarioLogueado, tipoUsuario, setTipoUsuario, cedulaProfesional, setCedulaProfesional, idUsuario, setIdUsuario, correoUser, setCorreoUser, contrasenaUser, setContrasenaUser, nivelPermisos, setNivelPermisos }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useUserContext = () => {
  return useContext(UserContext);
};
