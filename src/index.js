import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 🔁 Replace `YOUR_CLIENT_ID` with your actual Google Client ID
root.render(
  <GoogleOAuthProvider clientId="132542423290-17is9rv7mk7v643gmi0a3fsk5716vqsq.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
