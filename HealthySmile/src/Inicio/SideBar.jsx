import React, { useContext } from "react";
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../componentes/UserContext";

const ChatSidebar = ({ chatUsers, onSelectChatUser }) => {
  const navigate = useNavigate();
  const { tipoUsuario } = useContext(UserContext);

  return (
    <Box
      width="300px"
      bgcolor="#f0f0f0"
      p={2}
      borderRight="1px solid #ddd"
      overflow="auto"
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {tipoUsuario === "Paciente" ? "Especialistas" : "Pacientes"}
      </Typography>
      <List>
        {chatUsers.map((user) => (
          <ListItem button key={user.idUser} onClick={() => onSelectChatUser(user)}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.nomUser}
              secondary={tipoUsuario === "Paciente" ? user.especialidad : user.correoUser}
            />
          </ListItem>
        ))}
        <Button fullWidth sx={{ color: '#092B5A', mt: 2 }} onClick={() => navigate('/Consulta')}>
          Volver a consultas
        </Button>
      </List>
    </Box>
  );
};

export default ChatSidebar;
