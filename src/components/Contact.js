import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact">
      <Box
        sx={{
          background: 'linear-gradient(90deg, #7fe5e4, #dcd5f6)',
          py: { xs: 4, sm: 5 },
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="flex-start"
        >
          {/* Logo, Title & Since */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <img
                  src="/images/logo.svg"
                  alt="KCR Logo"
                  style={{ height: '60px', width: '50px', marginRight: '12px' }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'serif',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: '#3a1681',
                    fontSize: { xs: '24px', sm: '30px', md: '36px' },
                    textTransform: 'uppercase',
                  }}
                >
                  KCR TRANSPORT
                </Typography>
              </Box>

              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily:'sans-serif',
                  fontWeight: 500,
                  color: '#3a1681',
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  letterSpacing: '0.5px',
                }}
              >
                SINCE 2007
              </Typography>
            </Box>
          </Grid>

          {/* Head Office */}
          <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#3a1681' }}>
              Head Office:
            </Typography>
            <Typography>33B Sithi Vinayagar Koil Street</Typography>
            <Typography>Arcot Ranipet Dist. 632503</Typography>
          </Grid>

          {/* Branch Office */}
          <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#3a1681' }}>
              Branch Office:
            </Typography>
            <Typography>256 3rd cross, near Prasath Studio</Typography>
            <Typography>Saligramam, Chennai - 93</Typography>
            <Typography>9444661308</Typography>
          </Grid>

          {/* Maintenance Workplace */}
          <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#3a1681' }}>
              Maintenance Workplace:
            </Typography>
            <Typography>New Byepass Road</Typography>
            <Typography>Inside LKM parking yard</Typography>
            <Typography>Vellore - Vellore Dist</Typography>
            <Typography>9994184625</Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            Copyright © 2025 KCR TRANSPORT
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Contact;
