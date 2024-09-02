'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AboutPage() {
  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop: '100px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About UEBL & Wolves AAU
        </Typography>
        <Typography variant="h6" component="p">
          Learn more about our mission, history, and the impact we're making in our community.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Uptown Elite Basketball League (UEBL)
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Uptown Elite Basketball League is a youth program on the north side of Chicago. UEBL was created in 2018 to help the community and athletes of Uptown stay active, engage in a fun and competitive sport, develop lifelong friendships, create unforgettable memories, and provide them with valuable and meaningful experiences.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '40px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Wolves AAU
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The Wolves started as a Chicago Park District basketball teen league then developed into one 17U AAU team. Since then, we have grown to have a 16U and 17U team. We strive to continue the growth of our Wolves teams across the age groups of 8-18.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" component="p">
          Reach out to us for more information or with any questions.
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:uptownelitebasketball@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
              uptownelitebasketball@gmail.com
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:ueblwolvesdevin@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
            ueblwolvesdevin@gmail.com
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:ueblwolvesandrew@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
            ueblwolvesandrew@gmail.com
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:ueblwolvesisaac@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
            ueblwolvesisaac@gmail.com
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:ueblwolvesmoosa@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
            ueblwolvesmoosa@gmail.com
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon sx={{ marginRight: '8px' }} /> 
            <a href="mailto:ueblwolveschris@gmail.com" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
            ueblwolveschris@gmail.com
            </a>
          </Typography>
          
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <a href="https://www.tiktok.com/@uebl_wolves?_t=8oja57UA6Cl&_r=1" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
              Tiktok
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <InstagramIcon sx={{ marginRight: '8px' }} /> 
            <a href="https://www.instagram.com/uebl_wolves?igsh=MWhxYzB3N3ltdmdkbw==" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
              Instagram
            </a>
          </Typography>
          <Typography variant="body2" component="p" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://www.gofundme.com/f/uptown-elite-basketball-league-uebl-wolves" style={{ color: '#3f51b5', textDecoration: 'none', fontWeight: 'bold' }}>
              GoFundMe
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

