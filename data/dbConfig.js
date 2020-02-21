// Configuration

// (1) - Import knex.js
const knex = require('knex');
// (2) - import config object from knexfile.js
const config = require('../knexfile.js')
// (3) - export the config object for its respective
// environment
// to start - [ex]: development : config.development
module.exports = knex(config.development)