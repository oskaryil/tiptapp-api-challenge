const db = require('./database');
const router = require('../routes');

module.exports = app => {

  // request logger
  app
    .use(async (ctx, next) => {
      console.log(ctx.method, ctx.path, ctx.status);
      await next();
    });

  app
    .use(router.routes())
    .use(router.allowedMethods());
};
