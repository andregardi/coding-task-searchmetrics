const categories = require('../../data/categories');

function getCategories() {
  return Object.entries(categories).map(([key, value]) => ({
    name: key,
    keywords: value,
  }));
}

module.exports = getCategories;
