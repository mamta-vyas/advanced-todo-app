import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// ✅ Define a custom Material-UI theme (optional, but recommended)
const theme = createTheme({
  palette: {
    mode: 'light', // switch to 'dark' for dark mode
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* resets browser styles for MUI */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// Optional: Performance reporting
reportWebVitals();
