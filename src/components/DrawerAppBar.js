import * as React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Scrollspy from 'react-scrollspy';
import CloseIcon from '@mui/icons-material/Close';

import './DrawerAppBar.css';

const drawerWidth = '70vw';

const navItems = [
  { label: 'Buses', href: '#buses' },
  { label: 'Cargo', href: '#cargo' },
  { label: 'Tippers', href: '#tippers' },
  { label: 'Diesel Bowsers', href: '#dieselbowsers' },
  { label: 'Contact', href: '#contact' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(90deg, #7fe5e4, #dcd5f6)',
        height: '100%',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: 'Poppins, sans-serif',
          color: '#3a1681',
          fontWeight: 800,
        }}
      >
        KCR TRANSPORT
      </Typography>
      <Divider />
     <List>
  {navItems.map((item, index) => (
    <React.Fragment key={item.label}>
      <ListItem disablePadding>
        <ListItemButton
          href={item.href}
          sx={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            color: '#3a1681',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              background: 'linear-gradient(90deg, #dcd5f6, #7fe5e4)',
              color: '#6715e3',
              transform: 'scale(1.05)',
            },
          }}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>

      {/* Inject Email and WhatsApp just after 'Contact' */}
      {item.label === 'Contact' && (
        <Box
          sx={{
            mt: 2,
            mb: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <a
            href="mailto:kcrtransport@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              color: '#3a1681',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            <EmailOutlinedIcon sx={{ fontSize: 20 }} />
            <span>kcrtransport@gmail.com</span>
          </a>
          <a
            href="https://wa.me/919944651308"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              color: '#3a1681',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            <span>9944651308</span>
          </a>
        </Box>
      )}
    </React.Fragment>
  ))}
</List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: 'linear-gradient(90deg, #7fe5e4, #dcd5f6)',
          color: '#3a1681',
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
            minHeight: { xs: 64, sm: 80 },
          }}
        >
          {/* Left Section: Logo and Title */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              py: { xs: 1.5, sm: 2 },
            }}
          >
            <Box
              component="img"
              src="/images/logo.svg"
              alt="KCR Logo"
              sx={{
                height: { xs: 50, sm: 60 },
                width: { xs: 40, sm: 50 },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                letterSpacing: '1px',
                fontSize: { xs: '24px', sm: '30px', md: '36px' },
                textTransform: 'uppercase',
              }}
            >
              KCR TRANSPORT
            </Typography>
          </Box>

          {/* Hamburger Icon */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label={mobileOpen ? 'close drawer' : 'open drawer'}
              sx={{ p: 1 }}
            >
              {mobileOpen ? (
                <CloseIcon sx={{ fontSize: 30 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 30 }} />
              )}
            </IconButton>
          </Box>

          {/* Desktop Nav Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Scrollspy
              items={['buses', 'cargo', 'tippers', 'dieselbowsers', 'contact']}
              currentClassName="active-link"
              componentTag="div"
              style={{ display: 'flex', gap: '24px' }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  className="nav-button"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#3a1681',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                   
                    
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Scrollspy>
          </Box>

          {/* Contact Info (desktop) */}
          <Box className="contact-icons">
            <a href="mailto:kcrtransport@gmail.com" className="contact-link">
              <EmailOutlinedIcon sx={{ fontSize: 22, color: "#7681B3" }} />
              <span className="contact-text">kcrtransport@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919944651308"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <WhatsAppIcon sx={{ fontSize: 22, color: "#7681B3" }} />
              <span className="contact-text">9944651308</span>
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile Only) */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              height: '100vh',
              background: 'linear-gradient(90deg, #7fe5e4, #dcd5f6)',
              boxSizing: 'border-box',
            },
            '& .MuiBackdrop-root': {
              background: 'rgba(127, 229, 228, 0.2)',
            },
          }}
        >
          
          {drawer}
         
          
        </Drawer>
      </Box>

      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
