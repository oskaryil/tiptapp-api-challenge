const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
});

router.get('/', async ctx => {
  ctx.body = 'Welcome to the Todo API';
  ctx.status = 200;
});

module.exports = router;
