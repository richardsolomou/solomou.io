import { Box, Card, CardActionArea, Chip, Container, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';

import { HeaderAlt } from '../../../components/HeaderAlt';
import { TagInterface, getAllTags } from '../../../lib/tags';

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  return { props: { tags } };
};

const TagsPage: NextPage<{ tags: TagInterface[] }> = ({ tags }) => {
  return (
    <>
      <Head>
        <title>Tags - Richard Solomou</title>
      </Head>

      <HeaderAlt />

      <Container maxWidth="md">
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Tags
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {tags.map((tag) => (
              <NextLink key={tag.slug} href="/blog/tags/[slug]" as={`/blog/tags/${tag.slug}`} passHref legacyBehavior>
                <Card component="a" sx={{ textDecoration: 'none' }}>
                  <CardActionArea sx={{ p: 2 }}>
                    <Typography variant="h3" paragraph>
                      {tag.title}
                    </Typography>

                    <Chip label={tag.numberOfPosts === 1 ? '1 post' : `${tag.numberOfPosts} posts`} />
                  </CardActionArea>
                </Card>
              </NextLink>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TagsPage;
