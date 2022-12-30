import { createTheme, filledInputClasses, responsiveFontSizes } from '@mui/material';
import { Raleway } from '@next/font/google';

import { Color } from './colors';

const raleway = Raleway({ subsets: ['latin'] });

export let theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: Color.Black },
    secondary: { main: Color.Purple },
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
  },
  components: {
    // Global
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        followCursor: true,
      },
      styleOverrides: {
        tooltip: {
          fontWeight: 500,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          transform: 'scale(1)',
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
    // Navigation
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '80px !important',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          flexShrink: 0,
        },
        paper: {
          borderRadius: 0,
          boxSizing: 'border-box',
        },
      },
    },
    // Forms
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '90px',
          boxShadow: 'none !important',
        },
        sizeMedium: {
          padding: '12px 20px',
        },
        sizeLarge: {
          padding: '18px 40px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px !important',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
      styleOverrides: {
        root: {
          [`& .${filledInputClasses.root}`]: {
            '&::before, &::after': {
              border: 'none !important',
            },
          },
        },
      },
    },
    // Accordion
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0,
        square: true,
      },
      styleOverrides: {
        root: {
          border: `1px solid rgba(255, 255, 255, 0.12)`,
          '&:before': {
            display: 'none',
          },
          boxShadow: 'none',
          background: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: '10px 10px',
          '&.Mui-expanded': {
            borderRadius: '10px 10px 0 0',
          },
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
          borderTop: '1px solid rgba(0, 0, 0, 0.125)',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
