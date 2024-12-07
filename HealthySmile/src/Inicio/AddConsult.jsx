import React, { useState } from 'react';
import { Box, Grid, Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl, IconButton} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HeaderApp from '../componentes/header';
import FooterApp from '../componentes/footer';
import dayjs from 'dayjs';

import fondito from '../../public/fondito.jpeg';

function AgregarConsulta() {
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');
  const [especialista, setEspecialista] = useState('');

  const handleGuardar = () => {
    if (fecha && hora && motivo && especialista) {
      alert(`Consulta guardada: 
        Fecha: ${dayjs(fecha).format('DD/MM/YYYY')}, 
        Hora: ${hora}, 
        Motivo: ${motivo}, 
        Especialista: ${especialista}`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleCancelar = () => {
    setFecha(null);
    setHora('');
    setMotivo('');
    setEspecialista('');
  };

  return (
    <>
    <HeaderApp/>
    <div style={{backgroundColor: '#616163'}}>
    <Grid container style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Sección de formulario */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h5" textAlign="center" sx={{ marginBottom: 2 }}>
            Agregar Consulta
          </Typography>

          {/* Selector de fecha con calendario */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
              <DatePicker
                label="Fecha"
                value={fecha}
                onChange={(newDate) => setFecha(newDate)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth />
                )}
              />
            </Box>
          </LocalizationProvider>

          {/* Campo de hora */}
          <TextField
            fullWidth
            type="time"
            label="Hora"
            InputLabelProps={{ shrink: true }}
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          {/* Campo de texto para el motivo */}
          <TextField
            fullWidth
            label="Motivo de la consulta"
            multiline
            rows={4}
            placeholder="Describe el motivo de la consulta"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          {/* Selector de especialista */}
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="especialista-label">Especialista</InputLabel>
            <Select
              labelId="especialista-label"
              value={especialista}
              onChange={(e) => setEspecialista(e.target.value)}
              label="Especialista"
            >
              <MenuItem value="" disabled>
                Selecciona un especialista
              </MenuItem>
              <MenuItem value="especialista1">Especialista 1</MenuItem>
              <MenuItem value="especialista2">Especialista 2</MenuItem>
              <MenuItem value="especialista3">Especialista 3</MenuItem>
            </Select>
          </FormControl>

          {/* Botones */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleGuardar}
            >
              Guardar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCancelar}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Grid>
     

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${fondito})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
    </Grid>
    </div>
    <FooterApp/>
    </>
  );
}

export default AgregarConsulta;
