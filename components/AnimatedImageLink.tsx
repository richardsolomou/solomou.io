import { styled } from '@mui/material/styles';

import { ExternalLink } from './common/ExternalLink';

export const AnimatedImageLink = styled(ExternalLink)({
  display: 'flex',
  transition: '0.1s transform',
  '&:hover, &:focus, &:active': { transform: 'scale(1.1)' },
  padding: '8px',
});
