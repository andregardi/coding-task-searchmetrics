const { gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    name: String
    keywords: [String]
  }

  type Query {
    categories: [Category]
  }

  type Mutation {
    addCategory(name: String): Category
    removeCategory(name: String): String
    addKeywordToCategory(category: String, keyword: String): Category
    removeKeywordFromCategory(category: String, keyword: String): Category
  }
`;

module.exports = typeDefs;
