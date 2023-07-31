import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
// Typography for p or headers, just a text element with additonal styles.
import banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, mt: { sm: "50px" } }}
      position="relative"
      p={20}
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        mt={4}
      >
        Exercise
      </Typography>
      <img src={banner} alt="main-img" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;