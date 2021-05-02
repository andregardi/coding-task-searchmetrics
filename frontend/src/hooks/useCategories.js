import { gql, useQuery } from '@apollo/client';
import apolloClient from '../services/apolloClient';

const query = gql`
  query GetProperties {
    categories {
      name
      keywords
    }
  }
`;

const useCategories = () => {
  const { loading, error, data } = useQuery(query, { client: apolloClient });
  const categories = data?.categories || null;
  return { loading, error, categories };
};

export default useCategories;
