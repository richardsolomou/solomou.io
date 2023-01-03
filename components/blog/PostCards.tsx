import { Box } from '@mui/material';
import React from 'react';

import { ShortPost } from '../../lib/types';
import { PostCard } from './PostCard';

export const PostCards: React.FC<{ posts: ShortPost[] }> = ({ posts }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, sm: 2 } }}>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </Box>
  );
};
