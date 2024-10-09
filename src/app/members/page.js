'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery } from '@mui/material';

// Sample data for team members including videos
const teamData = [
  {
    img: '/images/2018/img1.jpeg',
    title: '',
  },
  {
    img: '/videos/2018/vid2.mp4',
    title: '',
    isVideo: true,
  },
  {
    img: '/videos/2018/vid3.mp4',
    title: '',
    isVideo: true,
  },
  {
    img: '/images/2018/img2.jpeg',
    title: '',
  },
  {
    img: '/images/2018/img3.jpeg',
    title: '',
  },
  {
    img: '/videos/2018/vid1.mp4',
    title: '',
    isVideo: true,
  },
  {
    img: '/images/2018/img4.jpeg',
    title: '',
  },
  {
    img: '/images/2018/img5.jpeg',
    title: '',
  },
  {
    img: '/videos/2018/vid4.mp4',
    title: '',
    isVideo: true,
  },
];

export default function TeamPage() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  const getColumns = () => {
    if (isSmallScreen) return 1; // 1 column on small screens
    if (isMediumScreen) return 2; // 2 columns on medium screens
    return 3; // 3 columns on large screens
  };

  return (
    <Box sx={{ width: '90vw', maxWidth: '1200px', margin: '0 auto', marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Meet Our Team</h1>
      </div>
      
      {/* Head Coach Section - Centered */}
      <Box 
        sx={{ 
          display: 'flex',          // Enable flexbox
          flexDirection: 'column',  // Stack items vertically
          alignItems: 'center',     // Center items horizontally
          marginBottom: '50px' 
        }}
      >
        <img
          src="/images/2022/img1.jpeg"
          alt="Head Coach"
          style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
        />
        <h2 style={{ margin: '0', textAlign: 'center' }}>Head Coach</h2> {/* Centered title */}
      </Box>

      {/* Team Members Section */}
      <ImageList variant="masonry" cols={getColumns()} gap={8}>
        {teamData.map((item, index) => (
          <ImageListItem key={index}>
            {item.isVideo ? (
              <video
                controls
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              >
                <source src={item.img} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ cursor: 'pointer', width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            )}
            <ImageListItemBar
              position="below"
              title={item.title}
              sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'normal' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
