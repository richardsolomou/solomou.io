import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Chip, Container, Tooltip, Typography } from '@mui/material';
import { chipClasses } from '@mui/material/Chip';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { AnimatedImageLink } from '../components/AnimatedImageLink';
import { Medium } from '../components/icons/Medium';
import { X } from '../components/icons/X';
import { Color, Gradient } from '../lib/colors';
import alliantsLogo from '../public/images/positions/alliants.svg';
import feefoLogo from '../public/images/positions/feefo.svg';
import keeniousLogo from '../public/images/positions/keenious.svg';
import overflowLogo from '../public/images/positions/overflow.svg';
import protoioLogo from '../public/images/positions/protoio.svg';
import richard from '../public/images/richard-rounded.png';

const IndexPage: NextPage = () => {
  return (
    <Box
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', background: Gradient.Linear }}
    >
      <Container
        maxWidth="md"
        sx={{
          my: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 0 auto',
          textAlign: 'center',
        }}
      >
        {/* Avatar */}
        <Image src={richard} alt="Richard Solomou" height={200} />

        {/* Intro */}
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" paragraph>
            Hi, I&apos;m Richard 👋
          </Typography>

          <Typography variant="h3" sx={{ color: Color.PurpleLight }}>
            I&apos;m a Full-Stack Engineer 👨‍💻, husky parent 🐶, and coffee lover ☕️.
          </Typography>
        </Box>

        {/* Positions */}
        <Box
          sx={{
            pt: 4,
            pb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Chip
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://keenious.com"
            clickable
            sx={{
              background: `${Color.Keenious} !important`,
              height: 'auto',
              display: 'flex',
              transition: 'all 0.2s ease-in-out',
              p: 1,
              borderRadius: 90,
              '&:hover, &:focus, &:active': { px: 2 },
              [`& .${chipClasses.label}`]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pt: '2px',
              },
            }}
            label={
              <>
                <Typography variant="body2">Technical Lead at</Typography>

                <Image src={keeniousLogo} alt="Keenious" height={20} style={{ marginLeft: 6, marginBottom: 8 }} />
              </>
            }
          />

          <Chip
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tarrasque.io"
            clickable
            sx={{
              background: `${Color.BrownLight} !important`,
              color: `${Color.White} !important`,
              display: 'flex',
              transition: 'all 0.2s ease-in-out',
              p: 1,
              borderRadius: 90,
              '&:hover, &:focus, &:active': { px: 2 },
              [`& .${chipClasses.label}`]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pt: '2px',
              },
            }}
            label={
              <>
                <Typography variant="body2">
                  Creator of <strong>Tarrasque.io</strong>
                </Typography>
              </>
            }
          />

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'inherit' },
              flexWrap: 'wrap',
            }}
          >
            <Box component="span" sx={{ mr: 0.5 }}>
              Previously
            </Box>

            <AnimatedImageLink href="https://overflow.io">
              <Image src={overflowLogo} alt="Overflow" height={15} />
            </AnimatedImageLink>

            <AnimatedImageLink href="https://proto.io">
              <Image src={protoioLogo} alt="Proto.io" height={15} />
            </AnimatedImageLink>

            <AnimatedImageLink href="https://alliants.com">
              <Image src={alliantsLogo} alt="Alliants" height={20} style={{ marginBottom: 10 }} />
            </AnimatedImageLink>

            <AnimatedImageLink href="https://feefo.com">
              <Image src={feefoLogo} alt="Feefo" height={15} style={{ marginBottom: 5 }} />
            </AnimatedImageLink>
          </Typography>
        </Box>

        {/* Social */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', py: 1 }}>
          <Tooltip title="LinkedIn">
            <AnimatedImageLink href="/linkedin">
              <LinkedIn fontSize="large" htmlColor={Color.White} />
            </AnimatedImageLink>
          </Tooltip>

          <Tooltip title="GitHub">
            <AnimatedImageLink href="/github">
              <GitHub fontSize="large" htmlColor={Color.White} />
            </AnimatedImageLink>
          </Tooltip>

          <Tooltip title="X/Twitter">
            <AnimatedImageLink href="/x">
              <X fontSize="large" htmlColor={Color.White} />
            </AnimatedImageLink>
          </Tooltip>

          <Tooltip title="Instagram">
            <AnimatedImageLink href="/instagram">
              <Instagram fontSize="large" htmlColor={Color.White} />
            </AnimatedImageLink>
          </Tooltip>

          <Tooltip title="Medium">
            <AnimatedImageLink href="https://blog.solomou.io">
              <Medium fontSize="large" htmlColor={Color.White} />
            </AnimatedImageLink>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};

export default IndexPage;
