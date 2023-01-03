import fs from 'fs';
import { globby } from 'globby';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import { TagInterface, generateTags } from './tags';

export interface PostInterface {
  slug: string;
  content?: string;
  source?: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
  tags?: string[];
  // Frontmatter
  title: string;
  excerpt: string;
  image: string;
  // Computed
  publishedAt: string;
  readingTime: string;
  tagObjects: TagInterface[];
}

const postsPath = path.join(process.cwd(), 'public/posts');
const postFileName = 'post.mdx';

/**
 * Get the publish date of the post from the slug
 * @param slug - The post slug
 * @returns publish date
 */
export function getPublishDate(slug: string) {
  const fileDate = slug.split('-');

  // Get the year, month and day from the slug
  const year = fileDate[0];
  const month = fileDate[1];
  const day = fileDate[2];

  // Format the date to be used in the publishedAt field
  const publishedAt = `${year}-${month}-${day}`;

  return publishedAt;
}

/**
 * Get all the slugs from all the posts in the posts directory
 * @returns slugs
 */
export async function getSlugs() {
  const paths = await globby(`${postsPath}/**/${postFileName}`);

  return paths.map((path) => {
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 2];
    // Remove the file extension
    const [slug] = fileName.split('.');
    // Remove the published date (e.g, "2023-01-02") from the slug so that it's not visible in the URL
    const slugContent = slug.split('-');
    // Remove the first 3 items (year, month, day) from the array
    slugContent.splice(0, 3);
    const slugWithoutDate = slugContent.join('-');

    return slugWithoutDate;
  });
}

/**
 * Get the post data from the slug
 * @param slug - The post slug
 * @returns post data
 */
export function getPostFromSlug(slug: string): PostInterface {
  const posts = fs.readdirSync(postsPath);

  // Find the file that matches the slug
  const file = posts.find((fileName) => {
    // Get the publish date from the original slug
    const publishedAt = getPublishDate(fileName);
    // Compare the found file with the expected file name
    return fileName === `${publishedAt}-${slug}`;
  });

  // Get the content of the file and parse it with gray-matter
  const source = fs.readFileSync(path.join(postsPath, file, postFileName), 'utf-8');
  const { content, data } = matter(source);

  // Get the publish date from the original slug
  const publishedAt = getPublishDate(file);

  return {
    ...(data as PostInterface),
    // Remove published date from slug
    slug: slug.replace(`${publishedAt}-`, ''),
    content,
    publishedAt,
    readingTime: readingTime(source).text,
    tagObjects: generateTags(data.tags),
  };
}

/**
 * Get all the posts from the posts directory
 * @returns all posts
 */
export function getAllPosts() {
  try {
    const posts = fs.readdirSync(postsPath);

    // Get the content of each file and parse it with gray-matter
    return posts.reduce((allPosts, postSlug) => {
      const source = fs.readFileSync(path.join(postsPath, postSlug, postFileName), 'utf-8');
      const { data } = matter(source);

      const publishedAt = getPublishDate(postSlug);

      return [
        {
          ...(data as PostInterface),
          // Remove file extensionn and published date from slug
          slug: postSlug.replace('.mdx', '').replace(`${publishedAt}-`, ''),
          publishedAt,
          readingTime: readingTime(source).text,
          tagObjects: generateTags(data.tags),
        },
        ...allPosts,
      ];
    }, []);
  } catch (err) {
    return [];
  }
}

/**
 * Serialize the content of the post to be used with MDX
 * @param content - The post content
 * @returns serialized content
 */
export async function serializeContent(content: string) {
  return await serialize(content, {
    mdxOptions: {
      development: false,
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }, { behaviour: 'wrap' }],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });
}
