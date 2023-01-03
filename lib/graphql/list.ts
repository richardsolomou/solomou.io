export const list = `
query list($owner: String!, $repo: String!, $categoryId: ID! $after: String) {
  repository(owner: $owner, name: $repo) {
    discussions(
      first: 100,
      after: $after,
      categoryId: $categoryId,
      orderBy: { field: CREATED_AT, direction: DESC }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        createdAt
        updatedAt
        body
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
`;
