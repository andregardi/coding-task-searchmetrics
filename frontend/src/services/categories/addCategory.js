import { gql } from '@apollo/client';
import apolloClient from '../apolloClient';

const mutation = gql`
  mutation AddCategory($categoryName: String) {
    addCategory(name: $categoryName) {
      name
      keywords
    }
  }
`;

async function addCategory(categoryName) {
  const { data } = await apolloClient.mutate({
    mutation,
    variables: { categoryName },
  });
  return data.addCategory;
}

export default addCategory;
