'use client';

import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  TextField,
  Avatar,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LinkIcon from '@mui/icons-material/Link';


const SettingsPage = () => {
  return (
    <Box className="settings-page">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <List className="settings-list">
        <ListItem className="settings-list-item">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Account" secondary="Manage your account details" />
        </ListItem>
        <Divider />
        <ListItem className="settings-list-item">
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" secondary="Customize your notification preferences" />
          <Switch defaultChecked /> {/* Example Switch */}
        </ListItem>
        <Divider />
        <ListItem className="settings-list-item">
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Security" secondary="Update your password and security settings" />
        </ListItem>
        <Divider />
        <ListItem className="settings-list-item">
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Linked Accounts" secondary="Manage your connected accounts" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SettingsPage;

<style jsx global>
  {`
    .settings-page {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
    }

    .settings-list {
      padding: 0;
    }

    .settings-list-item {
      padding: 16px 0;
      border-bottom: 1px solid #eee;
    }

    .settings-list-item:last-child {
      border-bottom: none;
    }

    .settings-list-item button {
      width: 100%;
      text-align: left;
    }

    /* Media queries for responsiveness */
    @media (max-width: 768px) {
      .settings-page {
        padding: 10px;
      }

      .settings-list-item {
        padding: 12px 0;
      }
    }

    @media (max-width: 480px) {
      .settings-page {
        padding: 5px;
      }

      .settings-list-item {
        padding: 8px 0;
      }
    }

    /* CSS transitions for hover effects */
    .settings-list-item button:hover {
      background-color: #f0f0f0;
      transition: background-color 0.3s ease;
    }

    .settings-list-item button:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  `}
</style>