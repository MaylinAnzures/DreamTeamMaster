import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CustomButton = styled(Button)({
  backgroundColor: '#092B5A',
  textTransform: 'none',
  color: 'white',
  border: '2px ',
  fontFamily: [
    'Merriweather',
    'sans-serif',
  ].join(','),
  maxWidth: '500px', 
  margin: '10px auto',
  '&:hover': {
    backgroundColor: '#09738A',
  },
  
});

const MyButton = ({ onClick, label, size = 'large' , to }) => (
  <CustomButton onClick={onClick} size={size}  to={to}>
    {label}
  </CustomButton>
);



export default MyButton;