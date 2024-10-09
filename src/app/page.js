'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { motion } from 'framer-motion';

// Sample data for team members including videos
const teamData = [
  {
    img: '/images/2018/img1.jpeg',
    title: 'Team Member 1',
  },
  {
    img: '/videos/2018/vid2.mp4',
    title: 'Team Video 1',
    isVideo: true,
  },
  {
    img: '/videos/2018/vid3.mp4',
    title: 'Team Video 2',
    isVideo: true,
  },
  {
    img: '/images/2018/img2.jpeg',
    title: 'Team Member 2',
  },
  {
    img: '/images/2018/img3.jpeg',
    title: 'Team Member 3',
  },
  {
    img: '/videos/2018/vid1.mp4',
    title: 'Team Video 3',
    isVideo: true,
  },
  {
    img: '/images/2018/img4.jpeg',
    title: 'Team Member 4',
  },
  {
    img: '/images/2018/img5.jpeg',
    title: 'Team Member 5',
  },
  {
    img: '/videos/2018/vid4.mp4',
    title: 'Team Video 4',
    isVideo: true,
  },
];

export default function TeamPage() {
  return (
    <Box sx={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      {/* Meet Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', margin: '40px 0', fontSize: '2.5rem' }}
      >
        <h1>Meet Our Team</h1>
      </motion.div>

      {/* Head Coach Section - Centered */}
      <Box sx={{ textAlign: 'center', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '20px' }}
        >
          <img
            src="/images/2018/img1.jpeg"
            alt="Head Coach"
            style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Head Coach
        </motion.h2>
      </Box>

      {/* Team Members Section with responsive layout */}
      <ImageList variant="masonry" cols={{ xs: 2, sm: 3 }} gap={8}>
        {teamData.map((item, index) => (
          <ImageListItem key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              {/* Check if the item is a video or an image */}
              {item.isVideo ? (
                <video
                  src={item.img}
                  controls
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              )}
              <ImageListItemBar
                title={item.title}
                position="below"
                sx={{ textAlign: 'center' }}
              />
            </motion.div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
