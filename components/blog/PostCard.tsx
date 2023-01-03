import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import NextLink from 'next/link';

import { ShortPost } from '../../lib/types';
import { TagChips } from './tags/TagChips';

export const PostCard: React.FC<ShortPost> = (post) => {
  return (
    <NextLink href="/blog/[slug]" as={`/blog/${post.slug}`} passHref legacyBehavior>
      <Card component="a" sx={{ border: (theme) => `1px solid ${theme.palette.divider}`, textDecoration: 'none' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
              <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
                {post.postedAt} &mdash; {post.readingTime}
              </Typography>

              <Typography component="div" variant="h4">
                <div dangerouslySetInnerHTML={{ __html: post.titleHTML }} />
              </Typography>

              <TagChips tags={post.tags} />
            </CardContent>
          </Box>

          <CardMedia component="img" image={post.coverImage} sx={{ width: { xs: '100%', sm: 275 } }} />
        </CardActionArea>
      </Card>
    </NextLink>
  );
};
