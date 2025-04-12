import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authSlice';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // For simplicity, we're using hardcoded credentials
    if (username === 'user' && password === 'password') {
      dispatch(login({ username }));
    }
  };

  return (
    <div>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
