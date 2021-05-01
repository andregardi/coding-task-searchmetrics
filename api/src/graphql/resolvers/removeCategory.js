const categories = require('../../data/categories');

function removeCategory(root, args) {
  const { name } = args;
  if (!categories[name]) throw new Error(`Category ${name} does not exist`);

  delete categories[name];

  return name;
}

module.exports = removeCategory;
