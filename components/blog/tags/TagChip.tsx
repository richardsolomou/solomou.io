import { Chip } from '@mui/material';
import { darken } from '@mui/material/styles';
import NextLink from 'next/link';

import { TagUtils } from '../../../lib/TagUtils';
import { Tag } from '../../../lib/types';

export const TagChip: React.FC<Tag> = (tag) => {
  return (
    <NextLink href="/blog/tags/[slug]" as={`/blog/tags/${tag.slug}`} passHref legacyBehavior>
      <Chip
        key={tag.slug}
        size="small"
        label={tag.title}
        clickable
        sx={{
          mr: 0.5,
          mt: 0.5,
          background: tag.color,
          color: TagUtils.getContrastingTextColor(tag.color),
          '&:hover': {
            background: darken(tag.color, 0.1),
          },
        }}
      />
    </NextLink>
  );
};
