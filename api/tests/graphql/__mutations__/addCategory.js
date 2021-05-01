const successMutation = `
mutation {
  addCategory(name: "newCategory"){
    name
    keywords
  }
}
`;

const carsAlreadyExist = `
mutation {
  addCategory(name: "cars"){
    name
  }
}
`;

module.exports = {
  successMutation,
  carsAlreadyExist,
};
