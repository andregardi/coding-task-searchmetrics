import { gql } from '@apollo/client';
import apolloClient from '../apolloClient';

const mutation = gql`
  mutation RemoveCategory($categoryName: String) {
    removeCategory(name: $categoryName)
  }
`;

async function removeCategory(categoryName) {
  return apolloClient.mutate({
    mutation,
    variables: { categoryName },
  });
}

export default removeCategory;
