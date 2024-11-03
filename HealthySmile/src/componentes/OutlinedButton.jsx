import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme, color, borderColor, hoverColor, hoverBorderColor, backgroundColor, hoverBackgroundColor }) => ({
  border: `2px solid ${borderColor}`,
  color: color,
  background: backgroundColor,
  borderRadius: 100,
  padding: '1vw 3vw',
  fontSize: 'var(--XS, 1.2vw)', // Tamaño de fuente dinámico
  fontWeight: 'var(--font-weight-bold, 700)',
  transition: 'all 0.3s ease',
  minWidth: '3vw', // Anchura mínima para un buen diseño responsivo

  '&:hover': {
    border: `2px solid ${hoverBorderColor}`,
    color: hoverColor,
    background: hoverBackgroundColor,
  },
}));

const MyOutlinedButton = ({ label, color, borderColor, hoverColor, hoverBorderColor, backgroundColor, hoverBackgroundColor,onClick }) => (
  <CustomButton
    variant="outlined"
    color={color}
    borderColor={borderColor}
    hoverColor={hoverColor}
    hoverBorderColor={hoverBorderColor}
    backgroundColor={backgroundColor}
    hoverBackgroundColor={hoverBackgroundColor}
    onClick={onClick}
  >
    {label}
  </CustomButton>
);

export default MyOutlinedButton;
