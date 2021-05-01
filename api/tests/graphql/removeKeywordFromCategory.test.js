const { createTestClient } = require('apollo-server-testing');
const apolloServer = require('../../src/graphql/apolloServer');
const removeKeywordFromCategoryMutations = require('./__mutations__/removeKeywordFromCategory');

describe('removeKeywordFromCategory', () => {
  describe('on success', () => {
    it('it should match the snapshot', async () => {
      const { mutate } = createTestClient(apolloServer);
      const res = await mutate({
        mutation: removeKeywordFromCategoryMutations.successMutation,
      });

      expect(res).toMatchSnapshot();
    });
  });

  describe('if the category does not exist', () => {
    it('should return error', async () => {
      const { mutate } = createTestClient(apolloServer);
      const { errors } = await mutate({
        mutation: removeKeywordFromCategoryMutations.categoryDoesNotExist,
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
        mutation: removeKeywordFromCategoryMutations.keywordDoesNotExist,
      });

      expect(errors[0].message).toMatch(
        /The keyword nonExistingKeyword does not exist for category cars/
      );
    });
  });
});
