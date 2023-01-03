export const postBySlug = `
query postBySlug($search: String!) {
  search(
    query: $search
    type: DISCUSSION
    first: 100
  ) {
    edges {
      node {
        ... on Discussion {
          title
          createdAt
          body
          number
          category {
            id
          }
          labels(first: 100) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
}
`;
