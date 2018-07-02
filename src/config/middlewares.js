const logger = require('koa-logger');

const db = require('./database');
const router = require('../routes');

module.exports = app => {

  // request logger
  app.use(logger());

  app.context.db = db;

  app
    .use(router.routes())
    .use(router.allowedMethods());
};
