import { Box, Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { HeaderAlt } from '../../../components/HeaderAlt';
import { Posts } from '../../../components/blog/Posts';
import { PostInterface, getAllPosts } from '../../../lib/posts';
import { TagInterface, getAllTags, getTagFromSlug } from '../../../lib/tags';

/**
 * Generate the paths for all the available tags
 * @returns tag paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllTags().map((tag) => tag.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

/**
 * Get the tag and posts for the tag
 * @param params - slug
 * @returns tag and posts
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const tag = getTagFromSlug(slug);
  const posts = getAllPosts().filter((post) => post.tags.includes(tag.title));
  return { props: { tag, posts } };
};

const TagPage: NextPage<{ tag: TagInterface; posts: PostInterface[] }> = ({ tag, posts }) => {
  const title = `Posts tagged with ${tag.title} - Blog - Richard Solomou`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <HeaderAlt />

      <Container maxWidth="md">
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Posts tagged with {tag.title}
          </Typography>

          <Posts posts={posts} />
        </Box>
      </Container>
    </>
  );
};

export default TagPage;
