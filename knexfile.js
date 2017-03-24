// Update with your config settings.
const config = require('./config');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: './dev.pg'
    }
  },

  staging: {
    client: 'postgresql',
    connection: config.dbConnectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: config.dbConnectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
