import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Tippers = () => {
  return (
    <section
      id="tippers"
      style={{
        background: 'radial-gradient(rgba(72, 183, 214, 0.35), #ffffff)',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: '600',
          color: '#3a1681',
          pt: '20px',
  fontFamily:"serif",
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        Tippers & Concrete
      </Typography>

      <Grid
        container
        spacing={4}
               sx={{
          px: { xs: 2, sm: 3, md: 8 },
          pb: 6,
        }}
      >
        {/* Left: Text Content */}
       <Grid item xs={12} size={{md:6}} lg={6}>
  <Paper
    elevation={3}
    sx={{
      p: { xs: 3, sm: 4, md: 5 },
      borderRadius: 2,
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      height: '100%',
    }}
  >
    <Typography
      variant="h3"
      component="h4"
      sx={{
        fontSize: { lg: 20, md: 20, sm: 24, xs: 20 },
        fontWeight: 'bold',
        color: '#3a1681',
        fontFamily: 'Poppins, sans-serif',
        mt: 1,
      }}
    >
      TIPPERS & CONCRETE
    </Typography>
    <Typography
      variant="h3"
      component="h4"
      sx={{
        fontSize: { lg: 15, md: 20, sm: 20, xs: 20 },
        fontWeight: 'bold',
        color: '#85a1ce',
        fontFamily: 'Poppins, sans-serif',
        mt: 1,
        textTransform:"uppercase",
      }}
    >
      High-capacity fleet & pump solutions
    </Typography>

    {/* Bullet Points with Arrows and Sub-points */}
    <Box
      sx={{
        mt: 2,
        fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
        color: '#333',
        fontFamily: 'Poppins, sans-serif',
        lineHeight: 1.6,
        ml: -1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
        <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', verticalAlign: 'top' }} />
        6 Cu.M to 12 Cu.M Tipper Trucks
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
        <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
7 & 9 Cu.M Ready Mix Concrete (RMC) available

      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, ml: 2 }}>
        <FiberManualRecordIcon
          sx={{ color: '#85a1ce', fontSize: '10px', mt: '6px', mr: 1, }}
        />
        M-Sand, Blue-Metal (20mm, 16mm) supplier
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
        <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
Concrete Pump Truck Services for efficient delivery      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
Flatbed vehicles available for equipment transport

      </Box>
    </Box>
  </Paper>
</Grid>


        {/* Right: Image Box */}
        <Grid size={{xs:12,lg:6,md:5}}>
          <Box
            
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
      component="img"
      src="/images/Tippers.png"
      alt="Tipper Vehicle"   
      sx={{
        width: {xs:"100%",md:"auto"},
        height: 'auto',
        objectFit: 'cover',
      }}
    />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Tippers;