const express = require('express');
const projRouter = require('./projects/projectsRouter');
const server = express();

server.use(express.json());

server.use('/projects', projRouter);

module.exports = server;
