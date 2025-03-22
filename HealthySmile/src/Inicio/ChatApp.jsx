import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import SideBar from "./SideBar";
import Chatsito from "./Chatsito";
import { UserContext } from "../componentes/UserContext";
import axios from "axios";
import { db } from "../../firebaseConfig"; // Importar Firebase
import { collection, query, where, getDocs } from "firebase/firestore";

const ChatApp = () => {
  const { tipoUsuario, idUsuario,idEspecialista } = useContext(UserContext);
  const [selectedChatUser, setSelectedChatUser] = useState(null);
  const [chatUsers, setChatUsers] = useState([]);

  useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        if (tipoUsuario === "Paciente") {
          // Obtener todos los especialistas
          const response = await axios.get("http://localhost:3000/api/obtenerEspecialistasChatAndroid");
          console.log("🔍 Respuesta de la API (Especialistas):", response.data);
          const formattedData = response.data.map((item) => ({
            idUser: Number(item.idEspecialista),
            nomUser: item.nombre,
            especialidad: item.especialidad,
          }));
          setChatUsers(formattedData);
        } else if (tipoUsuario === "Especialista") {
          // Buscar en Firebase los pacientes con chats activos con este especialista
          const chatsRef = collection(db, "chats");
          const q = query(chatsRef, where("idEspecialista", "==", Number(idEspecialista)));
          const querySnapshot = await getDocs(q);
          
          // Obtener solo los ID de los pacientes
          const patientIds = querySnapshot.docs.map(doc => doc.data().idUsuario);
          console.log("🔍 IDs de pacientes obtenidos de Firebase:", patientIds);
          if (patientIds.length === 0){
            console.warn("⚠️ No hay pacientes con chats activos en Firebase.");
           return;}

          // Llamar al backend para obtener la información de los pacientes
          const response = await axios.get(`http://localhost:3000/api/obtenerPacientesChatAndroid?idsUsuarios=${patientIds.join(",")}`);
          console.log("🔍 Respuesta de la API (Pacientes):", response.data);
          const formattedData = response.data.map((item) => ({
            idUser: Number(item.idUsuario),
            nomUser: item.nombre,
            correoUser: item.correo,
          }));
          console.log("✅ Pacientes formateados:", formattedData);
          setChatUsers(formattedData);

          const allChats = await getDocs(collection(db, "chats"));
          console.log("📂 Todos los chats en Firebase:", allChats.docs.map(doc => doc.data())); // 👀 Verifica qué chats hay en Firebase

        }
      } catch (error) {
        console.error("Error al obtener los datos del chat:", error);
      }
    };

    fetchChatUsers();
  }, [tipoUsuario, idUsuario]);

  return (
    <Box display="flex" height="100vh">
      <SideBar chatUsers={chatUsers} onSelectChatUser={setSelectedChatUser} />
      {selectedChatUser ? (
        <Chatsito chatUser={selectedChatUser} />
      ) : (
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <h4>Selecciona un usuario para comenzar el chat</h4>
        </Box>
      )}
    </Box>
  );
};

export default ChatApp;
