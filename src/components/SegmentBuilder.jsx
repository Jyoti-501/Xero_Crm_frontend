import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';

function SegmentBuilder({ onBuild }) {
  const [rule, setRule] = useState('');

  const handleBuild = () => {
    onBuild(rule);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Segment Rule Builder</Typography>
      <TextField
        fullWidth
        label="Rule"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleBuild}>
        Preview Segment
      </Button>
    </Container>
  );
}

export default SegmentBuilder;
