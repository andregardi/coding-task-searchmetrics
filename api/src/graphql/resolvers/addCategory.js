const categories = require('../../data/categories');
const findSemanticallySimilarKeywords = require('../../services/datamuse/findSemanticallySimilarKeywords');

async function addCategory(root, args) {
  const { name } = args;
  if (categories[name]) throw new Error(`Category ${name} already exists`);

  const keywords = (await findSemanticallySimilarKeywords(name)).map(
    (item) => item.word
  );
  categories[name] = keywords;

  return { name, keywords };
}

module.exports = addCategory;
