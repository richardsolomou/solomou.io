import Giscus from '@giscus/react';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Wrapper } from '../../components/Wrapper';
import { PostBody } from '../../components/blog/PostBody';
import { TagChips } from '../../components/blog/tags/TagChips';
import { BlogUtils } from '../../lib/BlogUtils';
import { FullPost } from '../../lib/types';

/**
 * Generate all possible paths for the blog posts
 * @returns post paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await BlogUtils.getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

/**
 * Get the post data for the given slug
 * @param params - slug
 * @returns post data
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const post = await BlogUtils.getPost(slug);
  return { props: { post } };
};

const PostPage: NextPage<{ post: FullPost }> = ({ post }) => {
  const title = `${post.title} - Blog - Richard Solomou`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post.coverImage} key="og-image" />
        <meta
          name="description"
          content={`${post.title}, posted on ${post.postedAt} by Richard Solomou`}
          key="description"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Richard Solomou`} key="twitter-title" />
        <meta name="twitter:image" content={post.coverImage} key="twitter-image" />
      </Head>

      <Wrapper>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1">
            <div dangerouslySetInnerHTML={{ __html: post.titleHTML }} />
          </Typography>

          <Typography variant="caption" sx={{ display: 'block', my: 1 }}>
            {post.postedAt} &mdash; {post.readingTime}
          </Typography>

          <TagChips tags={post.tags} />

          <Box sx={{ pt: 2, pb: 4 }}>
            <PostBody body={post.body} />
          </Box>

          <Giscus
            id="comments"
            repo={`${BlogUtils.owner}/${BlogUtils.repo}`}
            repoId={BlogUtils.repoId}
            category={BlogUtils.category}
            categoryId={BlogUtils.categoryId}
            mapping="number"
            term={post.discussionNumber.toString()}
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark_dimmed"
            lang="en"
            loading="lazy"
          />
        </Box>
      </Wrapper>
    </>
  );
};

export default PostPage;
