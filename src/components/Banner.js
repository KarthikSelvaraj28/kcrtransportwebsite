
import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Static Banner Image */}
      <Box
        component="img"
        src="/images/banner.png"
        alt="Banner"
        sx={{
          width: '100%',
          height: { xs: 'auto', md: 400 },
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Mission and Vision Cards */}
      <Grid
        container
        spacing={3}
        sx={{
          background: "linear-gradient(to top, rgba(72, 183, 214, 0.2) 0%, rgba(255,255,255,1) 100%)",
          px: { xs: 2, md: 10 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Mission */}
        <Grid item xs={12}size={{md:6}}>
          <Paper
  elevation={3}
  sx={{
    p: { xs: 3, sm: 5 },
    borderRadius: 2,
    backgroundColor: '#fff',
    height: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
            backgroundColor: '#f5f5ff',

      transform: 'scale(1.03)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
  }}
>

          
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#3a1681',
                fontFamily: 'serif',
                mb: 2,
              }}
            >
              MISSION
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                color: '#333',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.8,
              }}
            >
              To revolutionize the transport industry by integrating technology and eco-friendly practices for better service and sustainability.
            </Typography>
          </Paper>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} size={{md:6}}>
        <Paper
  elevation={3}
  sx={{
    p: { xs: 3, sm: 5 },
    borderRadius: 2,
    backgroundColor: '#fff',
    height: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5ff',

      transform: 'scale(1.03)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
  }}
>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#3a1681',
                fontFamily: 'serif',
                mb: 2,
              }}
            >
              VISION
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                color: '#333',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 1.8,
              }}
            >
              To build a brand that stands for timely delivery, professionalism, and customer-first service, future of transportation by adopting smart logistics, sustainable practices, and digital solutions in the transportation sector.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
