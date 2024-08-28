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
        <h1>2022 Wolves Team</h1>
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
    img: '/images/2022/img1.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img2.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img3.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img4.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img5.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img6.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img7.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img8.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img9.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img10.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img11.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img12.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img13.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img14.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img15.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img16.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img17.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img18.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img19.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img20.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img23.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img24.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img25.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img26.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img27.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img28.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img29.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img30.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img31.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img32.jpeg',
    title: '',
  },
  {
    img: '/images/2022/img33.jpeg',
    title: '',
  },
  {
    img: '/videos/2022/vid1.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid2.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid3.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid4.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid5.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid6.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid7.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid8.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid9.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid10.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid11.mp4',
    title: '',
  },
  {
    img: '/videos/2022/vid12.mp4',
    title: '',
  },
];
