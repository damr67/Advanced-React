require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

//TODO: Use express middleware to  handle cookies (JWT)

//TODO: Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTED_URL
    }
  },
  (deets) =>
    console.log(
      'running on port',
      deets.port,
      '\n',
      `http://localhost:${deets.port}`
    )
);
