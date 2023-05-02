const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}
type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}
input BookInput {
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(_id: ID!, input: BookInput): User
    removeBook(_id: ID!, bookId: String!): User
}
`

module.exports = typeDefs;