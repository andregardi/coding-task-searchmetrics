const findSemanticallySimilarKeywords = require('../../src/services/datamuse/findSemanticallySimilarKeywords');
const datamuseClient = require('../../src/services/datamuse/client');

jest.mock('../../src/services/datamuse/client', () => ({
  get: jest.fn(),
}));

describe('findSemanticallySimilarKeywords', () => {
  it('should call the datamuseClient and return its response', async () => {
    const mockedKeywords = 'mockedKeywords';
    const meaningSimilar = 'meaningSimilar';
    datamuseClient.get.mockResolvedValueOnce({ data: mockedKeywords });

    const keywords = await findSemanticallySimilarKeywords(meaningSimilar);

    expect(datamuseClient.get).toBeCalledWith(
      `words?ml=${meaningSimilar}&max=10`
    );
    expect(keywords).toBe(mockedKeywords);
  });
});
