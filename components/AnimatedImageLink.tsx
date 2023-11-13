import { styled } from '@mui/material';

import { ExternalLink } from './common/ExternalLink';

export const AnimatedImageLink: any = styled(ExternalLink)({
  display: 'flex',
  transition: 'all 0.2s ease-in-out',
  '&:hover, &:focus, &:active': {
    paddingBottom: 12,
    paddingTop: 4,
  },
  padding: 8,
});
