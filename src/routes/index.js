const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'wahts up';
  ctx.status = 200;
});

module.exports = router;
