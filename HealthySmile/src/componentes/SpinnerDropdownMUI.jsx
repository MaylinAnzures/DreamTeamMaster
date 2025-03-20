import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useUserContext } from './UserContext';

const SpinnerDropdownMUI = () => {
    const { especialidad, setEspecialidad } = useUserContext(); // Corrección en el uso del contexto
    const [especialidadVista, setEspecialidadVista] = useState(especialidad); // Estado local para la vista
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const especialidades = [
        'Odontología General', 'Ortodoncia', 'Periodoncia', 'Endodoncia', 'Cirugía Bucal', 'Implantología', 'Odontopediatría',
        'Odontología Estética', 'Prostodoncia', 'Radiología Oral y Maxilofacial', 'Medicina Oral', 'Patología Oral',
        'Odontología Forense', 'Odontología Geriátrica', 'Odontología Preventiva', 'Terapia Orofacial', 'Oclusión',
        'Sistemas Dentales Digitales', 'Higiene Dental'
    ];

    const handleClick = (event) => {
        setOptionsVisible(true);
        setAnchorEl(event.currentTarget);
    };

    const handleSelectOption = (especialidadSeleccionada) => {
        setEspecialidadVista(especialidadSeleccionada); // Actualiza la vista primero
        setEspecialidad(especialidadSeleccionada); // Guarda en el contexto
        setOptionsVisible(false);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setOptionsVisible(false);
        setAnchorEl(null);
    };

    return (
        <div className="spinner-dropdown-container">
            <Button variant="contained" onClick={handleClick}>
                {especialidadVista ? especialidadVista : 'Especialidades'}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={optionsVisible}
                onClose={handleClose}
            >
                {especialidades.map((especialidadItem) => (
                    <MenuItem key={especialidadItem} onClick={() => handleSelectOption(especialidadItem)}>
                        {especialidadItem}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default SpinnerDropdownMUI;
