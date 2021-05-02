import categoryServices from '../services/categories';

const addKeywordToCategory = async (store, categoryName, keyword) => {
  const { keywords } = await categoryServices.addKeywordToCategory(
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

export default addKeywordToCategory;
