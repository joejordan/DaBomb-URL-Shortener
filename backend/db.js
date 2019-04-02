const path = require('path');
const knex = require('knex');
const CreateSchema = require('./schema-db');

// get database path, assembled from .env vars
const dbpath = path.join(__dirname, process.env.DB_DIRECTORY, process.env.DB_FILENAME);

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: dbpath,
  },
  useNullAsDefault: true,
};

// get database instance
const db = knex(knexConfig);

// create schema if db doesn't exist
CreateSchema(db);

module.exports = db;
