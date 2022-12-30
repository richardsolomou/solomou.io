import { Box, BoxProps, LinkProps, lighten } from '@mui/material';
import React from 'react';

import { ExternalLink } from './ExternalLink';

type ExternalLinkWithIconProps = {
  color: string;
  LinkProps: LinkProps;
  BoxProps: BoxProps<'img'>;
  children?: React.ReactNode;
};

export const ExternalLinkWithIcon: React.FC<ExternalLinkWithIconProps> = ({ color, LinkProps, BoxProps, children }) => {
  return (
    <ExternalLink
      {...LinkProps}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        color,
        '&:hover': {
          color: lighten(color, 0.2),
        },
        ...LinkProps.sx,
      }}
    >
      <Box {...BoxProps} component="img" width={30} />
      {children}
    </ExternalLink>
  );
};
