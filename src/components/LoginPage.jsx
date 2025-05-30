import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function LoginPage({ onLogin }) {
  const handleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/google`,
        { token: credential }
      );

      // Store token and notify App.js
      localStorage.setItem('token', res.data.token);
      onLogin(); // important!
    } catch (error) {
      console.error('Login failed:', error);
      alert('Google login failed. Please try again.');
    }
  };

  return (
    <div style={{ marginTop: '10rem', textAlign: 'center' }}>
      <h2>Welcome to Xeno CRM</h2>
      <p>Please sign in to continue</p>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={() => alert('Login Failed')} />
    </div>
  );
}

export default LoginPage;
