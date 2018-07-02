const Koa = require('koa');
const app = new Koa();

const constants = require('./config/constants');

// request logger
app.use(async (ctx, next) => {
  console.log(ctx.method, ctx.path, ctx.status);
  await next();
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(constants.PORT, () => {
  console.log(`App running on port ${constants.PORT}`);
});
