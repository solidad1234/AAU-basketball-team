'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function TitlebarBelowMasonryImageList() {
  const [mode, setMode] = React.useState('view'); // 'view', 'changeImage', or 'changeDescription'
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);
  const [imageStates, setImageStates] = React.useState(itemData.map(item => ({
    ...item,
    imageUrl: item.img,
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
            newStates[selectedItemIndex].imageUrl = reader.result;
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
    <Box sx={{ width: '80vw', maxWidth: '1200px', margin: '0 auto', overflowY: 'scroll', marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>2018 Wolves Team</h1>
      </div>
      {selectedItemIndex !== null && (
        <Button onClick={() => setMode('view')} variant="contained" color="secondary" sx={{ marginBottom: '16px' }}>
          Save
        </Button>
      )}
      {mode === 'changeImage' && selectedItemIndex !== null && (
        <>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'block', marginBottom: '16px' }} />
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
      )}
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageStates.map((item, index) => (
          <ImageListItem key={item.img} onClick={() => handleModeToggle(index)}>
            <img
              srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={item.imageUrl}
              alt={item.description}
              loading="lazy"
              style={{ cursor: 'pointer' }}
            />
            <ImageListItemBar
              position="below"
              title={item.description}
              sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'normal' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/images/team2.jpeg',
    title: 'First Team',
  },
  {
    img: '/images/team3.jpeg',
    title: 'Books',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Sink',
  },
  {
    img: '/images/team3.jpeg',
    title: 'Kitchen',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Blinds',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Chairs',
  },
  {
    img: '/images/team3.jpeg',
    title: 'Laptop',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Doors',
  },
  {
    img: '/images/team3.jpeg',
    title: 'Coffee',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Storage',
  },
  {
    img: '/images/team3.jpeg',
    title: 'Candle',
  },
  {
    img: '/images/team2.jpeg',
    title: 'Coffee table',
  },
];
