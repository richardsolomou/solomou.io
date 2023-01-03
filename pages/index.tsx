import { ArrowForward } from '@mui/icons-material';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { chipClasses } from '@mui/material/Chip';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { AnimatedImageLink } from '../components/AnimatedImageLink';
import { PostCards } from '../components/blog/PostCards';
import { NextButton } from '../components/common/NextButton';
import { Color } from '../lib/colors';
import { PostInterface, getAllPosts } from '../lib/posts';
import alliantsLogo from '../public/images/positions/alliants.svg';
import feefoLogo from '../public/images/positions/feefo.svg';
import keeniousLogo from '../public/images/positions/keenious.svg';
import overflowLogo from '../public/images/positions/overflow.svg';
import protoioLogo from '../public/images/positions/protoio.svg';
import richard from '../public/images/richard.webp';

/**
 * Get the latest 3 posts
 * @returns posts
 */
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
        <Grid container spacing={1} alignItems="center" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          {/* Intro */}
          <Grid item xs={12} sm={9} order={{ xs: 1, sm: 0 }}>
            <Box>
              <Typography variant="h1" paragraph>
                Hi, I&apos;m Richard 👋
              </Typography>

              <Typography variant="h3" sx={{ color: Color.PurpleLight }}>
                I&apos;m a Full-Stack Developer with a passion for creating user-friendly and intuitive web
                applications.
              </Typography>
            </Box>
          </Grid>

          {/* Avatar */}
          <Grid item xs={12} sm={3} order={{ xs: 0, sm: 1 }} sx={{ textAlign: 'center' }}>
            <Image src={richard} alt="Richard Solomou" height={150} />
          </Grid>

          {/* Positions */}
          <Grid item xs={12} sm={9} order={2}>
            <Box sx={{ pt: 3 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'inherit' }, pb: 1 }}
              >
                <Chip
                  sx={{
                    background: Color.Keenious,
                    height: 'auto',
                    [`& .${chipClasses.label}`]: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    },
                  }}
                  label={
                    <>
                      <Typography variant="body2">Full-Stack Engineer at</Typography>

                      <AnimatedImageLink href="https://keenious.com">
                        <Image src={keeniousLogo} alt="Keenious" height={20} style={{ marginBottom: 6 }} />
                      </AnimatedImageLink>
                    </>
                  }
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', sm: 'inherit' },
                  flexWrap: 'wrap',
                }}
              >
                <Box component="span" sx={{ mr: 0.5 }}>
                  Previously
                </Box>

                <AnimatedImageLink href="https://overflow.io">
                  <Image src={overflowLogo} alt="Overflow" height={15} />
                </AnimatedImageLink>

                <AnimatedImageLink href="https://proto.io">
                  <Image src={protoioLogo} alt="Proto.io" height={15} />
                </AnimatedImageLink>

                <AnimatedImageLink href="https://alliants.com">
                  <Image src={alliantsLogo} alt="Alliants" height={20} style={{ marginBottom: 10 }} />
                </AnimatedImageLink>

                <AnimatedImageLink href="https://feefo.com">
                  <Image src={feefoLogo} alt="Feefo" height={15} style={{ marginBottom: 5 }} />
                </AnimatedImageLink>
              </Typography>
            </Box>
          </Grid>

          {/* Social */}
          <Grid item xs={12} sm={3} order={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', py: 1 }}>
              <AnimatedImageLink href="/linkedin">
                <Image src="/images/social/linkedin.png" width={38} height={38} alt="LinkedIn" />
              </AnimatedImageLink>
              <AnimatedImageLink href="/github">
                <Image src="/images/social/github.png" width={38} height={38} alt="GitHub" />
              </AnimatedImageLink>
              <AnimatedImageLink href="/twitter">
                <Image src="/images/social/twitter.png" width={38} height={38} alt="Twitter" />
              </AnimatedImageLink>
            </Box>
          </Grid>
        </Grid>

        {posts.length > 0 && (
          <Box sx={{ pt: 6, pb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={7} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h2">Latest Posts</Typography>
              </Grid>

              <Grid item xs={12} sm={5} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                <NextButton href="/blog" endIcon={<ArrowForward />} color="inherit">
                  View All
                </NextButton>
              </Grid>
            </Grid>

            <Typography sx={{ mt: 1, mb: 2 }}>
              On this blog, you&apos;ll find a mix of my insights and experiences as a software developer, as well as
              in-depth tutorials on how to use various tools and services.
            </Typography>

            <PostCards posts={posts} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default IndexPage;
