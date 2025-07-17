import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "./Banner.css";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundColor: "#f4f6f9",
        overflowClipMargin: "content-box",
        overflow: "clip",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="left"
      >
        {/* Left Column: Truck + Mission */}
            <Grid item xs={12} size={{md:4}} >
          <Box
            className="slide-in-left"
            component="img"
            src="/images/Truckbanner.png"
            alt="Truck Banner"
            sx={{
              width: "100%",
              maxHeight: 350,
              objectFit: "contain",
              mb: 2,
            }}
          />
          <Card elevation={3} className="slide-in-left" sx={{ height: "100%", p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#004080", fontWeight: "bold" }}>
                Mission
              </Typography>
              <Typography sx={{ color: "#6683b0", mt: 1, fontSize: 14 }}>
                To revolutionize the transport industry by integrating
                technology and eco-friendly practices for better service and
                sustainability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Center Column: Quote */}
        <Grid item xs={12} size={{md:4}} sx={{ textAlign: "center" }}>

          <Box className="slide-in-top">
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 24, sm: 30, md: 36 },
                fontWeight: "bold",
                color: "#004080",
                mb: 1,
              }}
            >
              KCR TRANSPORT
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16, md: 18 },
                color: "#6683b0",
              }}
            >
              THINK TRANSPORTATION THINK US
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Bus + Vision */}
        <Grid item xs={12} size={{md:4}}>

          <Box
            className="slide-in-right"
            component="img"
            src="/images/busbanner.png"
            alt="Bus Banner"
            sx={{
              width: "100%",
              maxHeight: 350,
              objectFit: "contain",
              mb: 2,
            }}
          />
          <Card elevation={3} className="slide-in-right" sx={{ height: "100%", p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#004080", fontWeight: "bold" }}>
                Vision
              </Typography>
              <Typography sx={{ color: "#6683b0", mt: 1, fontSize: 14 }}>
                To build a brand that stands for timely delivery,
                professionalism, and customer-first service — the future of
                transportation through smart logistics and sustainable digital
                solutions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Banner;
