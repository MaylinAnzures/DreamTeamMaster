import React from 'react';

const LimpiarLocalStorage = () => {

  // Función para limpiar el localStorage
  const limpiarStorage = () => {
    localStorage.clear();  // Elimina todos los elementos del localStorage
    console.log("localStorage ha sido limpiado.");
    // Si quieres redirigir a otra página después de limpiar el storage, puedes hacerlo:
    // window.location.href = '/Inicio';  // Redirige a la ruta '/Inicio'
  };

  return (
    <div>
      <button onClick={limpiarStorage}>Limpiar LocalStorage</button>
    </div>
  );
}

export default LimpiarLocalStorage;
