import React, { useState, useEffect, useContext } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where, getDocs } from "firebase/firestore";
import { Avatar, Button, List, ListItem, ListItemText, TextField, Typography, Box } from "@mui/material";
import { UserContext } from "../componentes/UserContext";

const Chatsito = ({ chatUser }) => {
  const { idUsuario, tipoUsuario,idEspecialista } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState(null);
  

  useEffect(() => {
    if (!idUsuario || !chatUser) return;
    
    const fetchChatId = async () => {
      console.log("Buscando chatId...");
      const idUsuarioChat = Number(tipoUsuario === "Paciente" ? idUsuario : idEspecialista);
      const idEspecialistaChat = Number(chatUser.idUser);

      const q = query(
        collection(db, "chats"),
        where("idUsuario", "in", [idUsuarioChat, idEspecialistaChat]),
        where("idEspecialista", "in", [idUsuarioChat, idEspecialistaChat])
      );

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          console.log("Chat encontrado:", querySnapshot.docs[0].id);
          setChatId(querySnapshot.docs[0].id);
        } else {
          console.log("No se encontró chat existente.");
          setChatId(null);
        }
      } catch (error) {
        console.error("Error al buscar el chat: ", error);
      }
    };

    fetchChatId();
  }, [idUsuario, chatUser]);

  useEffect(() => {
    setMessages([]); // Limpiar mensajes al cambiar de chat
    if (!chatId) return;
    
    const q = query(
      collection(db, "chats", chatId, "mensajes"),
      orderBy("fecha", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(fetchedMessages.reverse()); // Invertimos para mostrar de más antiguo a más nuevo
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    try {
      let currentChatId = chatId;
      const idUsuarioChat = Number(tipoUsuario === "Paciente" ? idUsuario : idEspecialista);
      const idEspecialistaChat = Number(chatUser.idUser);

      if (!currentChatId) {
        const newChatRef = await addDoc(collection(db, "chats"), {
          idUsuario: idUsuarioChat,
          idEspecialista: idEspecialistaChat
        });
        currentChatId = newChatRef.id;
        setChatId(newChatRef.id);
        console.log("Nuevo chat creado:", newChatRef.id);
      }

      await addDoc(collection(db, "chats", currentChatId, "mensajes"), {
        destinatario: idEspecialistaChat,
        emisor: idUsuarioChat,
        mensaje: message,
        fecha: serverTimestamp(),
      });

      setMessage("");
    } catch (error) {
      console.error("Error enviando mensaje: ", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Box display="flex" alignItems="center" bgcolor="#092B5A" color="#fff" p={2}>
        <Avatar sx={{ bgcolor: "#fff", color: "#3f51b5", mr: 2 }}>
          {chatUser.nomUser.charAt(0)}
        </Avatar>
        <Typography variant="h6">{chatUser.nomUser}</Typography>
      </Box>

      <Box flex={1} p={2} bgcolor="#f9f9f9" overflow="auto">
        <List>
          {messages.map((msg) => {
            const emisor = Number(msg.emisor);
            const usuarioLogueado = tipoUsuario === "Paciente" ? Number(idUsuario) : Number(idEspecialista);

            return (
              <ListItem key={msg.id} sx={{ justifyContent: emisor === usuarioLogueado ? 'flex-end' : 'flex-start' }}>
                <ListItemText
                  primary={msg.mensaje}
                  sx={{
                    p: 1.5,
                    bgcolor: emisor === usuarioLogueado ? '#d1e7dd' : '#e2e3e5',
                    borderRadius: 2,
                    maxWidth: '60%',
                    color: '#333'
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box display="flex" alignItems="center" p={2} borderTop="1px solid #ddd">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Escribe un mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage} color="primary" disabled={!message.trim()}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Chatsito;
