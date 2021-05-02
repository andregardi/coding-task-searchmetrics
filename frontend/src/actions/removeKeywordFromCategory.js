import categoryServices from '../services/categories';

const removeKeywordFromCategory = async (store, categoryName, keyword) => {
  const { keywords } = await categoryServices.removeKeywordFromCategory(
    categoryName,
    keyword
  );
  store.setState((categories) => {
    const category = categories.find(
      (category) => category.name === categoryName
    );

    category.keywords = keywords;
  });
};

export default removeKeywordFromCategory;
