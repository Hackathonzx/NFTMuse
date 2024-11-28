'use client';

import * as React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  LinearProgress,
  Avatar,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

// Sample Data 
const user = {
  name: 'Jane Doe',
  profilePicture: 'https://via.placeholder.com/150', 
  progress: 75,
  goals: [
    { name: 'Complete Profile', completed: true },
    { name: 'Mint First NFT', completed: false },
    { name: 'Join a Community', completed: true },
  ],
};

const recentActivity = [
  { timestamp: '10 mins ago', action: 'Minted "Cyberpunk Cityscape"', link: '#' },
  { timestamp: '30 mins ago', action: 'Liked "Cosmic Dreams"', link: '#' },
  { timestamp: '1 hour ago', action: 'Followed @nft_artist', link: '#' },
];

const Dashboard: React.FC = () => {

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {/* User Profile Section */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}
                  src={user.profilePicture}
                >
                  {user.name.charAt(0)}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NFT Enthusiast
                </Typography>
                <Box sx={{ width: '100%', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Profile Completion
                  </Typography>
                  <LinearProgress variant="determinate" value={user.progress} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Goals Section */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Goals
              </Typography>
              {user.goals.map((goal, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <Typography variant="body2">
                    {goal.name}
                  </Typography>
                  <Box flexGrow={1} /> {/* Pushes the icon to the right */}
                  {goal.completed ? (
                    <Typography color="green">&#10003;</Typography>
                  ) : (
                    <Typography color="error">&#10005;</Typography>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              {recentActivity.map((activity, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <Typography variant="body2" color="text.secondary">
                    {activity.timestamp} -
                  </Typography>
                  <Typography variant="body2" component="a" href={activity.link}>
                    {activity.action}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Collection Stats / Charts Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Collection Stats
              </Typography>
              {/* Placeholder for charts or stats */}
              <Typography variant="body2" color="text.secondary">
                Coming soon: Charts and data visualizations of your NFT collection!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Marketplace Activity / Recommendations Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Marketplace Activity
              </Typography>
              {/* Placeholder for marketplace activity or recommendations */}
              <Typography variant="body2" color="text.secondary">
                Coming soon: Recent sales, trending NFTs, and personalized recommendations!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Featured NFTs / Collections Section */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Featured NFTs
              </Typography>
              {/* Placeholder for a carousel or grid of featured NFTs */}
              <Typography variant="body2" color="text.secondary">
                Coming soon: Discover exciting new NFTs and collections!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;