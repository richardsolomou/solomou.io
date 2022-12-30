import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import { ExternalLinkWithIcon } from '../components/ExternalLinkWithIcon';
import { Social } from '../components/Social';
import { Color } from '../lib/colors';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', my: 5 }}>
      <Box sx={{ width: 200, height: 200, display: 'inline-flex', borderRadius: '50%', overflow: 'hidden' }}>
        <Box component="img" src="/images/icons/manifest-icon-512.maskable.png" sx={{ transform: 'scale(1.2)' }} />
      </Box>

      <Box sx={{ my: 3 }}>
        <Typography variant="h1" paragraph>
          Hi, I&apos;m Richard 👋
        </Typography>

        <Typography variant="h3" sx={{ color: Color.Grey }}>
          Full-Stack Engineer &bull; Dungeon Master
        </Typography>
      </Box>

      <Social />

      <Grid container sx={{ mt: 5 }} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography paragraph sx={{ display: 'inline-flex', alignItems: 'center' }}>
            Front-End Engineer at{' '}
            <ExternalLinkWithIcon
              color={Color.Keenious}
              LinkProps={{ href: 'https://keenious.com' }}
              BoxProps={{ src: '/images/positions/keenious.png', sx: { m: 0 } }}
            >
              Keenious
            </ExternalLinkWithIcon>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
