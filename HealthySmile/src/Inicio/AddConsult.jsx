import React, { useState } from 'react';
import HeaderApp from '../componentes/header';
import FooterApp from '../componentes/footer';
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import dayjs from 'dayjs';

function AddConsult() {
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
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" textAlign="center">
        Agregar Consulta
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
      />

      {/* Selector de especialista */}
      <FormControl fullWidth>
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
    <FooterApp/>
    </>
  );
}

export default AddConsult;
