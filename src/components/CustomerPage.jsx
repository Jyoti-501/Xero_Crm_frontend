// CustomerPage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', spend: '', visits: '', last_active: '' });

  const fetchCustomers = async () => {
    try {
      const res = await axios.get('https://xero-crm-backend-7cz7.vercel.app/api/customers');
      setCustomers(res.data);
    } catch (err) {
      console.error('Error fetching customers:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post('https://xero-crm-backend-7cz7.vercel.app/api/customers/add', form);
      setForm({ name: '', email: '', spend: '', visits: '', last_active: '' });
      fetchCustomers();
    } catch (err) {
      console.error('Error adding customer:', err);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Customers</Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>Add Customer</Typography>
        <TextField label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} sx={{ mr: 2, mt: 2 }} />
        <TextField label="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} sx={{ mr: 2, mt: 2 }} />
        <TextField label="Spend" value={form.spend} onChange={e => setForm({ ...form, spend: e.target.value })} sx={{ mr: 2, mt: 2 }} />
        <TextField label="Visits" value={form.visits} onChange={e => setForm({ ...form, visits: e.target.value })} sx={{ mr: 2, mt: 2 }} />
        <TextField type="date" value={form.last_active} onChange={e => setForm({ ...form, last_active: e.target.value })} sx={{ mr: 2, mt: 2 }} />
        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>Add Customer</Button>
      </Paper>

      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Spend</TableCell>
              <TableCell>Visits</TableCell>
              <TableCell>Last Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c, i) => (
              <TableRow key={i} sx={{ backgroundColor: i % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.spend}</TableCell>
                <TableCell>{c.visits}</TableCell>
                <TableCell>{c.last_active}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default CustomerPage;
