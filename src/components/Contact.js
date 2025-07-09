import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import "./Contact.css"
const Contact = () => {
  return (
    <footer id="contact">
      <Box
        sx={{
          background: 'linear-gradient(90deg, #7fe5e4, #dcd5f6);',
         
          //px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 5 },
        }}
      >
        <Grid
          container
          spacing={4}
         justifyContent="space-around"
      
          alignItems="flex-start"
        >
          {/* Logo & Title */}
          <Grid item xs={12}  sx={{ textAlign: {xs:"center"}}}>
            <Box display="flex" alignItems="center">
              <img
                src="/images/logo.svg" // Your logo path
                alt="KCR Logo"
                style={{ height: '50px', width: '40px', marginRight: '12px' }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '1px',color:'#3a1681',
                  
                  fontSize: { xs: '24px', sm: '30px', md: '36px' },
                  textTransform: 'uppercase',
                }}
              >
                KCR TRANSPORT
              </Typography>
            </Box>
          </Grid>

          {/* Head Office */}
          <Grid item xs={12} md={12}  sx={{ textAlign: {xs:"center"}}}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1,color:'#3a1681' }}>
              Head Office:
            </Typography>
            <Typography>33B Sithi Vinayagar Koil Street</Typography>
            <Typography>Arcot Ranipet Dist. 632503</Typography>
          </Grid>
          

          {/* Branch Office */}
          <Grid item xs={12} md={12} sx={{ textAlign: {xs:"center"}}}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1,color:'#3a1681'  }}>
              Branch Office:
            </Typography>
            <Typography>256 3rd cross, near Prasath Studio</Typography>
            <Typography>Saligramam, Chennai - 93</Typography>
            <Typography>9444661308</Typography>
          </Grid>

          {/* Maintenance Workplace */}
          <Grid item xs={12} md={12} sx={{ textAlign: {xs:"center"}}}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1,color:'#3a1681'  }}>
              Maintenance Workplace:
            </Typography>
            <Typography>New Byepass Road</Typography>
            <Typography>Inside LKM parking yard</Typography>
            <Typography>Vellore - Vellore Dist</Typography>
            <Typography>9994184625</Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4} sx={{ textAlign: {xs:"center"}}}>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>

            Copyright © 2025 KCR TRANSPORT 


          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Contact;
