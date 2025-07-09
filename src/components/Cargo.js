import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  CardHeader,
} from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Cargo = () => {
  return (
    <section id="cargo">
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
            textAlign:"center",
            marginBottom: '1.5rem',
          }}
        >
          Cargo
        </Typography>

        <Grid container spacing={10} justifyContent="center">
          {/* First Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 540,
              }}
            >
              <CardHeader
                title={
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      fontSize: { lg: 20, md: 20, sm: 15, xs: 13 },
                      fontWeight: 'bold',
                      color: '#3a1681',
                      fontFamily: 'Poppins, sans-serif',
                      
                    }}
                  >
                    CARGO CONTAINER TRANSPORT
                  </Typography>
                }
              />
              <CardMedia
                component="img"
                image="/images/container.png"
                alt="Cargo Vehicle"
                sx={{
                  width: '100%',
                  height: 300,
                 // objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    20ft to 32ft Container Options
                  </p>
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    Payload: 5 to 32000 Tonner
                  </p>
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    Available for Monthly Rental
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 540,
              }}
            >
              <CardHeader
                title={
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      fontSize: { lg: 20, md: 20, sm: 15, xs: 13 },
                      fontWeight: 'bold',
                      color: '#3a1681',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    MEDICAL FREEZER CONTAINER
                  </Typography>
                }
              />
              <CardMedia
                component="img"
                image="/images/Freezer.png"
                alt="Medical Freezer"
                sx={{
                  width: '100%',
                  height: 291,
                //  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    -4°C to -16°C Temperature Freezers
                  </p>
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    PAN India Medicine Delivery
                  </p>
                  <p style={{ display: 'flex' }}>
                    <ArrowRightOutlinedIcon sx={{ color: '#85a1ce', mr: 1 }} />
                    Certified Pharma Transport Vehicles
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Cargo;
