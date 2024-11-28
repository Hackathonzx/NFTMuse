'use client';

import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Button,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

// Replace with your 3D model or animation component (Placeholder)
const ThreeDModel = () => (
  <Box sx={{ height: 300, bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="h6">3D Model Placeholder</Typography>
  </Box>
);

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#f0f0f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            NFTMuse
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            AI NFT Curator for Artists and Collectors
          </Typography>
          <ThreeDModel /> {/* Replace with your actual 3D model */}
          <Box sx={{ mt: 2 }}>
            <Button
              component={Link}
              to="/dashboard"
              variant="contained"
              color="primary"
              sx={{ mr: 2, transition: 'transform 0.2s ease', ':hover': { transform: 'scale(1.05)' } }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/marketplace"
              variant="outlined"
              color="primary"
              sx={{ transition: 'transform 0.2s ease', ':hover': { transform: 'scale(1.05)' } }}
            >
              Marketplace
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, transition: 'box-shadow 0.3s ease', ':hover': { boxShadow: 10 } }}>
              <Typography variant="h6" gutterBottom>
                For Artists
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="AI-powered NFT generation tools" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Personalized recommendations for minting" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Effortless listing on the NFTMuse marketplace" />
                </ListItem>
                {/* Add more features */}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, transition: 'box-shadow 0.3s ease', ':hover': { boxShadow: 10 } }}>
              <Typography variant="h6" gutterBottom>
                For Collectors
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Curated NFT collections tailored to your interests" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="AI-driven insights and market trends" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Secure and transparent NFT trading platform" />
                </ListItem>
                {/* Add more features */}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Contract Addresses */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Deployed Contracts
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            <List>
              <ListItem>
                <ListItemText
                  primary="NFTMint"
                  secondary={
                    <React.Fragment>
                      Address: 0x... {/* Replace with actual address */}
                      <a href="https://cronos.org/explorer/" target="_blank" rel="noopener noreferrer">
                        (Cronos Explorer)
                      </a>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="NFTMarketplace"
                  secondary={
                    <React.Fragment>
                      Address: 0x... {/* Replace with actual address */}
                      <a href="https://cronos.org/explorer/" target="_blank" rel="noopener noreferrer">
                        (Cronos Explorer)
                      </a>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="RewardToken"
                  secondary={
                    <React.Fragment>
                      Address: 0x... {/* Replace with actual address */}
                      <a href="https://cronos.org/explorer/" target="_blank" rel="noopener noreferrer">
                        (Cronos Explorer)
                      </a>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 4, textAlign: 'center', bgcolor: '#333', color: '#fff', p: 2 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} NFTMuse. All rights reserved.
        </Typography>
        {/* Add social media links here */}
      </Box>
    </Box>
  );
}

