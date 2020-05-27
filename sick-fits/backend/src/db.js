const { Prisma } = require('prisma-binding');

// Instantiate `Prisma` based on concrete service
const prismaDb = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = prismaDb;
