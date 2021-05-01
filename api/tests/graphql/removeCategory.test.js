const { createTestClient } = require('apollo-server-testing');
const apolloServer = require('../../src/graphql/apolloServer');
const removeCategoryMutations = require('./__mutations__/removeCategory');

describe('removeCategory', () => {
  describe('on success', () => {
    it('it should match the snapshot', async () => {
      const { mutate } = createTestClient(apolloServer);
      const res = await mutate({
        mutation: removeCategoryMutations.successMutation,
      });

      expect(res).toMatchSnapshot();
    });
  });

  describe('if the category does not exist', () => {
    it('should return error', async () => {
      const { mutate } = createTestClient(apolloServer);
      const { errors } = await mutate({
        mutation: removeCategoryMutations.categoryDoesNotExist,
      });

      expect(errors[0].message).toMatch(
        /Category nonExistingCategory does not exist/
      );
    });
  });
});
