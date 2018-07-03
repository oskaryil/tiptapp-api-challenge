const Router = require('koa-router');

const TodoController = require('../controllers/todo.controller');

const router = new Router();

router
  .post('/', TodoController.createTodo);

module.exports = router;
