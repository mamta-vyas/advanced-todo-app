import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/reducers/authSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Paper, Typography, Box, Button, TextField } from '@mui/material';

const App = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Advanced To-Do App
        </Typography>

        {/* Conditional Rendering */}
        {!isAuthenticated ? (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" onClick={handleLogin} fullWidth>
                Login
              </Button>
            </Box>
          </Box>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Button variant="outlined" color="error" onClick={handleLogout} fullWidth>
              Logout
            </Button>
            <Box sx={{ mt: 3 }}>
              <TaskInput />
            </Box>
            <Box sx={{ mt: 3 }}>
              <TaskList />
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default App;
