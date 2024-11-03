import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

const MyButton = ({ onClick, label, size = 'large' }) => (
  <CustomButton onClick={onClick} size={size}>
    {label}
  </CustomButton>
);



export default MyButton;