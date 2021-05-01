const successMutation = `
mutation {
	addKeywordToCategory(category: "cars", keyword: "mockCar"){
    name
    keywords
  }
}
`;

const categoryDoesNotExist = `
mutation {
	addKeywordToCategory(category: "nonExistingCategory", keyword: "mockCar"){
    name
  }
}
`;

const keywordAlredyExists = `
mutation {
	addKeywordToCategory(category: "cars", keyword: "bmw"){
    name
  }
}
`;

module.exports = {
  successMutation,
  categoryDoesNotExist,
  keywordAlredyExists,
};
