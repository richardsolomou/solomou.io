import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

import { Wrapper } from '../../../components/Wrapper';
import { PostCards } from '../../../components/blog/PostCards';
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
    <Wrapper title={title}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Posts tagged with {tag.title}
        </Typography>

        <PostCards posts={posts} />
      </Box>
    </Wrapper>
  );
};

export default TagPage;
