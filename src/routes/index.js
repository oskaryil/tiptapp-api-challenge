const Router = require('koa-router');

const todoRoutes = require('./todo.routes');
const eventRoutes = require('./event.routes');

const router = new Router({
  prefix: '/api'
});

router.use('/todo', todoRoutes.routes(), todoRoutes.allowedMethods());
router.use('/events', eventRoutes.routes(), eventRoutes.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'Welcome to the Todo API';
  ctx.status = 200;
});

module.exports = router;
