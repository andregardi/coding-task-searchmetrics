const axios = require('axios');

const DATAMUSE_BASE_URL = 'https://api.datamuse.com';

const datamuseClient = axios.create({
  baseURL: DATAMUSE_BASE_URL,
});

module.exports = datamuseClient;
