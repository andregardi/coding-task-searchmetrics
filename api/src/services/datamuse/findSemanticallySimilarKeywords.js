const datamuseClient = require('./client');

const KEYWORDS_SEARCH_LIMIT = 10;

async function findSemanticallySimilarKeywords(meaningSimilar) {
  const url = `words?ml=${meaningSimilar}&max=${KEYWORDS_SEARCH_LIMIT}`;
  const { data } = await datamuseClient.get(url);
  return data;
}

module.exports = findSemanticallySimilarKeywords;
