const { createTestClient } = require('apollo-server-testing');
const apolloServer = require('../../src/graphql/apolloServer');
const addKeywordToCategoryMutations = require('./__mutations__/addKeywordToCategory');

describe('addKeywordToCategory', () => {
  describe('on success', () => {
    it('it should match the snapshot', async () => {
      const { mutate } = createTestClient(apolloServer);
      const res = await mutate({
        mutation: addKeywordToCategoryMutations.successMutation,
      });

      expect(res).toMatchSnapshot();
    });
  });

  describe('if the category does not exist', () => {
    it('should return error', async () => {
      const { mutate } = createTestClient(apolloServer);
      const { errors } = await mutate({
        mutation: addKeywordToCategoryMutations.categoryDoesNotExist,
      });

      expect(errors[0].message).toMatch(
        /Category nonExistingCategory does not exist/
      );
    });
  });

  describe('if the keyword already exists', () => {
    it('should return error', async () => {
      const { mutate } = createTestClient(apolloServer);
      const { errors } = await mutate({
        mutation: addKeywordToCategoryMutations.keywordAlredyExists,
      });

      expect(errors[0].message).toMatch(
        /The keyword bmw already exists for category cars/
      );
    });
  });
});
