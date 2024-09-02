'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax'; // We'll use react-parallax for the hero section

// Sample data for team members
const teamData = [
    {
        img: '/images/2018/img1.jpeg',
        title: '',
      },
      {
        img: '/videos/2018/vid2.mp4',
        title: '',
      },
      {
        img: '/videos/2018/vid3.mp4',
        title: '',
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
      }
];

export default function TeamPage() {
  const [mode, setMode] = React.useState('view'); // 'view', 'changeImage', or 'changeDescription'
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);
  const [imageStates, setImageStates] = React.useState(teamData.map(item => ({
    ...item,
    mediaUrl: item.img,
    description: item.title,
  })));

  const handleModeToggle = (index) => {
    setSelectedItemIndex(index);
    setMode(mode === 'view' ? 'changeImage' : (mode === 'changeImage' ? 'changeDescription' : 'view'));
  };

  const handleImageUpload = (e) => {
    if (selectedItemIndex !== null) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageStates(prevStates => {
            const newStates = [...prevStates];
            newStates[selectedItemIndex].mediaUrl = reader.result;
            return newStates;
          });
          setMode('view');
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDescriptionChange = (e) => {
    if (selectedItemIndex !== null) {
      setImageStates(prevStates => {
        const newStates = [...prevStates];
        newStates[selectedItemIndex].description = e.target.value;
        return newStates;
      });
    }
  };

  return (
    <Box sx={{ width: '90vw', maxWidth: '1400px', margin: '0 auto', overflowY: 'scroll', marginTop: '50px' }}>
      {/* Hero Section with Parallax Effect */}
      <Parallax
        // bgImage="/images/hero/background.jpg"
        bgImageAlt="Hero Background"
        strength={500}
      >
        <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: 'black', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Meet Our Team
          </motion.h1>
        </div>
      </Parallax>

      {/* Content Below Hero */}
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2>Our Dedicated Team Members</h2>
      </div>

      {/* {selectedItemIndex !== null && (
        <Button onClick={() => setMode('view')} variant="contained" color="secondary" sx={{ marginBottom: '16px' }}>
          Save
        </Button>
      )}
      {mode === 'changeImage' && selectedItemIndex !== null && (
        <>
          <input type="file" accept="image/*,video/*" onChange={handleImageUpload} style={{ display: 'block', marginBottom: '16px' }} />
        </>
      )}
      {mode === 'changeDescription' && selectedItemIndex !== null && (
        <>
          <TextField
            label="New Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={imageStates[selectedItemIndex].description}
            onChange={handleDescriptionChange}
            sx={{ marginBottom: '16px' }}
          />
        </>
      )} */}
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageStates.map((item, index) => (
          <ImageListItem key={item.mediaUrl} onClick={() => handleModeToggle(index)}>
            <motion.div
              whileHover={{ scale: 1.05, borderRadius: '20px', cursor: 'pointer' }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              {item.mediaUrl.endsWith('.mp4') || item.mediaUrl.endsWith('.webm') || item.mediaUrl.endsWith('.ogg') ? (
                <video
                  controls
                  style={{ cursor: 'pointer', width: '100%', height: 'auto', objectFit: 'cover' }}
                >
                  <source src={item.mediaUrl} type="video/mp4" />
                  <source src={item.mediaUrl.replace('.mp4', '.webm')} type="video/webm" />
                  <source src={item.mediaUrl.replace('.mp4', '.ogg')} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <motion.img
                  srcSet={`${item.mediaUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={item.mediaUrl}
                  alt={item.description}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              )}
              <ImageListItemBar
                position="below"
                title={item.description}
                sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'normal' }}
              />
            </motion.div>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
