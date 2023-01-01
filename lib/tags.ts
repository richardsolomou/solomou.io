import slug from 'slug';

import { getAllPosts } from './posts';

export interface TagInterface {
  slug: string;
  title: string;
  numberOfPosts?: number;
}

/**
 * Get all the tags from all the posts
 * @returns all tags
 */
export function getAllTags() {
  const posts = getAllPosts();

  const tags: string[] = posts.reduce((allTags, post) => {
    const postTags = post.tags || [];

    return [...allTags, ...postTags];
  }, []);

  const uniqueTags = [...new Set(tags)];

  return uniqueTags.map((title) => {
    return {
      ...getTagFromTitle(title),
      numberOfPosts: tags.filter((tag) => tag === title).length,
    };
  });
}

/**
 * Get the tag data from the tag title
 * @param title - The tag title
 * @returns tag data
 */
export function getTagFromTitle(title: string) {
  return {
    slug: slug(title),
    title,
  };
}

/**
 * Get the tag data from the tag slug
 * @param slug - The tag slug
 * @returns tag data
 */
export function getTagFromSlug(slug: string) {
  const tags = getAllTags();

  return tags.find((tag) => tag.slug === slug);
}

/**
 * Generate a list of tags from a list of tag titles
 * @param tags - The list of tag titles
 * @returns list of tag data
 */
export function generateTags(tags: string[]) {
  if (!tags) return [];
  return tags.map((tag) => getTagFromTitle(tag));
}
