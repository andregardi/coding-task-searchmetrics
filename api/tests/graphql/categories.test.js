const { createTestClient } = require('apollo-server-testing');
const apolloServer = require('../../src/graphql/apolloServer');
const categoriesQuery = require('./__queries__/categories');

describe('categories', () => {
  it('The categories query should match the snapshot', async () => {
    const { query } = createTestClient(apolloServer);
    const res = await query({
      query: categoriesQuery,
    });
    expect(res).toMatchSnapshot();
  });
});
