import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Wrapper } from '../../../components/Wrapper';
import { PostCards } from '../../../components/blog/PostCards';
import { BlogUtils } from '../../../lib/BlogUtils';
import { ShortPost, Tag } from '../../../lib/types';

/**
 * Generate the paths for all the available tags
 * @returns tag paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await BlogUtils.getTags();
  const paths = tags.map((tag) => ({ params: { slug: tag.slug } }));
  return { paths, fallback: false };
};

/**
 * Get the tag and posts for the tag
 * @param params - slug
 * @returns tag and posts
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const tags = await BlogUtils.getTags();
  const tag = tags.find((tag) => tag.slug === slug);
  const posts = await BlogUtils.getPostsByTag(tag);
  return { props: { tag, posts } };
};

const TagPage: NextPage<{ tag: Tag; posts: ShortPost[] }> = ({ tag, posts }) => {
  const title = `Posts tagged with "${tag.title}" - Blog - Richard Solomou`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Wrapper>
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Posts tagged with &quot;{tag.title}&quot;
          </Typography>

          <PostCards posts={posts} />
        </Box>
      </Wrapper>
    </>
  );
};

export default TagPage;
