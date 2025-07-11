import { Box, Grid, Typography } from "@mui/material";
import  "./Banner.css";
const Banner = () => {
  return (
    <section id="Banner" className="banner-section">
        
        <Grid container spacing={{ xs: 1, md: 3 }} justifyContent={"center"} alignItems="center"  >
          <Grid size={{ xs: 12,  md: 4 }} justifyContent={"center"}>
            <Typography sx={{fontSize: {
      lg: 35,
      md: 30,
      sm: 20,
      xs: 20
    }}}  variant="h3" component="h4">
<strong>KCR TRANSPORT</strong><br />
<span style={{fontStyle:"italic",color:"#6683b0",fontSize:"0.7em"}}>
THINK TRANSPORTATION THINK US</span>
            </Typography>

          </Grid>
          <Grid size={{ xs: 12,  md: 8 }} sx={{ textAlign:"center"}}   >
<Box
  component="img"
  src="/images/bannerbus.png"
  alt="KCR Logo"
  sx={{
   
    height: 'auto', // maintain aspect ratio
    maxWidth: '100%'
  }}
     />
          </Grid>
        </Grid>
  
      
      
    </section>
  );
};

export default Banner;
