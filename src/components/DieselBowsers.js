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
  fontFamily:"serif",
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
Diesel bowser available our fleet badge</Typography>

            {/* Bullet Points */}
            <Box sx={{ mt: 2,ml:-1 ,}}>
            
<Typography
  sx={{
    mt: 2,
    fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
    color: "#333",
    fontFamily: "Poppins, sans-serif",
    lineHeight: 1.6,
    ml:-1
  }}
>

 <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce",fontFamily: "Poppins, sans-serif"}}  /> Diesel Bowser available 1kl to 6kl</p>

  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}   /> Under the leading companys contract, provisions range from 1,000 to 6,000 liters</p>

   <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> PESO License and calibrated tanks available</p>

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
Service Highlights</Typography>

<Typography
  sx={{
    mt: 2,
    fontSize: { lg: 15, md: 12, sm: 15, xs: 14 },
    color: "#333",
    fontFamily: "Poppins, sans-serif",
    lineHeight: 1.6,
    ml:-1
  }}
>

                 <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce",}}  /> Tamilnadu Fishing corporation</p>

                 <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> New NE-7 Construction sites</p>

                <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> Kanyakumari Trivandrum Highway</p>

</Typography>

            </Box>
          </Paper>
        </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default DieselBowsers;
