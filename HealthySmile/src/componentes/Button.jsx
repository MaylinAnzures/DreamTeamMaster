import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CustomButton = styled(Button )({
  backgroundColor: 'green',
  color: 'white',
  '&:hover': {
    backgroundColor: '#000000',
  },
});

const MyButton = ({ onClick, children }) => (
  <div>
  <Stack direction="row" spacing={2}>
      <CustomButton onClick={() => console.log("Custom button clicked!")}>
        Custom Button
      </CustomButton>
      <CustomButton onClick={() => console.log("Custom button clicked!")}>
        Custom Button
      </CustomButton>
      </Stack>
  </div>

);

export default MyButton;