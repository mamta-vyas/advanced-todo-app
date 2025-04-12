import { createSlice } from '@reduxjs/toolkit';

// Helper function to safely parse JSON
const safeParse = (value, defaultValue) => {
  try {
    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.error('Error parsing localStorage item:', e);
    return defaultValue;
  }
};

const initialState = {
  isAuthenticated: safeParse(localStorage.getItem('isAuthenticated'), false), // Default to false
  user: safeParse(localStorage.getItem('user'), null), // Default to null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Store 'true' as string
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
