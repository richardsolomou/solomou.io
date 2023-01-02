import { Box, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { Wrapper } from '../../components/Wrapper';
import { PostCards } from '../../components/blog/PostCards';
import { PostInterface, getAllPosts } from '../../lib/posts';

/**
 * Get all posts
 * @returns posts
 */
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const BlogPage: NextPage<{ posts: PostInterface[] }> = ({ posts }) => {
  return (
    <Wrapper title="Blog - Richard Solomou">
      <Box sx={{ py: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Blog
        </Typography>

        <PostCards posts={posts} />
      </Box>
    </Wrapper>
  );
};

export default BlogPage;
