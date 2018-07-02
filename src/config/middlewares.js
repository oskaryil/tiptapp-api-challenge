const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const db = require('./database');
const router = require('../routes');

module.exports = app => {

  // request logger
  app.use(logger());
  app.use(bodyParser());

  app.context.db = db;

  app
    .use(router.routes())
    .use(router.allowedMethods());
};
