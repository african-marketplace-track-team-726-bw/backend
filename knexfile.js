require('dotenv').config();

const pgConnection = process.env.DATABASE_URL || 'postgres://edwuwmjmjgltua:cdf0f6ec93034af036d353099fbc70d4c45ce78f97ea1012a7776ced6dec12d6@ec2-34-238-26-109.compute-1.amazonaws.com:5432/d2kc9upe4g2407';


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

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
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
