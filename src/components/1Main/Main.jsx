// components/Main.jsx
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import MainDesktop from './MainDesktopv2';
import MainMobile from './MainMobile';

const Main = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <MainMobile /> : <MainDesktop />;
};

export default Main;