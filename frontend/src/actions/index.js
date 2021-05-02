import addKeywordToCategory from './addKeywordToCategory';
import removeKeywordFromCategory from './removeKeywordFromCategory';
import removeCategory from './removeCategory';
import addCategory from './addCategory';

const categoriesActions = {
  addKeywordToCategory,
  removeKeywordFromCategory,
  removeCategory,
  addCategory,
};

const errorHandler = (originalFunction) => async (...args) => {
  try {
    return await originalFunction(...args);
  } catch (error) {
    // TODO: link error message with some UI component
    alert(error.message);
  }
};

Object.keys(categoriesActions).forEach((key) => {
  const originalFunction = categoriesActions[key];
  categoriesActions[key] = errorHandler(originalFunction);
});

export default categoriesActions;
