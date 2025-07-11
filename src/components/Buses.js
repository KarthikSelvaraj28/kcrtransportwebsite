import { Box, Grid, Typography, Paper } from "@mui/material";
//import "./Buses.css"; 
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Buses = () => {
  return (
    
    <section id="buses" >
    <h1 style={{
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "#3a1681",
  fontFamily: "Poppins, sans-serif",
  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  
  marginBottom: "0.5rem"
}}>
  Buses
</h1>


      <Grid
        container
        spacing={3}
        sx={{
          background:
            "linear-gradient(to top, rgba(72, 183, 214, 0.35) 0%, rgba(255, 255, 255, 1) 100%)",
          p: 3,
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 5, sm: 5 },
              borderRadius: 2,
               height:"100%",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(225, 212, 212, 0.1)",
            }}
          >
            <Typography
  variant="h3"
  component="h4"
  sx={{
    fontSize: { lg: 20, md: 20, sm: 24, xs: 20 },
    fontWeight: "bold",
    color: "#3a1681",
    fontFamily: "Poppins, sans-serif",
  }}
>
  PUBLIC  TRANSPORT
  
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
 
    Andhra to Telangana: 3 Designated Routes Operated by Leading Brands
 
</Typography>

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
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> Andhra to Telangana: 3 designated routes run by top operators</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}} /> Tamil Nadu: 5 new routes launching soon</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}} /> Leading operators contracted for 3 routes</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}} /> Own operations: 2 upcoming routes</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon  sx={{color:"#85a1ce"}}/> Vellore to Tiruchendur – launching soon</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}} /> Vellore to Nagapattinam – launching soon</p>
  
</Typography>

          </Paper>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
        
           textAlign:"center"
          }}
           
        >
          <Box
            component="img"
            src="/images/Publicbus.png"
            alt="Bus"
          
            sx={{
             width: {
              xs:"100%",
              lg:"auto"
             },
              height: "auto",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{
          background:
            "linear-gradient(to bottom, rgba(72, 183, 214, 0.35) 0%, rgba(255, 255, 255, 1) 100%)",
          p: 5,
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
          sx={{
           textAlign:"center",
          }}
        >
          <Box
            component="img"
            src="/images/staffbus.png"
            alt="Staff Bus"
            sx={{
              width: {xs:"100%",md:"90%",xl:"auto"},
        height: 'auto',
        objectFit: 'cover',
             
            }}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 5, sm: 5 },
              height:"100%",
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(225, 212, 212, 0.1)",
            }}
          >


            <Typography
  variant="h3"
  component="h4"
  sx={{
    fontSize: { lg: 20, md: 20, sm: 24, xs: 20 },
    fontWeight: "bold",
    color: "#3a1681",
    fontFamily: "Poppins, sans-serif",
  }}
>
  STAFF BUS TRANSPORTATION 
  
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


    12 to 45 Seater Vehicles for Corporate Transport

</Typography>

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

  
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> 12 to 45 seater staff buses available for leading companies</p>
    <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  />Client details available below</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> Neat & clean buses with well-maintained interiors</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> Punctual service with GPS tracking in every vehicle</p>
  <p style={{display:"flex"}}><ArrowRightOutlinedIcon sx={{color:"#85a1ce"}}  /> 24/7 operations with trained support personnel</p>

</Typography>

          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Buses;
