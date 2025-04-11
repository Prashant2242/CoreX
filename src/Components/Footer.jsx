import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="pink">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>
    <Typography color="red" variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made By @Prashant Bhatt</Typography>
  </Box>
);

export default Footer;