import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import axios from 'axios';

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/campaigns/history')
      .then(res => setCampaigns(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Campaign History</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rules</TableCell>
            <TableCell>Audience Size</TableCell>
            <TableCell>Sent</TableCell>
            <TableCell>Failed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((c, i) => (
            <TableRow key={i}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.rules}</TableCell>
              <TableCell>{c.audience_size}</TableCell>
              <TableCell>{c.sent}</TableCell>
              <TableCell>{c.failed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default CampaignHistory;
