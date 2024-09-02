'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function TitlebarBelowMasonryImageList() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const imageStates = [
    { img: '/images/2018/img1.jpeg', title: 'Image 1' },
    { img: '/videos/2018/vid2.mp4', title: 'Video 2' },
    { img: '/videos/2018/vid3.mp4', title: 'Video 3' },
    { img: '/images/2018/img2.jpeg', title: 'Image 2' },
    { img: '/videos/2018/vid1.mp4', title: 'Video 1' },
    { img: '/images/2018/img3.jpeg', title: 'Image 3' },
    { img: '/videos/2018/vid4.mp4', title: 'Video 4' },
  ];

  const imageUrls = imageStates.map(item => item.img);

  const handleOpenLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleMovePrev = () => {
    setPhotoIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleMoveNext = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const renderLightboxContent = () => {
    const currentItem = imageStates[photoIndex];
    if (currentItem.img.endsWith('.mp4') || currentItem.img.endsWith('.webm') || currentItem.img.endsWith('.ogg')) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <video
            controls
            autoPlay
            style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
          >
            <source src={currentItem.img} type="video/mp4" />
            <source src={currentItem.img.replace('.mp4', '.webm')} type="video/webm" />
            <source src={currentItem.img.replace('.mp4', '.ogg')} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return <img src={currentItem.img} alt={currentItem.title} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />;
  };

  return (
    <Box
      sx={{
        width: '80vw',
        maxWidth: '1200px',
        margin: '0 auto',
        overflowY: 'scroll',
        marginTop: '100px',
        backgroundImage: 'url(/images/gallery-background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>2018 Wolves Team</h1>
      </div>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageStates.map((item, index) => (
          <ImageListItem key={item.img} onClick={() => handleOpenLightbox(index)}>
            {item.img.endsWith('.mp4') || item.img.endsWith('.webm') || item.img.endsWith('.ogg') ? (
              <video
                controls
                style={{ cursor: 'pointer', maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              >
                <source src={item.img} type="video/mp4" />
                <source src={item.img.replace('.mp4', '.webm')} type="video/webm" />
                <source src={item.img.replace('.mp4', '.ogg')} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ cursor: 'pointer' }}
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

      {isOpen && (
        <Lightbox
          mainSrc={imageStates[photoIndex].img}
          nextSrc={imageStates[(photoIndex + 1) % imageStates.length].img}
          prevSrc={imageStates[(photoIndex - 1 + imageStates.length) % imageStates.length].img}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          imageCaption={imageStates[photoIndex].title}
          animationDisabled={true} // Disable default animation for smoother custom experience
          reactModalProps={{
            shouldReturnFocusAfterClose: false,
            ariaHideApp: false,
            isOpen: true,
            contentLabel: "Image/Video Lightbox",
          }}
          reactModalStyles={{
            content: { background: 'rgba(0, 0, 0, 0.9)' },
          }}
        >
          {renderLightboxContent()}
        </Lightbox>
      )}
    </Box>
  );
}


// const itemData = [
//   { img: '/images/2018/img1.jpeg', title: 'Image 1' },
//   { img: '/videos/2018/vid2.mp4', title: 'Video 2' },
//   { img: '/videos/2018/vid3.mp4', title: 'Video 3' },
//   { img: '/images/2018/img2.jpeg', title: 'Image 2' },
//   { img: '/images/2018/img3.jpeg', title: 'Image 3' },
//   { img: '/videos/2018/vid1.mp4', title: 'Video 1' },
//   { img: '/images/2018/img4.jpeg', title: 'Image 4' },
//   { img: '/images/2018/img5.jpeg', title: 'Image 5' },
//   { img: '/videos/2018/vid4.mp4', title: 'Video 4' },
// ];
