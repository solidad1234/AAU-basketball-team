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
        <h1>2024 Wolves Team</h1>
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
    img: '/images/2024/img.jpeg',
    title: '',
  },
  {
    img: '/images/2024/img1.jpeg',
    title: '',
  },
  {
    img: '/videos/2024/vid.mp4',
    title: '',
  },
  {
    img: '/videos/2024/vid1.mp4',
    title: '',
  },
  {
    img: '/images/2024/img2.jpeg',
    title: '',
  },
  {
    img: '/videos/2024/vid2.mp4',
    title: '',
  },
  {
    img: '/images/2024/img3.jpeg',
    title: '',
  },
  {
    img: '/images/2024/img4.jpeg',
    title: '',
  },
  {
    img: '/images/2024/img5.jpeg',
    title: '',
  },
  {
    img: '/images/2024/img6.jpeg',
    title: '',
  },
  {
    img: '/images/2024/img7.jpeg',
    title: '',
  },
  {
    img: '/videos/2024/vid3.mp4',
    title: '',
  },
  {
    img: '/videos/2024/vid4.mp4',
    title: '',
  },
  {
    img: '/videos/2024/vid5.mp4',
    title: ' ',
  },
  ,
  {
    img: '/videos/2024/vid6.mp4',
    title: '',
  },
{
    img: '/videos/2024/vid7.mp4',
    title: '',
  },
{
  img: '/images/2024/img8.jpeg',
  title: '',
},
{
  img: '/images/2024/img9.jpeg',
  title: '',
},
{
  img: '/images/2024/img10.jpeg',
  title: '',
},
{
  img: '/images/2024/img11.jpeg',
  title: '',
},
{
  img: '/images/2024/img12.jpeg',
  title: '',
},
{
  img: '/images/2024/img13.jpeg',
  title: '',
},
{
  img: '/images/2024/img14.jpeg',
  title: '',
},
{
  img: '/images/2024/img15.jpeg',
  title: '',
},
{
  img: '/images/2024/img16.jpeg',
  title: '',
},
{
  img: '/images/2024/img17.jpeg',
  title: '',
},
{
  img: '/images/2024/img18.jpeg',
  title: '',
},
{
  img: '/images/2024/img19.jpeg',
  title: '',
},
{
  img: '/images/2024/img20.jpeg',
  title: '',
},
{
  img: '/images/2024/img21.jpeg',
  title: '',
},
{
  img: '/images/2024/img22.jpeg',
  title: '',
},
{
  img: '/images/2024/img23.jpeg',
  title: '',
},
{
  img: '/images/2024/img24.jpeg',
  title: '',
},
{
  img: '/images/2024/img25.jpeg',
  title: '',
},
{
  img: '/images/2024/img26.jpeg',
  title: '',
},

];

