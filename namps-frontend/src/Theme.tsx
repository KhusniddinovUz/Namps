import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, serif',
    allVariants: {
      color: '#000',
      paddingLeft: '5px',
    },
  },
  palette: {
    text: {
      primary: '#000',
    },
    primary: {
      main: '#fff',
      dark: '#fff',
      light: '#fff',
    },
    secondary: {
      main: '#f44336',
      dark: '#ff7961',
      light: '#ba000d',
    },
  },
});

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
