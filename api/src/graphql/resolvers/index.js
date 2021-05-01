const getCategories = require('./getCategories');
const addCategory = require('./addCategory');
const addKeywordToCategory = require('./addKeywordToCategory');
const removeCategory = require('./removeCategory');
const removeKeywordFromCategory = require('./removeKeywordFromCategory');

const resolvers = {
  Query: {
    categories: getCategories,
  },
  Mutation: {
    addCategory,
    removeCategory,
    addKeywordToCategory,
    removeKeywordFromCategory,
  },
};

module.exports = resolvers;
