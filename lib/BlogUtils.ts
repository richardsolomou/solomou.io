import { graphql } from '@octokit/graphql';
import readingTime from 'reading-time';
import slug from 'slug';

import { MarkdownUtils } from './MarkdownUtils';
import { list } from './graphql/list';
import { postBySlug } from './graphql/postBySlug';
import { Discussion, Label, ListDiscussion, SearchDiscussion, ShortPost, Tag } from './types';

const api = graphql.defaults({
  headers: {
    authorization: 'token '.concat(process.env.GITHUB_ACCESS_TOKEN),
  },
});

export class BlogUtils {
  static owner = 'richardsolomou';
  static repo = 'solomou.io';
  static repoId = 'R_kgDOIsmP4g';
  static category = 'Blog Posts';
  static categoryId = 'DIC_kwDOIsmP4s4CTYRl';

  /**
   * Get short posts for the homepage and blog page
   * @param limit - number of posts to return
   * @returns short posts
   */
  static async getPosts(limit?: number) {
    const discussions = await fetchAllDiscussions();

    const posts: ShortPost[] = await Promise.all(discussions.map(convertDiscussionToPost));

    const sortedPosts = posts.sort((postA, postB) => {
      return new Date(postB.postedAt).getTime() - new Date(postA.postedAt).getTime();
    });

    return limit ? sortedPosts.slice(0, limit) : sortedPosts;
  }

  /**
   * Get short posts for a tag page
   * @param tag - tag to filter posts by
   * @returns short posts
   */
  static async getPostsByTag(tag: Tag) {
    const posts = await this.getPosts();
    return posts.filter((post) => post.tags.some((postTag) => postTag.slug === tag.slug));
  }

  /**
   * Get a full post by slug
   * @param slug - post slug
   * @returns full post
   */
  static async getPost(slug: string) {
    const result: SearchDiscussion = await api(postBySlug, {
      search: `"${slug}" in:title repo:${BlogUtils.owner}/${BlogUtils.repo}`,
    });

    // In case we find discussions with similar titles, find the exact one
    const discussion = result.search.edges.find((result) => {
      const resultSlug = result.node.title;
      return resultSlug === slug && result.node.category.id === BlogUtils.categoryId;
    })?.node;

    if (!discussion) {
      return undefined;
    }

    return {
      ...(await convertDiscussionToPost(discussion)),
      body: await MarkdownUtils.bodyToHTML(discussion.body),
      discussionNumber: discussion.number,
    };
  }

  /**
   * Get all tags from all posts and their count
   * @returns tags
   */
  static async getTags() {
    const discussions = await fetchAllDiscussions();

    const tags: Tag[] = discussions.reduce((acc, discussion) => {
      const labels = discussion.labels.nodes;

      labels.forEach((label) => {
        const existingTag = acc.find((tag) => tag.title === label.name);

        if (existingTag) {
          existingTag.count++;
        } else {
          acc.push(convertLabelToTag(label));
        }
      });

      return acc;
    }, [] as Tag[]);

    const sortedTags = tags.sort((tagA, tagB) => tagB.count! - tagA.count!);

    return sortedTags;
  }
}

/**
 * Convert a discussion item to a short post
 * @param discussion
 * @returns short post
 */
async function convertDiscussionToPost(discussion: Discussion): Promise<ShortPost> {
  const slug = discussion.title;
  const postedAt = discussion.createdAt.split('T')[0];

  return {
    slug,
    title: MarkdownUtils.extractTitle(discussion.body) || slug,
    titleHTML: await MarkdownUtils.titleToHTML(discussion.body),
    postedAt: formatPostedAt(postedAt),
    readingTime: readingTime(discussion.body).text,
    tags: discussion.labels.nodes.map(convertLabelToTag),
    coverImage: MarkdownUtils.extractCoverImage(discussion.body),
  };
}

/**
 * Format a date string
 * @param postedAt - date string
 * @returns formatted date
 */
function formatPostedAt(postedAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Athens',
  }).format(new Date(postedAt));
}

/**
 * Convert a GitHub label to a tag
 * @param label - GitHub label
 * @returns tag
 */
function convertLabelToTag(label: Label) {
  return {
    slug: slug(label.name),
    title: label.name,
    color: `#${label.color}`,
    count: 1,
  };
}

/**
 * Fetch all discussions from GitHub API
 * @returns all discussions
 */
async function fetchAllDiscussions() {
  let hasNextPage = true;
  let after: string | null = null;
  const discussions: Discussion[] = [];

  do {
    const result: ListDiscussion = await api(list, {
      owner: BlogUtils.owner,
      repo: BlogUtils.repo,
      categoryId: BlogUtils.categoryId,
      after,
    });

    const { pageInfo, nodes } = result.repository.discussions;

    discussions.push(...nodes);
    hasNextPage = pageInfo.hasNextPage;
    after = pageInfo.endCursor;
  } while (hasNextPage);

  return discussions;
}
