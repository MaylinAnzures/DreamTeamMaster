import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Chatsito from "./Chatsito";

const ChatApp = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/obtenerEspecialistasChat")
      .then((response) => response.json())
      .then((data) => {
        const formattedSpecialists = data.map((item) => ({
          id: item.idUsuario,
          name: item.nombre,
          specialty: item.especialidad,
        }));
        setSpecialists(formattedSpecialists);
      })
      .catch((error) => console.error("Error al obtener especialistas:", error));
  }, []);

  return (
    <Box display="flex" height="100vh">
      <SideBar
        specialists={specialists}
        onSelectSpecialist={setSelectedSpecialist}
      />
      {selectedSpecialist ? (
        <Chatsito specialist={selectedSpecialist} />
      ) : (
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <h4>Selecciona un especialista para comenzar el chat</h4>
        </Box>
      )}
    </Box>
  );
};

export default ChatApp;
