import { Box } from '@mui/material';
import React from 'react';

import { TagInterface } from '../../../lib/tags';
import { TagChip } from './TagChip';

export const TagChips: React.FC<{ tags: TagInterface[] }> = ({ tags }) => {
  return (
    <Box sx={{ display: 'flex', mt: 1 }}>
      {tags.map((tag) => (
        <TagChip key={tag.slug} {...tag} />
      ))}
    </Box>
  );
};
