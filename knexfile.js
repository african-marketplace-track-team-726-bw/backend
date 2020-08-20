// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/items.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth-test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tablename: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
  },

};
