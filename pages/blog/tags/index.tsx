import { Box, Card, CardActionArea, Chip, Typography } from '@mui/material';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';

import { Wrapper } from '../../../components/Wrapper';
import { BlogUtils } from '../../../lib/BlogUtils';
import { TagUtils } from '../../../lib/TagUtils';
import { Tag } from '../../../lib/types';

/**
 * Get all tags and their number of posts
 * @returns tags
 */
export const getStaticProps: GetStaticProps = async () => {
  const tags = await BlogUtils.getTags();
  return { props: { tags } };
};

const TagsPage: NextPage<{ tags: Tag[] }> = ({ tags }) => {
  return (
    <>
      <Head>
        <title>Tags - Richard Solomou</title>
      </Head>

      <Wrapper>
        <Box sx={{ py: 2 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Tags
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {tags.map((tag) => (
              <NextLink key={tag.slug} href="/blog/tags/[slug]" as={`/blog/tags/${tag.slug}`} passHref legacyBehavior>
                <Card
                  component="a"
                  sx={{
                    textDecoration: 'none',
                    background: tag.color,
                    color: TagUtils.getContrastingTextColor(tag.color),
                  }}
                >
                  <CardActionArea sx={{ p: 2 }}>
                    <Typography variant="h3" paragraph>
                      {tag.title}
                    </Typography>

                    <Chip size="small" label={tag.count === 1 ? '1 post' : `${tag.count} posts`} />
                  </CardActionArea>
                </Card>
              </NextLink>
            ))}
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default TagsPage;
