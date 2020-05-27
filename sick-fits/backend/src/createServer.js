const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const prismaDb = require('./db');

function createServer() {
  const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
      Mutation
    },
    context: (req) => ({ ...req, prismaDb })
  });

  return server;
}

module.exports = createServer;
