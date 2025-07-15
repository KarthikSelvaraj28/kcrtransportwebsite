// components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

const images = [
  '/images/clients/flixbus.png',
  '/images/clients/Governmentoftn.png',
  '/images/clients/greavescotton.png',
  '/images/clients/intercitysmartbus.png',
  '/images/clients/jeevanroadconstructions.png',
  '/images/clients/larsentoubro.png',
  '/images/clients/nhai.png',
  '/images/clients/nsc.png',
  '/images/clients/pricol.png',
  '/images/clients/relainceinfracture.png',
  '/images/clients/sricity.png',
  '/images/clients/supremegroup.png',
  '/images/clients/ultratech.png',
  '/images/clients/zingbus.png',
];

const ImageSlider = () => {
 const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

  return (

    <Box sx={{ width: '100%', overflow: 'hidden', py: 2 }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: '600',
          color: '#3a1681',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        
        Our Clients
      </Typography>
      

      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Slide ${index}`}
            sx={{
              width: '100%',
              height: { xs: '80px', sm: '100px', md: '200px' },
              objectFit: 'contain',
              px: 1,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
