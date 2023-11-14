import { LinkProps } from '@mui/material';

import { ExternalLink } from './common/ExternalLink';

export function AnimatedImageLink(props: LinkProps) {
  return (
    <ExternalLink
      {...props}
      sx={{
        display: 'flex',
        transition: 'all 0.2s ease-in-out',
        '&:hover, &:focus, &:active': {
          paddingBottom: 1.5,
          paddingTop: 0.5,
        },
        padding: 1,
      }}
    />
  );
}
