import { styled } from '@mui/material';

import { ExternalLink } from './common/ExternalLink';

export const AnimatedImageLink: any = styled(ExternalLink)({
  display: 'flex',
  transition: '0.1s transform',
  '&:hover, &:focus, &:active': { transform: 'scale(1.1)' },
  padding: '8px',
});
