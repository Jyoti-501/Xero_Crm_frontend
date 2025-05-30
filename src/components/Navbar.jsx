import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryIcon from '@mui/icons-material/History';
import RuleIcon from '@mui/icons-material/Rule';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar({ onLogout, isLoggedIn }) {
  return (
    <AppBar position="static" sx={{ boxShadow: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🚀 Xeno CRM
        </Typography>
        {isLoggedIn && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="/dashboard" startIcon={<DashboardIcon />}>Dashboard</Button>
            <Button color="inherit" href="/customers" startIcon={<GroupIcon />}>Customers</Button>
            <Button color="inherit" href="/orders" startIcon={<ShoppingCartIcon />}>Orders</Button>
            <Button color="inherit" href="/segments" startIcon={<RuleIcon />}>Segments</Button>
            <Button color="inherit" href="/campaign/add" startIcon={<CampaignIcon />}>New</Button>
            <Button color="inherit" href="/campaign/history" startIcon={<HistoryIcon />}>History</Button>
            <Button color="inherit" onClick={onLogout} startIcon={<LogoutIcon />}>Logout</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;