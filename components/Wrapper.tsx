import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { Color } from '../lib/colors';
import richard from '../public/images/richard.webp';
import { AnimatedImageLink } from './AnimatedImageLink';
import { ExternalLink } from './common/ExternalLink';
import { NextLink } from './common/NextLink';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', justifyContent: 'space-between' }}>
      <Box>
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
              <NextLink
                href="/"
                sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: Color.PurpleLight }}
              >
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

        <Container maxWidth="md">{children}</Container>
      </Box>

      <Container maxWidth="md" sx={{ pt: 4, pb: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="caption">
              <span>&copy; {new Date().getFullYear()} Richard Solomou</span>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="caption"
              sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-end' } }}
            >
              <ExternalLink href="/linkedin" color="secondary">
                LinkedIn
              </ExternalLink>

              <ExternalLink href="/github" color="secondary">
                GitHub
              </ExternalLink>

              <ExternalLink href="/twitter" color="secondary">
                Twitter
              </ExternalLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
