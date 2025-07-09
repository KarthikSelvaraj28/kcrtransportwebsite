import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Tippers = () => {
  return (
    <section id="tippers">
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
                Tippers & Concrete
              </Typography>

      <Grid
        container
        spacing={8}
        sx={{
        
          background: 'radial-gradient(rgba(72, 183, 214, 0.35), #ffffff)',
          p: { xs: 4, sm: 5, md: 8 },
          
        }}
      >
        {/* Left Section (Text) */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 5, md: 7 },
              borderRadius: 2,
              backgroundColor: '#fff',
              boxShadow: '0 4px 12px rgba(225, 212, 212, 0.1)',
            textAlign:'left',
            ml: { xs: 0, sm: 4, md: 10, lg: 10 },
             width: { xs: '100%', sm: '100%', md: '100%' }
            }}
          >
           

            <Typography
  variant="h3"
  component="h4"
  sx={{
    fontSize: { lg: 20, md: 20, sm: 24, xs: 20 },
    fontWeight: "bold",
    color: "#3a1681",
    justifyContent:"center",

    fontFamily: "Poppins, sans-serif",
   // mt:'-1',
  }}
>
TIPPERS  
</Typography>
<Typography
  variant="h3"
  component="h4"
  sx={{
    fontSize: { lg: 15, md: 20, sm: 20, xs: 20 },
    fontWeight: "bold",
    color: "#85a1ce",
    fontFamily: "Poppins, sans-serif",
    mt:1,
  }}
>


                High-capacity fleet & pump solutions

</Typography>

<Typography
  sx={{
  
    fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
    color: "#333",
    fontFamily: "Poppins, sans-serif",
    lineHeight: 1.6,
  
  }}
>

              <p style={{ display: 'flex' }}>
                <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                6 Cu.M to 12 Cu.M Tipper Trucks
              </p>
              <p style={{ display: 'flex' }}>
                <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                7 & 9 Cu.M Ready Mix Concrete (RMC) Available
              </p>
              <p style={{ display: 'flex' }}>
                <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                Concrete Pump Truck Services
              </p>
              <p style={{ display: 'flex' }}>
                <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                Flatbed Vehicles for Equipment Transport
              </p>
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section (Image) */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'Center' }}
                  
>
            
          <Box
            component="img"
            src="/images/Tippers.png"
            alt="Tipper Vehicle"
            sx={{
              width: {
                xs: '100%',sm: '100%',md: '100%',lg: '80%',xl: '70%',
              },
            // height: 'auto',
              maxHeight: { xs: 400, sm: 450, md: 500, lg: 500 },
              borderRadius: 3,
              justifyContent:"center",
              boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
              mx: 'auto',
              display: 'block',
            }}
          />

        </Grid>
      </Grid>
    </section>
  );
};

export default Tippers;
