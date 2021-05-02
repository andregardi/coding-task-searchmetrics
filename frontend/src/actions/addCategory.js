import categoryServices from '../services/categories';

const addCategory = async (_store, categoryName) => {
  const newCategory = await categoryServices.addCategory(categoryName);
  _store.setState((categories) => {
    categories.push(newCategory);
  });
};

export default addCategory;
