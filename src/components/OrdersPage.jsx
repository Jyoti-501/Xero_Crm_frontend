import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from '@mui/material';
import axios from 'axios';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({ customer_id: '', amount: '', date: '' });

  const fetchOrders = async () => {
    const res = await axios.get('https://xero-crm-backend-7cz7.vercel.app/api/orders');
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmit = async () => {
    await axios.post('https://xero-crm-backend-7cz7.vercel.app/api/orders/add', form);
    setForm({ customer_id: '', amount: '', date: '' });
    fetchOrders();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Orders</Typography>

      <TextField label="Customer ID" value={form.customer_id} onChange={e => setForm({ ...form, customer_id: e.target.value })} sx={{ mr: 2 }} />
      <TextField label="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} sx={{ mr: 2 }} />
      <TextField type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} sx={{ mr: 2 }} />
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1 }}>Add Order</Button>

      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell><TableCell>Customer ID</TableCell><TableCell>Amount</TableCell><TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((o, i) => (
            <TableRow key={i}>
              <TableCell>{o.id}</TableCell><TableCell>{o.customer_id}</TableCell><TableCell>{o.amount}</TableCell><TableCell>{o.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default OrdersPage;
