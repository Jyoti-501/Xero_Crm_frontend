import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

function CampaignAdd() {
  const [name, setName] = useState('');
  const [rules, setRules] = useState('');

  const handleSubmit = async () => {
    if (!name || !rules) return alert('Please fill all fields');
    await axios.post('http://localhost:5000/api/campaigns', { name, rules });
    alert('Campaign launched!');
    setName('');
    setRules('');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Create Campaign</Typography>
      <TextField fullWidth label="Campaign Name" value={name} onChange={(e) => setName(e.target.value)} sx={{ mt: 2 }} />
      <TextField fullWidth label="Segment Rules" value={rules} onChange={(e) => setRules(e.target.value)} sx={{ mt: 2 }} />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>Launch Campaign</Button>
    </Container>
  );
}

export default CampaignAdd;
