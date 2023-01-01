import { Box, Container, Divider, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'highlight.js/styles/base16/material-darker.css';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import React, { memo } from 'react';

import { HeaderAlt } from '../../components/HeaderAlt';
import { Tags } from '../../components/blog/tags/Tags';
import { ExternalLink } from '../../components/common/ExternalLink';
import { PostInterface, getPostFromSlug, getSlugs, serializeContent } from '../../lib/posts';

const components = {
  p: Typography,
  h1: (() => {
    const H1 = (props) => <Typography {...props} variant="h1" sx={{ lineHeight: 2 }} />;
    return memo(H1);
  })(),
  h2: (() => {
    const H2 = (props) => <Typography {...props} variant="h2" sx={{ lineHeight: 2 }} />;
    return memo(H2);
  })(),
  h3: (() => {
    const H3 = (props) => <Typography {...props} variant="h3" sx={{ lineHeight: 2 }} />;
    return memo(H3);
  })(),
  h4: (() => {
    const H4 = (props) => <Typography {...props} variant="h4" sx={{ lineHeight: 2 }} />;
    return memo(H4);
  })(),
  h5: (() => {
    const H5 = (props) => <Typography {...props} variant="h5" sx={{ lineHeight: 2 }} />;
    return memo(H5);
  })(),
  h6: (() => {
    const H6 = (props) => <Typography {...props} variant="h6" sx={{ lineHeight: 2 }} />;
    return memo(H6);
  })(),
  blockquote: (() => {
    const Blockquote = (props) => <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />;
    return memo(Blockquote);
  })(),
  ul: (() => {
    const Ul = (props) => <Typography {...props} component="ul" />;
    return memo(Ul);
  })(),
  ol: (() => {
    const Ol = (props) => <Typography {...props} component="ol" />;
    return memo(Ol);
  })(),
  code: (() => {
    const Code = (props) => <Paper sx={{ p: 2 }} {...props} />;
    return memo(Code);
  })(),
  li: (() => {
    const Li = (props) => <Typography {...props} component="li" />;
    return memo(Li);
  })(),
  hr: Divider,
  a: (() => {
    const A = (props) => <ExternalLink {...props} color="secondary" />;
    return memo(A);
  })(),
};

/**
 * Generate all possible paths for the blog posts
 * @returns post paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

/**
 * Get the post data for the given slug
 * @param params - slug
 * @returns post data
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const post = getPostFromSlug(slug);
  const source = await serializeContent(post.content);
  return { props: { post: { ...post, source } } };
};

const PostPage: NextPage<{ post: PostInterface }> = ({ post }) => {
  const title = `${post.title} - Blog - Richard Solomou`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <HeaderAlt />

      <Container maxWidth="md">
        <Box sx={{ py: 2 }}>
          <Typography variant="h1">{post.title}</Typography>

          <Typography variant="caption" sx={{ display: 'block', my: 1 }}>
            {dayjs(post.publishedAt).format('MMMM D, YYYY')} &mdash; {post.readingTime}
          </Typography>

          <Tags tags={post.tagObjects} />

          <Box sx={{ pt: 2 }}>
            <MDXRemote {...post.source} components={components as any} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PostPage;
