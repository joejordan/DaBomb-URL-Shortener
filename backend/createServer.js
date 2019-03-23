const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');

const resolvers = {
  Query,
};

const apollo = new ApolloServer({ typeDefs, resolvers });

module.exports = apollo;
