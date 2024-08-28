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
    <Box sx={{ width: '80vw', maxWidth: '1200px', margin: '0 auto', overflowY: 'scroll', marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>UEBL Basketball Camp</h1>
      </div>
      {/* {selectedItemIndex !== null && (
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
      )} */}
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageStates.map((item, index) => (
          <ImageListItem key={item.mediaUrl} onClick={() => handleModeToggle(index)}>
            {item.mediaUrl.endsWith('.mp4') || item.mediaUrl.endsWith('.webm') || item.mediaUrl.endsWith('.ogg') ? (
              <video
                controls
                style={{ cursor: 'pointer', maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              >
                <source src={item.mediaUrl} type="video/mp4" />
                <source src={item.mediaUrl.replace('.mp4', '.webm')} type="video/webm" />
                <source src={item.mediaUrl.replace('.mp4', '.ogg')} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                srcSet={`${item.mediaUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={item.mediaUrl}
                alt={item.description}
                loading="lazy"
                style={{ cursor: 'pointer' }}
              />
            )}
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
    img: '/images/camp/img.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img1.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img2.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img3.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img4.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img5.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img6.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img7.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img8.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img9.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img10.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img11.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img12.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img13.jpeg',
    title: ' Camp',
  },
  ,
  {
    img: '/images/camp/img14.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img15.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img16.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img17.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img18.jpeg',
    title: 'Camp',
  },
  {
    img: '/images/camp/img19.jpeg',
    title: ' Camp',
  },
  ,
  {
    img: '/images/camp/img20.jpeg',
    title: 'Camp',
  },
];
