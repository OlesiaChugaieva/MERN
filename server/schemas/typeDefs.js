const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    me: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
   bookCount: Int
   savedBooks: [Book]
  }

  type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(input: BookInput!): User
  removeBook(bookId: ID!): User
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
`;

module.exports = typeDefs;