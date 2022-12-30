import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { Color } from '../lib/colors';

export const Social: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',

        '& img': {
          m: 1.5,
          transition: '0.1s transform',

          '&:hover, &:focus, &:active': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Tooltip title="LinkedIn">
        <a href="/linkedin" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/social/linkedin.png"
            width={64}
            height={64}
            alt="LinkedIn"
            style={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${Color.LinkedIn}) saturate(500%)` }}
          />
        </a>
      </Tooltip>

      <Tooltip title="GitHub">
        <a href="/github" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/social/github.png"
            width={64}
            height={64}
            alt="GitHub"
            style={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${Color.GitHub}) saturate(500%)` }}
          />
        </a>
      </Tooltip>

      <Tooltip title="Email">
        <a href="mailto:richard@solomou.io">
          <Image
            src="/images/social/gmail.png"
            width={64}
            height={64}
            alt="Email"
            style={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${Color.Gmail}) saturate(500%)` }}
          />
        </a>
      </Tooltip>

      <Tooltip title="CV">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/social/cv.png"
            width={64}
            height={64}
            alt="CV"
            style={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${Color.CV}) saturate(500%)` }}
          />
        </a>
      </Tooltip>
    </Box>
  );
};
