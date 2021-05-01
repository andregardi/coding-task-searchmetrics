const categories = require('../../data/categories');

function addKeywordToCategory(root, args) {
  const { category, keyword } = args;
  if (!categories[category])
    throw new Error(`Category ${category} does not exist`);

  if (categories[category].includes(keyword))
    throw new Error(
      `The keyword ${keyword} already exists for category ${category}`
    );

  categories[category].push(keyword);

  return { name: category, keywords: categories[category] };
}

module.exports = addKeywordToCategory;
