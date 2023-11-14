import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

import { theme } from '../lib/theme';

/**
 * Layout wrapper component
 * @param children
 */
export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
