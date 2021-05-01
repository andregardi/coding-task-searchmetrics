const successMutation = `
mutation{
  removeKeywordFromCategory(category: "cars", keyword: "bmw"){
    name
    keywords
  }
}
`;

const categoryDoesNotExist = `
mutation{
  removeKeywordFromCategory(category: "nonExistingCategory", keyword: "bmw"){
    name
  }
}
`;

const keywordDoesNotExist = `
mutation{
  removeKeywordFromCategory(category: "cars", keyword: "nonExistingKeyword"){
    name
    keywords
  }
}
`;

module.exports = {
  successMutation,
  categoryDoesNotExist,
  keywordDoesNotExist,
};
