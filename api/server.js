const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
// const itemsRouter = require();

const server = express();

const sessionConfig = {
  name: 'auth',
  secret: 'authenticateUser',
  cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSessionStore(
      {
          knex: require('../database/db-config.js'),
          tablename: 'sessions',
          sidfieldname: 'sid',
          createtable: true,
          clearInterval: 1000 * 60 * 60
      }
  )
};

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.use('/', (req, res) => {
    res.send(`
        <h2>Hey your API is up</h2>
    `);
  });

  server.use((err, req, res, next) => {
    res.status(err.code).json(err)
  });

module.exports = server;