const successMutation = `
mutation {
  removeCategory(name: "cars")
}
`;

const categoryDoesNotExist = `
mutation {
  removeCategory(name: "nonExistingCategory")
}
`;

module.exports = {
  successMutation,
  categoryDoesNotExist,
};
