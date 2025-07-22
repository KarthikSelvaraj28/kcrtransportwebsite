import React, { useState } from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const Banner = () => {
  const [missionHovered, setMissionHovered] = useState(false);
  const [visionHovered, setVisionHovered] = useState(false);

  const getPaperStyle = (hovered) => ({
    p: { xs: 3, sm: 5 },
    borderRadius: 2,
    backgroundColor: hovered ? '#f5f5ff' : '#fff',
    height: '100%',
    boxShadow: hovered
      ? '0 6px 20px rgba(0, 0, 0, 0.15)'
      : '0 4px 12px rgba(0, 0, 0, 0.05)',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  });

  return (
    <section id="banner">
      <Box sx={{ width: '100%' }}>
        {/* Static Banner Image */}
        <Box
          component="img"
          src="/images/banner.png"
          alt="Banner"
          sx={{
            width: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Mission and Vision Cards */}
        <Grid
          container
          spacing={3}
          sx={{
            background:
              'linear-gradient(to top, rgba(72, 183, 214, 0.2) 0%, rgba(255,255,255,1) 100%)',
            px: { xs: 2, md: 10 },
            py: { xs: 4, md: 6 },
             justifyContent: 'center',   
    //alignItems: 'center',      
    textAlign: 'center',   
       
  
          }}
        >
          {/* Mission */}
          <Grid item xs={12} size={{md:6}}>
            <Paper
              elevation={3}
              sx={getPaperStyle(missionHovered)}
              onMouseEnter={() => setMissionHovered(true)}
              onMouseLeave={() => setMissionHovered(false)}
              onTouchStart={() => setMissionHovered(!missionHovered)}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign:'center',
                  fontWeight: 'bold',
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  color: '#3a1681',
                  fontFamily: 'serif',
                    fontSize: "1.5rem",

                  mb: 2,
                }}
              >
                MISSIONSSS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.8,
                  justifyContent:"center",
                }}
              >
                To revolutionize the transport industry by integrating
                technology and eco-friendly practices for better service and
                sustainability.
              </Typography>
            </Paper>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} size={{md:6}}>
            <Paper
              elevation={3}
              sx={getPaperStyle(visionHovered)}
              onMouseEnter={() => setVisionHovered(true)}
              onMouseLeave={() => setVisionHovered(false)}
              onTouchStart={() => setVisionHovered(!visionHovered)}
            >
              <Typography
                variant="h5"
                sx={{
                    fontSize: "1.5rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  textAlign:'center',
                  fontWeight: 'bold',
                  color: '#3a1681',
                  fontFamily: 'serif',
                  mb: 2,
                }}
              >
                VISIONS
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16 },
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.8,
                  justifyContent:"normal",
                }}
              >
                To build a brand that stands for timely delivery,
                professionalism, and customer-first service, future of
                transportation by adopting smart logistics, sustainable
                practices, and digital solutions in the transportation sector.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Banner;
