import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Guests from './Guests';
import { Button } from '@mui/material';
import Guestform from './guestform';

const icon = (
  <Paper style={{borderRadius:"10%"}}>
    <Guestform />
  </Paper>
);

export default function SimpleFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 'auto' , height:'auto'}}>
      <FormControlLabel
        control={<Button onClick={handleChange} style={{textTransform:'none'}}><Guests /></Button>}
        label=""
      />
      <Box sx={{ display: 'flex', position:'absolute', zIndex:'1',padding:'10px',right:'15%'}}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
    </Box>
  );
}
