import { CssBaseline, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
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

      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
