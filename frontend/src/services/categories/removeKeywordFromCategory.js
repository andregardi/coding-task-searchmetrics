import { gql } from '@apollo/client';
import apolloClient from '../apolloClient';

const mutation = gql`
  mutation RemoveKeywordFromCategory($categoryName: String, $keyword: String) {
    removeKeywordFromCategory(category: $categoryName, keyword: $keyword) {
      name
      keywords
    }
  }
`;

async function removeKeywordFromCategory(categoryName, keyword) {
  const { data } = await apolloClient.mutate({
    mutation,
    variables: { categoryName, keyword },
  });
  return data.removeKeywordFromCategory;
}

export default removeKeywordFromCategory;
