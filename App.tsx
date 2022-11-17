import * as React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function App() {
  return (
    <div>
      <TextField 
      label="Email Address" 
      required 
      fullWidth 
      name="email"
      autoComplete="email"
      //autoFocus
       />
      <TextField
        label="Password"
        type="password"
        required
        fullWidth
        name="password"
        autoComplete="current-password"
      />
       <FormControlLabel
        control={<Checkbox value="remember" 
        color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullwidth variant="contained"
      sx={{mt:3,mb:2}}>

      Sign in
      </Button>
    </div>
  );
}
