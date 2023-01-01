import { Chip } from '@mui/material';
import NextLink from 'next/link';

import { TagInterface } from '../../../lib/tags';

export const Tag: React.FC<TagInterface> = (tag) => {
  return (
    <NextLink href="/blog/tags/[slug]" as={`/blog/tags/${tag.slug}`} passHref legacyBehavior>
      <Chip key={tag.slug} size="small" label={tag.title} sx={{ mr: 0.5, mt: 0.5 }} clickable />
    </NextLink>
  );
};
