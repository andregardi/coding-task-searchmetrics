import useGetCategories from '../../hooks/useCategories';
import Categories from './Categories/Categories';

const MainContent = () => {
  const { loading, error, categories } = useGetCategories();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return <Categories categories={categories} />;
};

export default MainContent;
