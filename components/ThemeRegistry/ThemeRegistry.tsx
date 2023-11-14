'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { theme } from '../../lib/theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
