import * as React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
export default function App() {
  return (
    <div>
      <TextField label="Email Address" />
      <TextField label="Password" type="password" />
      <Checkbox value="remember" color="primary" />
      <Button type="submit">Sign in</Button>
    </div>
  );
}
