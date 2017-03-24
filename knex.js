import knex from "knex";
// import bookshelf from "bookshelf";

import config from './config.js';

export default knex({
    client: 'pg',
    connection: config.dbConnectionString
});
// export default bookshelf(db);