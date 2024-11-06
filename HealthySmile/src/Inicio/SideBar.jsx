import React from "react";
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const SpecialistSidebar = ({ specialists, onSelectSpecialist }) => {
  return (
    <Box
      width="300px"
      bgcolor="#f0f0f0"
      p={2}
      borderRight="1px solid #ddd"
      overflow="auto"
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Especialistas
      </Typography>
      <List>
        {specialists.map((specialist) => (
          <ListItem
            button
            key={specialist.id}
            onClick={() => onSelectSpecialist(specialist)}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={specialist.name}
              secondary={specialist.specialty}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SpecialistSidebar;
