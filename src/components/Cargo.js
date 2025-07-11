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
          p: { xs: 2, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
            color: '#3a1681',
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Cargo
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* First Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 22 },
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
                  height: { xs: 200, sm: 250, md: 300 },
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: '#85a1ce',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Features
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {[
                    '20ft to 32ft Container Options',
                    'Payload: 5 to 32000 Tonner',
                    'Available for Monthly Rental',
                  ].map((text, index) => (
                    <Box
                      key={index}
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1,
                        fontSize: { xs: 14, sm: 15 },
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      <ArrowRightOutlinedIcon
                        sx={{ color: '#85a1ce', mr: 1 }}
                      />
                      {text}
                    </Box>
                  ))}
                </Box>

                
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
                height: '100%',
              }}
            >
              <CardHeader
                title={
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 22 },
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
                  height: { xs: 200, sm: 250, md: 300 },
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: '#85a1ce',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Service Highlights
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                  {[
                    '-4°C to -16°C Temperature Freezers',
                    'PAN India Medicine Delivery',
                    'Certified Pharma Transport Vehicles',
                  ].map((text, index) => (
                    <Box
                      key={index}
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1,
                        fontSize: { xs: 14, sm: 15 },
                        color: '#333',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      <ArrowRightOutlinedIcon
                        sx={{ color: '#85a1ce', mr: 1 }}
                      />
                      {text}
                    </Box>
                  ))}
                </Box>

               
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Cargo;
