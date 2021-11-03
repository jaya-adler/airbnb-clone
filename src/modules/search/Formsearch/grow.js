import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Paper } from '@mui/material';
import Locationsearch from './Locationsearch'
import Checkinout from './Checkinout'
import SimpleFade from './guestpage'
import SearchIcon from '../../../../node_modules/@mui/icons-material/Search';


const search1 = (<Paper elevation={0} style={{backgroundColor:'transparent'}}><Locationsearch/></Paper>);
const search2 = (<Paper elevation={0} style={{backgroundColor:'transparent'}}><Checkinout/></Paper>);
const search3 = (<Paper elevation={0} style={{backgroundColor:'transparent',padding:'10px'}}><SimpleFade/></Paper>);
const mainsearch = (
  <div>
      <div className="header__center__res">
  <SearchIcon />
  </div>
  <div className="header__center">
  <Button variant="outlined"> 
      <div className="search"><span>Start your search</span></div>
      <SearchIcon />
   </Button>
  </div>
  </div>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{    display: 'flex', flexDirection:'column', alignItems: 'flex-start',color: 'gray',maxWidth: '60%',padding: '10px'}}>
      <FormControlLabel
        control={<Button onClick={handleChange}>{mainsearch}</Button>}
        label=""
      />
      <Box in={checked} sx={{ display: 'flex', alignItems:'center', flexDirection:'row', margin:'10px'}}>
        <Grow in={checked}
                 style={{ transformOrigin: '0 0 0' }}
                 {...(checked ? { timeout: 1000 } : {})}
        >{search1}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow in={checked}
                 style={{ transformOrigin: '0 0 0' }}
                 {...(checked ? { timeout: 1000 } : {})}
        >{search2}</Grow>
        
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {search3}
        </Grow>
      </Box>
    </Box>
  );
}