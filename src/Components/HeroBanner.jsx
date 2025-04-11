import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/fitness.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '90vh', display: 'flex', alignItems: 'center', marginBottom:{lg:'120px', xs:'15px'} }}>
      {/* Left Content */}
      <Box sx={{ flex: 1, paddingLeft: '150px', zIndex: 2 }}>
        <Typography color="green" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="10px" mt="10px">
          Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="30px" mb={3}>
          Check out the most effective exercises
        </Typography>

        <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: 'red', padding: '8px 16px' }}>
          Explore Exercises
        </Button>

        {/* Large "Exercise" Text in Background */}
        <Typography
          fontWeight={600}
          color="red"
          sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none' },
            fontSize: '180px',
            position: 'absolute',
            top: '100px',
            left: '130px',
            zIndex: 1,
            whiteSpace: 'nowrap',
            marginTop:"350px", 
          
          }}
        >
          Exercise
        </Typography>
      </Box>

      {/* Right Image */}
      <Box sx={{ flex: 1, position: 'relative'}} >
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
      </Box>
    </Box>
  );
};

export default HeroBanner;





