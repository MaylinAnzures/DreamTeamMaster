import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CustomMenuButton = styled(Button)(() => ({
  textTransform: 'none',
  backgroundColor: '#F0F8FF',
  color: 'black',
  size: 'large',
  fontFamily: [
    'Merriweather', 
    'sans-serif'].join(','),
  '&:hover': {
    backgroundColor: '#F0F8FF', 
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  textTransform: 'none',
  color: 'black',
  fontFamily: ['Merriweather', 'sans-serif'].join(','),
}));

export default function BasicMenu({ buttonLabel, menuOptions }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomMenuButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        endIcon={<KeyboardArrowDownIcon />}
      >
        {buttonLabel}
      </CustomMenuButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom', // Esto ancla el menú en la parte inferior del botón
          horizontal: 'center', // Esto lo centra horizontalmente respecto al botón
        }}
        transformOrigin={{
          vertical: 'top', // Esto posiciona la parte superior del menú al nivel del botón
          horizontal: 'center', // Esto mantiene el menú centrado horizontalmente
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button', // Asegúrate de que este ID coincida con el botón
        }}
      >
        {menuOptions.map((option, index) => (
          <CustomMenuItem
            key={index}
            onClick={handleClose}
            component={NavLink}
            to={option.to}
          >
            {option.label}
          </CustomMenuItem>
        ))}
      </Menu>
    </>
  );
}
