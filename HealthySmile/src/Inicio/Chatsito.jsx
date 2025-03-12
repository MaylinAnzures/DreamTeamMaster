import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig"; // Asegúrate de que firebase.js está configurado
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, where, getDocs } from "firebase/firestore";
import { Avatar, Button, List, ListItem, ListItemText, TextField, Typography, Box } from "@mui/material";
import { useUserContext } from './../componentes/UserContext';

const Chatsito = ({ specialist }) => {
  const { idUsuario, usuarioLogueado } = useUserContext() || {}; // Ahora obtenemos el idUsuario directamente
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const [chatId, setChatId] = useState('');

  // Establecer nickname cuando el usuario está logueado
  useEffect(() => {
    if (usuarioLogueado) {
      setNickname(usuarioLogueado);
    }
  }, [usuarioLogueado]);

  // Buscar el chatId o crear uno nuevo si no existe
  useEffect(() => {
    if (!idUsuario || !specialist) return;

    const fetchChatId = async () => {
      console.log("Buscando chatId...");
      console.log("idUsuario:", idUsuario); // Verifica que idUsuario esté siendo recibido correctamente
      console.log("specialist:", specialist);

      const q = query(
        collection(db, "chats"),
        where("idUsuario", "==", idUsuario), // Usamos 'idUsuario' para la consulta
        where("idEspecialista", "==", specialist.id)
      );

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          console.log("Chat encontrado:", querySnapshot.docs[0].id);
          setChatId(querySnapshot.docs[0].id);
        } else {
          console.log("No se encontró el chat, creando uno nuevo...");
          const newChatRef = await addDoc(collection(db, "chats"), {
            idUsuario: idUsuario, // Usamos idUsuario aquí también
            idEspecialista: specialist.id,
          });
          setChatId(newChatRef.id);
        }
      } catch (error) {
        console.error("Error al buscar o crear el chat: ", error);
      }
    };

    fetchChatId();
  }, [idUsuario, specialist]); // Asegúrate de que idUsuario y specialist estén correctamente definidos

  // Suscribirse a los mensajes del chat en tiempo real
  useEffect(() => {
    if (!chatId) return;

    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe(); // Limpiar la suscripción al desmontar
  }, [chatId]);

  // Enviar mensaje a Firestore
  const sendMessage = async () => {
    if (!message.trim() || !chatId) return;

    try {
      await addDoc(collection(db, "chats", chatId, "messages"), {
        nickname,
        message,
        timestamp: serverTimestamp(),
      });
      setMessage(""); // Limpiar el campo de mensaje
    } catch (error) {
      console.error("Error enviando mensaje: ", error);
    }
  };

  if (!usuarioLogueado || !specialist) {
    return <div>Cargando...</div>;
  }

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Box display="flex" alignItems="center" bgcolor="#092B5A" color="#fff" p={2}>
        <Avatar sx={{ bgcolor: "#fff", color: "#3f51b5", mr: 2 }}>
          {specialist.name.charAt(0)}
        </Avatar>
        <Typography variant="h6">{specialist.name}</Typography>
      </Box>

      <Box flex={1} p={2} bgcolor="#f9f9f9" overflow="auto">
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ justifyContent: msg.nickname === nickname ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={msg.message}
                sx={{
                  p: 1.5,
                  bgcolor: msg.nickname === nickname ? '#d1e7dd' : '#e2e3e5',
                  borderRadius: 2,
                  maxWidth: '60%',
                  color: '#333'
                }}
              />
            </ListItem>
          ))}
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
