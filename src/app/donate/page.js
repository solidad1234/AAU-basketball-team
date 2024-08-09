'use client';
import React from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function DonatePage() {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '100px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Support the UEBL Wolves
        </Typography>
        <Typography variant="h6" component="p">
          Your contribution helps us achieve our goals and supports our community.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Button variant="outlined" sx={{ margin: '10px' }}>$10</Button>
        <Button variant="outlined" sx={{ margin: '10px' }}>$25</Button>
        <Button variant="outlined" sx={{ margin: '10px' }}>$50</Button>
        <Button variant="outlined" sx={{ margin: '10px' }}>$100</Button>
        <Box>
          <p> Or Donate a custom amount...</p>
        </Box>
        <TextField
          label="Enter your amount"
          variant="outlined"
          fullWidth
          sx={{ margin: '20px 0' }}
        />
        <FormControlLabel control={<Checkbox />} label="Make this a monthly donation" />
        <Button variant="contained" color="primary" fullWidth sx={{ padding: '15px' }}>
          Donate Now
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
          Your payment information is secure.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Your Impact
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Thanks to your support, we were able to provide new equipment and facilities for our team...
        </Typography>
        
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h6" component="h4">
          Have Questions?
        </Typography>
        <Typography variant="body2" component="p" sx={{ marginBottom: '20px' }}>
          Contact us:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <EmailIcon />
          <Link href="mailto:uptownelitebasketball@gmail.com" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            uptownelitebasketball@gmail.com
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <InstagramIcon />
          <Link href='https://www.instagram.com/uebl_wolves?igsh=MWhxYzB3N3ltdmdkbw==' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            Instagram
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <Link href='https://www.gofundme.com/f/uptown-elite-basketball-league-uebl-wolves' sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
            GoFundMe
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
