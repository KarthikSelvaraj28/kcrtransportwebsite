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
    <section
      id="dieselbowsers"
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
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        Diesel Bowsers
      </Typography>

      {/* Centering wrapper */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 8 },
          pb: 6,
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            maxWidth: '1200px',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Image Box */}
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
                    <img
                      component="img"
                      src="/images/Deise.png"
                      alt="Tipper Vehicle"
                      style={{
                        
                        height: "auto",
            maxwidth: "100%",
            width:"100%"
                      
                      }}
                    />
                  </Box>
                </Grid>
          {/* Right: Text Content */}
           <Grid size={{xs:12,lg:6,md:6}}>
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
                mt:1,
              }}
            >
              DIESEL BOWSERS
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
              }}
            >
DIESEL BOWSER Available 1kl to 6kl
</Typography>

            {/* Bullet Points */}
            <Box sx={{ mt: 2,ml:-1 }}>
              {[
               ' Kanyakumari Trivandrum Highway',
'Andra sricity Projects',
'Tamilnadu Fishing corporation', 
'Road side construction sites provide', 
'the leading companies contract provides 1000 liters to 6000 liters', 
'Diesel bowser available our fleet badge'
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}
                >
                  <ArrowRightOutlinedIcon
                    sx={{ color: '#85a1ce', mr: 1, mt: '3px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: { lg: 15, md: 14, sm: 15, xs: 14 },
                      color: '#333',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default DieselBowsers;
