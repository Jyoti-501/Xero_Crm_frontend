import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function LoginPage() {
  const handleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;
    console.log("Google Token (JWT):", credential);
    const res = await axios.post('http://localhost:5000/api/auth/google', { token: credential });

    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  };

  return <GoogleLogin onSuccess={handleLoginSuccess} onError={() => alert('Login Failed')} />;
}

export default LoginPage;


