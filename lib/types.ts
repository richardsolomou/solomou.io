export type Discussion = {
  title: string;
  createdAt: string;
  body: string;
  number?: number;
  category?: {
    id: string;
  };
  labels: {
    nodes: {
      name: string;
      color: string;
    }[];
  };
};

export type ShortPost = {
  slug: string;
  title: string;
  titleHTML: string;
  postedAt: string;
  readingTime: string;
  tags: Tag[];
  coverImage?: string;
};

export type FullPost = {
  slug: string;
  title: string;
  titleHTML: string;
  postedAt: string;
  tags: Tag[];
  body: string;
  readingTime: string;
  discussionNumber: number;
  coverImage?: string;
};

export type Tag = {
  slug: string;
  title: string;
  color: string;
  count?: number;
};

export type ListDiscussion = {
  repository: {
    discussions: {
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
      nodes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        body: string;
        labels: {
          nodes: {
            name: string;
            color: string;
          }[];
        };
      }[];
    };
  };
};

export type Label = ListDiscussion['repository']['discussions']['nodes'][0]['labels']['nodes'][0];

export type SearchDiscussion = {
  search: {
    edges: {
      node: {
        title: string;
        createdAt: string;
        body: string;
        number: number;
        category: {
          id: string;
        };
        labels: {
          nodes: {
            name: string;
            color: string;
          }[];
        };
      };
    }[];
  };
};
