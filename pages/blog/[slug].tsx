import Giscus from '@giscus/react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'highlight.js/styles/base16/material-darker.css';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import { Wrapper } from '../../components/Wrapper';
import { PostImage } from '../../components/blog/PostImage';
import { TagChips } from '../../components/blog/tags/TagChips';
import { ExternalLink } from '../../components/common/ExternalLink';
import { Color } from '../../lib/colors';
import { PostInterface, getPostFromSlug, getSlugs, serializeContent } from '../../lib/posts';

const components = {
  p: (props) => <Typography {...props} paragraph component="div" />,
  h1: (props) => <Typography {...props} variant="h1" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  h2: (props) => <Typography {...props} variant="h2" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  h3: (props) => <Typography {...props} variant="h3" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  h4: (props) => <Typography {...props} variant="h4" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  h5: (props) => <Typography {...props} variant="h5" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  h6: (props) => <Typography {...props} variant="h6" color={Color.PurpleLight} sx={{ lineHeight: 2 }} />,
  blockquote: (props) => <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />,
  ul: (props) => <Typography {...props} component="ul" />,
  ol: (props) => <Typography {...props} component="ol" />,
  code: (props) => <Box component="code" {...props} sx={{ whiteSpace: 'pre', color: Color.PaleOrange }} />,
  pre: (props) => <Paper {...props} sx={{ p: 2, whiteSpace: 'pre', code: { color: Color.White } }} />,
  li: (props) => <Typography {...props} component="li" />,
  hr: Divider,
  a: (props) => <ExternalLink {...props} color="secondary" />,
  img: PostImage,
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
    <Wrapper title={title}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h1">{post.title}</Typography>

        <Typography variant="caption" sx={{ display: 'block', my: 1 }}>
          {dayjs(post.publishedAt).format('MMMM D, YYYY')} &mdash; {post.readingTime}
        </Typography>

        <TagChips tags={post.tagObjects} />

        <Box sx={{ pt: 2, pb: 4 }}>
          <MDXRemote {...post.source} components={components} />
        </Box>

        <Giscus
          id="comments"
          repo="richardsolomou/solomou.io"
          repoId="R_kgDOIsmP4g"
          category="Blog Comments"
          categoryId="DIC_kwDOIsmP4s4CTYRx"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_dimmed"
          lang="en"
          loading="lazy"
        />
      </Box>
    </Wrapper>
  );
};

export default PostPage;
