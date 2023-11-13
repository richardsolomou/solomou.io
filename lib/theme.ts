import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Raleway } from 'next/font/google';

import { Color, Gradient } from './colors';

const raleway = Raleway({ subsets: ['latin'] });

export let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: Color.Purple },
    secondary: { main: Color.Keenious },
    background: { default: Color.Black, paper: Gradient.Linear },
    error: { main: Color.Red },
    warning: { main: Color.Orange },
    info: { main: Color.Blue },
    success: { main: Color.Green },
  },
  typography: {
    fontSize: 16,
    fontFamily: raleway.style.fontFamily,
    h1: { fontFamily: raleway.style.fontFamily, fontSize: 48, fontWeight: 400 },
    h2: { fontFamily: raleway.style.fontFamily, fontSize: 38 },
    h3: { fontFamily: raleway.style.fontFamily, fontSize: 24 },
    h4: { fontFamily: raleway.style.fontFamily, fontSize: 20 },
    h5: { fontFamily: raleway.style.fontFamily, fontSize: 18 },
    h6: { fontFamily: raleway.style.fontFamily, fontSize: 16 },
    caption: { color: Color.Grey },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '90px',
          boxShadow: 'none !important',
          textTransform: 'none',
        },
        sizeMedium: {
          padding: '6px 14px',
        },
        sizeLarge: {
          padding: '8px 16px',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
