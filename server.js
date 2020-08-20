const express = require("express");
const helmet = require("helmet");
const cors = require("helmet");
const morgan = require('morgan');

// const authRouter = require('./auth/authRouter.js');
// const usersRouter = require();
// const itemsRouter = require();

const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// server.use('/api/auth', authRouter);

server.use('/', (req, res) => {
    res.send(`
        <h2>Hey your API is up</h2>
    `);
  });

module.exports = server;