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
        <h1>All Star Wolves Team</h1>
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
    img: '/images/all-star/img1.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img2.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img3.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img4.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img5.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img6.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img7.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img8.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img9.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img10.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img11.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img12.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img13.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img14.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img15.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img16.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img17.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img18.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img19.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img20.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img23.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img24.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img25.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img26.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img27.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img28.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img29.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img30.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img31.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img32.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img33.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img34.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img35.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img36.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img37.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img38.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img39.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img40.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img41.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img42.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img43.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img44.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img45.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img46.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img47.jpeg',
    title: '',
  },
  {
    img: '/videos/all-star/vid9.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid10.mp4',
    title: '',
  },
  
  {
    img: '/images/all-star/img48.jpeg',
    title: '',
  },
  {
    img: '/images/all-star/img49.jpeg',
    title: '',
  },
  {
    img: '/videos/all-star/vid1.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid2.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid3.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid4.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid5.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid6.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid7.mp4',
    title: '',
  },
  {
    img: '/videos/all-star/vid8.mp4',
    title: '',
  },
  
];
