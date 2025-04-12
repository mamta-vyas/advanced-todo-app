import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';
import { Button } from '@mui/material';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Logout;
