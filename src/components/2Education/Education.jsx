import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import EducationDesktop from './EducationDesktop';
import EducationMobile from './EducationMobile';

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <EducationMobile /> : <EducationDesktop />;
};

export default Education;