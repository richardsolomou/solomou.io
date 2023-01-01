import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import NextLink from 'next/link';

import { PostInterface } from '../../lib/posts';
import { Tags } from './tags/Tags';

export const Post: React.FC<PostInterface> = (post) => {
  return (
    <NextLink href="/blog/[slug]" as={`/blog/${post.slug}`} passHref legacyBehavior>
      <Card component="a" sx={{ border: (theme) => `1px solid ${theme.palette.divider}`, textDecoration: 'none' }}>
        <CardActionArea sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
              <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
                {dayjs(post.publishedAt).format('MMMM D, YYYY')} &mdash; {post.readingTime}
              </Typography>

              <Typography component="div" variant="h4">
                {post.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {post.excerpt}
              </Typography>

              <Tags tags={post.tagObjects} />
            </CardContent>
          </Box>

          <CardMedia component="img" image={post.image} sx={{ width: { xs: '100%', sm: 300 } }} />
        </CardActionArea>
      </Card>
    </NextLink>
  );
};
