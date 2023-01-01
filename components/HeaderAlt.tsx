import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { Color } from '../lib/colors';
import richard from '../public/images/richard.webp';
import { AnimatedImageLink } from './AnimatedImageLink';
import { NextLink } from './common/NextLink';

export const HeaderAlt: React.FC = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: 0, background: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{
            py: { xs: 2, sm: 2 },
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'space-between' },
          }}
        >
          {/* Avatar */}
          <NextLink href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: Color.Grey }}>
            <Image src={richard} alt="Richard Solomou" height={50} />

            <Typography variant="h3" sx={{ ml: 2 }}>
              Richard Solomou
            </Typography>
          </NextLink>

          {/* Social */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              pt: { xs: 1, sm: 0 },
            }}
          >
            <AnimatedImageLink href="/linkedin">
              <Image src="/images/social/linkedin.png" width={24} height={24} alt="LinkedIn" />
            </AnimatedImageLink>
            <AnimatedImageLink href="/github">
              <Image src="/images/social/github.png" width={24} height={24} alt="GitHub" />
            </AnimatedImageLink>
            <AnimatedImageLink href="/twitter">
              <Image src="/images/social/twitter.png" width={24} height={24} alt="Twitter" />
            </AnimatedImageLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
