const apolloServer = require('./graphql/apolloServer');

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
