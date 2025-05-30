// Updated App.js with light theme, colors, and animation
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CustomerPage from './components/CustomerPage';
import OrdersPage from './components/OrdersPage';
import SegmentBuilder from './components/SegmentBuilder';
import CampaignAdd from './components/CampaignAdd';
import CampaignHistory from './components/CampaignHistory';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: {
      default: '#f4f9ff',
      paper: '#ffffff'
    },
    text: {
      primary: '#212121',
      secondary: '#616161'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 'bold'
        }
      }
    }
  }
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(decoded.exp * 1000 > Date.now());
      } catch {
        setIsLoggedIn(false);
      }
    }
  }, []);

  const onLogin = () => setIsLoggedIn(true);
  const onLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId="132542423290-17is9rv7mk7v643gmi0a3fsk5716vqsq.apps.googleusercontent.com">
        <Router>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Routes>
              <Route path="/" element={<LoginPage onLogin={onLogin} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<CustomerPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/segments" element={<SegmentBuilder onBuild={(rule) => alert('Segment preview: ' + rule)} />} />
              <Route path="/campaign/add" element={<CampaignAdd />} />
              <Route path="/campaign/history" element={<CampaignHistory />} />
            </Routes>
          </motion.div>
        </Router>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
