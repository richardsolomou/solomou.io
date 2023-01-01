import { Box, Container, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { HeaderAlt } from '../../components/HeaderAlt';
import { Posts } from '../../components/blog/Posts';
import { PostInterface, getAllPosts } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const BlogPage: NextPage<{ posts: PostInterface[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Richard Solomou</title>
      </Head>

      <HeaderAlt />

      <Container maxWidth="md">
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Blog
          </Typography>

          <Posts posts={posts} />
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
