import { createContext, useContext, useState, useEffect } from 'react';

// Crear contexto
export const UserContext = createContext();

// Componente Proveedor de Contexto
export const UserProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(localStorage.getItem('usuarioLogueado') || "");
  const [tipoUsuario, setTipoUsuario] = useState(localStorage.getItem('tipoUsuario') || null);
  const [cedulaProfesional, setCedulaProfesional] = useState(localStorage.getItem('cedulaProfesional') || null);
  const [idUsuario, setIdUsuario] = useState(localStorage.getItem('idUsuario') || null);
  const [idEspecialista, setIdEspecialista] = useState(localStorage.getItem('idEspecialista') || null);
  const [nivelPermisos, setNivelPermisos] = useState(localStorage.getItem('nivelPermisos') || null);
  const [codigoDeVerificacion, setCodigoDeVerificacion] = useState(localStorage.getItem('codigoDeVerificacion') || null);
  const [contrasena, setContrasena] = useState(localStorage.getItem('contrasena') || null);
  const [correo, setCorreo] = useState(localStorage.getItem('correo') || null);
  //Agregado
  const [preliminar, setPreliminar] = useState(localStorage.getItem('preliminar') || null);
  const [fotoPerfil, setFotoPerfil] = useState(localStorage.getItem('fotoPerfil') || null);
  const [descripcion, setDescripcion] = useState(localStorage.getItem('descripcion') || null);
  const [especialidad, setEspecialidad] = useState(localStorage.getItem('especialidad') || null);
  //

  // Inicializar estaLogueado basándose en el valor almacenado de usuarioLogueado
  const [estaLogueado, setEstaLogueado] = useState(!!localStorage.getItem('usuarioLogueado'));

  useEffect(() => {
    localStorage.setItem('usuarioLogueado', usuarioLogueado);
    localStorage.setItem('tipoUsuario', tipoUsuario);
    localStorage.setItem('cedulaProfesional', cedulaProfesional);
    localStorage.setItem('idUsuario', idUsuario);
    localStorage.setItem('idEspecialista', idEspecialista);
    localStorage.setItem('nivelPermisos', nivelPermisos);
    localStorage.setItem('codigoDeVerificacion', codigoDeVerificacion);
    localStorage.setItem('contrasena', contrasena);
    localStorage.setItem('correo', correo);
    //Agregado
    localStorage.setItem('preliminar', preliminar);
    localStorage.setItem('fotoPerfil', fotoPerfil);
    localStorage.setItem('descripcion', descripcion);
    localStorage.setItem('especialidad', especialidad);
    //

    // Actualizar estaLogueado en cada cambio de usuarioLogueado
    setEstaLogueado(usuarioLogueado !== "");
  }, [usuarioLogueado, tipoUsuario, cedulaProfesional, idUsuario, idEspecialista, nivelPermisos, codigoDeVerificacion, contrasena, correo, preliminar, fotoPerfil, descripcion, especialidad]);

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
      contrasena, 
      setContrasena, 
      correo, 
      setCorreo, 
      estaLogueado, 
      setEstaLogueado,
      //Agregado
      preliminar,
      setPreliminar,
      fotoPerfil,
      setFotoPerfil,
      descripcion,
      setDescripcion,
      especialidad,
      setEspecialidad 
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useUserContext = () => {
  return useContext(UserContext);
};
