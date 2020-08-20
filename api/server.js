const express = require("express");
const helmet = require("helmet");
const cors = require("helmet");
// const morgan = process.env.NODE_ENV !== "production" ? require('morgan') : null;
const morgan = require("morgan");

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
// const itemsRouter = require();

const server = express();
server.use(helmet());
server.use(cors());
// if(morgan) {
//   server.use(morgan('dev'));
// }
server.use(morgan("dev"));
server.use(express.json());

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