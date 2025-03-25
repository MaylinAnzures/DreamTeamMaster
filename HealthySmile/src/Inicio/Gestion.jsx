import React, { useState } from 'react';
import { Box, Grid, Typography, Tabs, Tab, Button, List, ListItem, ListItemText } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import HeaderApp from '../componentes/header';
import FooterApp from '../componentes/footer';

function Gestion() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Simulación de citas desde la BD
  const citas = [
    { id: 1, fecha: '2025-03-20', hora: '10:00 AM', motivo: 'Papulandia', especialista: 'Dr. Calvillo' },
    { id: 2, fecha: '2025-03-25', hora: '3:00 PM', motivo: 'Ayudatengosueño', especialista: 'Dra. García' },
    { id: 3, fecha: '2025-03-28', hora: '12:00 PM', motivo: 'examenfisca', especialista: 'Dr. jimenez' }
  ];

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleEliminar = (id) => {
    alert(`Cita con ID ${id} eliminada.`);
  };

  const handleModificar = (id) => {
    alert(`Modificar cita con ID ${id}.`);
  };

  return (
    <>
      <HeaderApp />
      <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', padding: 3 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{ fontSize: '1.1rem', fontWeight: 'bold', backgroundColor: '#fff', borderRadius: 2 }}>
          <Tab label="Historial de Citas" />
          <Tab label="Historial de Compras" />
        </Tabs>

        {tabIndex === 0 && (
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  shouldDisableDate={(day) => citas.some(cita => cita.fecha === day.format('YYYY-MM-DD'))}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6" textAlign="center" gutterBottom>
                  Citas Programadas
                </Typography>
                <List>
                  {citas.map((cita) => (
                    <ListItem key={cita.id} sx={{ borderBottom: '1px solid #ccc' }}>
                      <ListItemText
                        primary={`${cita.fecha} - ${cita.hora}`}
                        secondary={`${cita.motivo} con ${cita.especialista}`}
                      />
                      <Button variant="contained" color="warning" onClick={() => handleModificar(cita.id)} sx={{ marginRight: 1 }}>
                        Modificar
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleEliminar(cita.id)}>
                        Eliminar
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        )}

        {tabIndex === 1 && (
          <Box sx={{ marginTop: 3, backgroundColor: '#fff', padding: 3, borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
            <Typography variant="h5">Historial de Compras</Typography>
            <Typography variant="body1">Aquí irá el historial de compras.</Typography>
          </Box>
        )}
      </Box>
      <FooterApp />
    </>
  );
}

export default Gestion;
