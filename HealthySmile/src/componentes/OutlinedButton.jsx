import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme, color, borderColor, hoverColor, hoverBorderColor, backgroundColor, hoverBackgroundColor }) => ({
  border: `2px solid ${borderColor}`,
  color: color,
  background: backgroundColor,
  borderRadius: 100,
  padding: '10px 30px',
  fontSize: 'var(--XS, 0.9rem)', // Tamaño de fuente dinámico
  fontWeight: 'var(--font-weight-bold, 700)',
  transition: 'all 0.3s ease',
  minWidth: '120px', // Anchura mínima para un buen diseño responsivo

  '@media (max-width:600px)': { // Pantallas pequeñas
    fontSize: 'var(--XXS, 0.8rem)', 
    padding: '8px 16px',
  },
  '@media (min-width:600px) and (max-width:960px)': { // Pantallas medianas
    fontSize: 'var(--S, 1.2rem)',
    padding: '10px 20px',
  },

  '&:hover': {
    border: `2px solid ${hoverBorderColor}`,
    color: hoverColor,
    background: hoverBackgroundColor,
  },
}));

const MyOutlinedButton = ({ label, color, borderColor, hoverColor, hoverBorderColor, backgroundColor, hoverBackgroundColor }) => (
  <CustomButton
    variant="outlined"
    color={color}
    borderColor={borderColor}
    hoverColor={hoverColor}
    hoverBorderColor={hoverBorderColor}
    backgroundColor={backgroundColor}
    hoverBackgroundColor={hoverBackgroundColor}
  >
    {label}
  </CustomButton>
);

export default MyOutlinedButton;
