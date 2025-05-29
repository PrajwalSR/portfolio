import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const MainMobile = () => {
  return (
    <Box sx={{ bgcolor: '#111' }}>
      
      <Card sx={{ bgcolor: '#111', boxShadow: 'none' }}>
        <CardContent>
        <Box sx={{ color: 'white' }}>
  <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
    Prajwal
  </Typography>
  <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
    Shanthakumari Rangaswamy
  </Typography>
  <Typography variant="body1" align="center" gutterBottom>
    A certified Product and Project Manager with a strong foundation in engineering and business strategy.
  </Typography>

  <Typography variant="h6" fontWeight="bold" mt={3} align="center" gutterBottom>
    My Passion
  </Typography>
  <Typography variant="body2" align="center">
    Building purposeful digital products that simplify complexity and create lasting impact.
  </Typography>
</Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 4,
              flexWrap: 'wrap'
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/PMP.png`} alt="PMP" height={64} />
            <img src={`${process.env.PUBLIC_URL}/PL.png`} alt="PL" height={64} />
            <img src={`${process.env.PUBLIC_URL}/CSPO.png`} alt="CSPO" height={64} />
            <img src={`${process.env.PUBLIC_URL}/PMB.png`} alt="PMB" height={64} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MainMobile;