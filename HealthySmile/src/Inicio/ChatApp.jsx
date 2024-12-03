import React, { useState } from "react";
import { Box } from "@mui/material";
import SideBar from './SideBar'
import Chatsito from "./Chatsito";
import { UserContext } from "../componentes/UserContext";


const ChatApp = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const specialists = [
    { id: 1, name: "Dr. González", specialty: "Odontología" },
    { id: 2, name: "Dra. Martínez", specialty: "Ortodoncia" },
    { id: 3, name: "Dr. Pérez", specialty: "Periodoncia" },
  ];

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
