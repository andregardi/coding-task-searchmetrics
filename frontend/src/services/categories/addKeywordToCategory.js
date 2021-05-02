import { gql } from '@apollo/client';
import apolloClient from '../apolloClient';

const mutation = gql`
  mutation AddKeywordToCategory($categoryName: String, $keyword: String) {
    addKeywordToCategory(category: $categoryName, keyword: $keyword) {
      name
      keywords
    }
  }
`;

async function addKeywordToCategory(categoryName, keyword) {
  const { data } = await apolloClient.mutate({
    mutation,
    variables: { categoryName, keyword },
  });
  return data.addKeywordToCategory;
}

export default addKeywordToCategory;
