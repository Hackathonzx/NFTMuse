'use client';

import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Pagination,
} from '@mui/material';

// Sample NFT data
const sampleNFTs = [
  { id: 1, title: 'Cyberpunk Cityscape', description: 'A futuristic cityscape with neon lights.', price: 0.5, category: 'Art' },
  { id: 2, title: 'Mystical Forest', description: 'A serene forest with magical creatures.', price: 0.3, category: 'Photography' },
  { id: 3, title: 'Abstract Lines', description: 'A vibrant abstract artwork with bold lines.', price: 0.2, category: 'Art' },
  // ... more sample data
];

// Sample categories
const categories = ['Art', 'Photography', 'Music', 'Collectibles'];

const Marketplace = () => {
  const [filteredNFTs, setFilteredNFTs] = useState(sampleNFTs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handle search input change
  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  // Handle category selection change
  const handleCategoryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCategory(event.target.value);
  };

  // Apply filters and search
  const applyFilters = () => {
    let filtered = sampleNFTs;

    if (searchTerm) {
      filtered = filtered.filter((nft) =>
        nft.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((nft) => nft.category === selectedCategory);
    }

    setFilteredNFTs(filtered);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        NFT Marketplace
      </Typography>

      {/* Filter and Search Section */}
      <Grid container spacing={2} alignItems="center" marginBottom={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Search NFTs"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory}
              label="Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained" onClick={applyFilters}>
            Apply
          </Button>
        </Grid>
      </Grid>

      {/* NFT Listings */}
      <Grid container spacing={3}>
        {filteredNFTs.map((nft) => (
          <Grid item key={nft.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="placeholder.jpg" // Replace with actual image URL
                alt={nft.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {nft.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {nft.description}
                </Typography>
                <Typography variant="h6" color="primary" marginTop={1}>
                  {nft.price} ETH
                </Typography>
                <Button variant="contained" fullWidth sx={{ marginTop: 1 }}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Pagination
        count={10} // Replace with actual number of pages
        color="primary"
        sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default Marketplace;