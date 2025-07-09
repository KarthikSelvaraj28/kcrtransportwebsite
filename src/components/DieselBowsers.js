import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const DieselBowsers = () => {
  return (
    <section id="dieselbowsers">
      <Box
        sx={{
          background: 'radial-gradient(rgba(72, 183, 214, 0.35), #ffffff)',
          p: 3,
        }}
      >
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
          Diesel Bowsers
        </Typography>

        <Grid
          container
          spacing={10}
          sx={{
            background: 'radial-gradient(rgba(72, 183, 214, 0.35), #ffffff)',
            p: { xs: 2, sm: 3, md: 12 },
          }}
        >
          {/* Left Section - Image */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/images/dieselbowsers.png"
              alt="Diesel Bowsers"
              sx={{
                width: {
                  xs: '100%',
                  sm: '95%',
                  md: '90%',
                  lg: '70%',
                  xl: '80%',
                },
               // maxWidth: 600,
               // height: '100%',
                maxHeight: { xs: 350, sm: 400, md: 450, lg: 600 },
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                mx: 'auto',
                display: 'block',
              }}
            />
          </Grid>

          {/* Right Section - Text */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 1, sm: 2, md: 3 },
                borderRadius: 2,
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(225, 212, 212, 0.1)',
              //  height: 'auto',
               // maxWidth: { xs: '100%', sm: '95%', md: '80%', lg: '100%' },
              }}
            >
              <Typography
                variant="h3"
                component="h4"
                sx={{
                  fontSize: { lg: 20, md: 22, sm: 20, xs: 18 },
                  fontWeight: 'bold',
                  color: '#3a1681',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Diesel Bowser Services
                <br />
                <span
                  style={{
                    fontSize:'15px',
                    color: '#85a1ce',
                  }}
                >
                  Efficient fuel delivery & fleet support
                </span>
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: { lg: 15, md: 13, sm: 15, xs: 14 },
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: 1.6,
                }}
              >
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Kanyakumari to Trivandrum Highway Supply
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Andhra Sricity Projects Supported
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Tamilnadu Fishing Corporation Logistics
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Roadside Construction Fuel Services
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  1000L to 6000L Diesel Bowsers Available
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Contracted by Leading Companies
                </p>
                <p style={{ display: 'flex' }}>
                  <ArrowRightOutlinedIcon sx={{ color: '#85a1ce' }} />
                  Operated Under Our Trusted Fleet Badge
                </p>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default DieselBowsers;
