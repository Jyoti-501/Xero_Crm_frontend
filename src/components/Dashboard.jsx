// Updated Dashboard.jsx with charts and cards
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';


const pieData = [
  { name: 'Sent', value: 300 },
  { name: 'Failed', value: 100 }
];

const COLORS = ['#00e676', '#ff1744'];

const barData = [
  { name: 'Jan', Orders: 30 },
  { name: 'Feb', Orders: 45 },
  { name: 'Mar', Orders: 80 },
  { name: 'Apr', Orders: 65 },
  { name: 'May', Orders: 95 }
];

function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>📊 Dashboard</Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your campaign and customer analytics.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Campaign Delivery</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Monthly Orders</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
