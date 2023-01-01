import { ArrowForward } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from '../components/Header';
import { Posts } from '../components/blog/Posts';
import { NextButton } from '../components/common/NextButton';
import { PostInterface, getAllPosts } from '../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().slice(0, 3);
  return { props: { posts } };
};

const IndexPage: NextPage<{ posts: PostInterface[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Richard Solomou</title>
      </Head>

      <Container
        maxWidth="md"
        sx={{ my: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1 0 auto' }}
      >
        <Header />

        {posts.length > 0 && (
          <Box sx={{ pt: 6, pb: 2 }}>
            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Grid item xs={12} sm={7} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h2">Latest Posts</Typography>
              </Grid>

              <Grid item xs={12} sm={5} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                <NextButton href="/blog" endIcon={<ArrowForward />} variant="contained">
                  View All
                </NextButton>
              </Grid>
            </Grid>

            <Posts posts={posts} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default IndexPage;
