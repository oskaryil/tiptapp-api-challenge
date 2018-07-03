const Router = require('koa-router');

const todoRoutes = require('./todo.routes');

const router = new Router({
  prefix: '/api'
});

router.use('/todo', todoRoutes.routes(), todoRoutes.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'Welcome to the Todo API';
  ctx.status = 200;
});

module.exports = router;
