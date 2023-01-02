import { Box, Card, CardActionArea, Chip, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';

import { Wrapper } from '../../../components/Wrapper';
import { TagInterface, getAllTags } from '../../../lib/tags';

/**
 * Get all tags and their number of posts
 * @returns tags
 */
export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  return { props: { tags } };
};

const TagsPage: NextPage<{ tags: TagInterface[] }> = ({ tags }) => {
  return (
    <Wrapper title="Tags - Richard Solomou">
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

                  <Chip
                    size="small"
                    label={tag.numberOfPosts === 1 ? '1 post' : `${tag.numberOfPosts} posts`}
                    color="primary"
                  />
                </CardActionArea>
              </Card>
            </NextLink>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default TagsPage;
