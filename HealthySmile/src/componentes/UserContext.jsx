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
  const [idEspecialista, setIdEspecialista] = useState(localStorage.getItem('idEspecialista') || null); // Nuevo estado
  const [nivelPermisos, setNivelPermisos] = useState(localStorage.getItem('nivelPermisos') || null);

  // Actualizar Local Storage cada vez que cambian los valores
  useEffect(() => {
    localStorage.setItem('usuarioLogueado', usuarioLogueado);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    localStorage.setItem('cedulaProfesional', cedulaProfesional);
    localStorage.setItem('idUsuario', idUsuario);
    localStorage.setItem('idEspecialista', idEspecialista); // Guardar idEspecialista
    localStorage.setItem('nivelPermisos', nivelPermisos);
  }, [usuarioLogueado, tipoUsuario, cedulaProfesional, idUsuario, idEspecialista, nivelPermisos]);

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
      idEspecialista, // Pasar idEspecialista
      setIdEspecialista, // Función para actualizar idEspecialista
      nivelPermisos, 
      setNivelPermisos 
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useUserContext = () => {
  return useContext(UserContext);
};
