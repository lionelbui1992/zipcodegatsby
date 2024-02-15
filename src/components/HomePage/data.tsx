import { gql } from '@apollo/client';

export const GET_FORMINATOR_FORM = gql`
  query NewQuery {
  pages {
    edges {
      node {
        id
      }
    }
  }
}
`;