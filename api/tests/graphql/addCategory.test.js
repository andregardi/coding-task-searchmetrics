const { createTestClient } = require('apollo-server-testing');
const apolloServer = require('../../src/graphql/apolloServer');
const datamuseClient = require('../../src/services/datamuse/client');
const addCategoryMutations = require('./__mutations__/addCategory');

jest.mock('../../src/services/datamuse/client', () => ({
  get: jest.fn(),
}));

describe('addCategory', () => {
  describe('on success', () => {
    it('it should match the snapshot', async () => {
      const mockedKeywords = 'mockedKeywords';
      datamuseClient.get.mockResolvedValueOnce({ data: [mockedKeywords] });

      const { mutate } = createTestClient(apolloServer);
      const res = await mutate({
        mutation: addCategoryMutations.successMutation,
      });

      expect(res).toMatchSnapshot();
    });
  });

  describe('if the category already exists', () => {
    it('should return error', async () => {
      const { mutate } = createTestClient(apolloServer);
      const { errors } = await mutate({
        mutation: addCategoryMutations.carsAlreadyExist,
      });

      expect(errors[0].message).toMatch(/Category cars already exists/);
    });
  });
});
