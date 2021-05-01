const categories = require('../../data/categories');

function removeKeywordFromCategory(root, args) {
  const { category, keyword } = args;
  if (!categories[category])
    throw new Error(`Category ${category} does not exist`);

  if (!categories[category].includes(keyword))
    throw new Error(
      `The keyword ${keyword} does not exist for category ${category}`
    );

  categories[category] = categories[category].filter(
    (value) => value !== keyword
  );

  return { name: category, keywords: categories[category] };
}

module.exports = removeKeywordFromCategory;
