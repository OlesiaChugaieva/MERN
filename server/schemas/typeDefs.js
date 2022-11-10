const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getSingleUser: User
  }
`;

module.exports = typeDefs;