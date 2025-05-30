import React from 'react';
import { Container, Typography } from '@mui/material';
function Hero({ isLoggedIn }) {
  return (
    <Container sx={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Xeno Mini CRM
      </Typography>
      <Typography variant="h6" gutterBottom>
        Manage campaigns, target users, and gain insights — smarter.
      </Typography>
      {!isLoggedIn && (
        <Typography variant="subtitle1" sx={{ marginTop: '2rem' }}>
          Sign in to get started
        </Typography>
      )}
    </Container>
  );
}

export default Hero;
