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
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleToggleNotifications = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setNotificationsEnabled(event.target.checked);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      

      {/* Profile Settings */}
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <TextField label="Username" defaultValue="nft_enthusiast" fullWidth margin="normal" />
        <TextField label="Email" defaultValue="user@example.com" fullWidth margin="normal" />
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Avatar sx={{ width: 60, height: 60, mr: 2 }}>
            {/* Placeholder for user image */}
          </Avatar>
          <Typography variant="body2">Change Profile Picture</Typography>
        </Box>
      </List>
      <Divider />

      {/* Notification Settings */}
      <List>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Enable Notifications" />
          <Switch
            checked={notificationsEnabled}
            onChange={handleToggleNotifications}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </ListItem>
      </List>
      <Divider />

      {/* Security Settings */}
      <List>
        <ListItem>
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Change Password" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Two-Factor Authentication" />
        </ListItem>
      </List>
      <Divider />

      {/* Connection Settings */}
      <List>
        <ListItem>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Connect to Wallet" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Manage Connected Apps" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SettingsPage;