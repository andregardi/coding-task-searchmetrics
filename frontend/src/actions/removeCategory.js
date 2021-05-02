import categoryServices from '../services/categories';

const removeCategory = async (store, categoryName) => {
  await categoryServices.removeCategory(categoryName);
  store.setState((categories) => {
    const index = categories.findIndex((category) => {
      return category.name === categoryName;
    });

    categories.splice(index, 1);
  });
};

export default removeCategory;
