import { Box, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Wrapper } from '../../components/Wrapper';
import { PostCards } from '../../components/blog/PostCards';
import { BlogUtils } from '../../lib/BlogUtils';
import { ShortPost } from '../../lib/types';

/**
 * Get all posts
 * @returns posts
 */
export const getStaticProps: GetStaticProps = async () => {
  const posts = await BlogUtils.getPosts();
  return { props: { posts } };
};

const BlogPage: NextPage<{ posts: ShortPost[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Richard Solomou</title>
      </Head>

      <Wrapper>
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Blog
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            On this blog, you&apos;ll find a mix of my insights and experiences as a software developer, as well as
            in-depth tutorials on how to use various tools and services.
          </Typography>

          <PostCards posts={posts} />
        </Box>
      </Wrapper>
    </>
  );
};

export default BlogPage;
