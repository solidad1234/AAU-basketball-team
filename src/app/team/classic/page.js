'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';

export default function TitlebarBelowMasonryImageList() {
  const [mode, setMode] = React.useState('view'); // 'view', 'changeImage', or 'changeDescription'
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);
  const [imageStates, setImageStates] = React.useState(itemData.map(item => ({
    ...item,
    mediaUrl: item.img,
    description: item.title,
  })));

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

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

  const getColumns = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  };

  return (
    <Box sx={{ width: '90vw', maxWidth: '1200px', margin: '0 auto', overflowY: 'scroll', marginTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>UEBL Basket Ball Camp</h1>
      </div>
      <ImageList variant="masonry" cols={getColumns()} gap={8}>
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
    img: '/images/classic/pic.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic1.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic2.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic3.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic4.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic5.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic6.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic7.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic8.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic9.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic10.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic11.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic12.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic13.jpeg',
    title: '',
  },
  ,
  {
    img: '/images/classic/pic14.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic15.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic16.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic17.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic18.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic19.jpeg',
    title: '',
  },
  ,
  {
    img: '/images/classic/pic20.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic21.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic22.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic23.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic24.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic25.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic26.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic27.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic28.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic29.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic30.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic31.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic32.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic33.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic34.jpeg',
    title: '',
  },
  ,
  {
    img: '/images/classic/pic35.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic36.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic37.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic38.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic39.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic40.jpeg',
    title: '',
  },
  ,
  {
    img: '/images/classic/pic41.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic42.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic43.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic44.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic45.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic46.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic47.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic48.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic49.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic50.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic51.jpeg',
    title: '',
  },
  {
    img: '/images/classic/pic52.jpeg',
    title: '',
  },
  {
    img: '/videos/classic/vid.mp4',
    title: '',
  },
  {
    img: '/videos/classic/vid1.mp4',
    title: '',
  },
  {
    img: '/videos/classic/vid2.mp4',
    title: '',
  },
  
];
