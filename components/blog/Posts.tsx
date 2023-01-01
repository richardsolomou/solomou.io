import { Box } from '@mui/material';
import React from 'react';

import { PostInterface } from '../../lib/posts';
import { Post } from './Post';

export const Posts: React.FC<{ posts: PostInterface[] }> = ({ posts }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, sm: 2 } }}>
      {posts.map((post) => (
        <Post key={post.slug} {...post} />
      ))}
    </Box>
  );
};
