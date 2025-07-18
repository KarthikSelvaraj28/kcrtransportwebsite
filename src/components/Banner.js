// components/Banner.js
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerImages = [
  '/images/bannerbg.png',
  '/images/karbanner.png',
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // 👈 Full screen height
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Banner ${index}`}
            sx={{
              width: '100%',
              height: '100vh', // 👈 Ensure each image also fills the screen
              objectFit: 'cover',
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
