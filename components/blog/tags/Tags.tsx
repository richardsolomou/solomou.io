import { Box } from '@mui/material';
import React from 'react';

import { TagInterface } from '../../../lib/tags';
import { Tag } from './Tag';

export const Tags: React.FC<{ tags: TagInterface[] }> = ({ tags }) => {
  return (
    <Box sx={{ display: 'flex', mt: 1 }}>
      {tags.map((tag) => (
        <Tag key={tag.slug} {...tag} />
      ))}
    </Box>
  );
};
