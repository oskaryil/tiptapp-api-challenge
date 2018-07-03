const Router = require('koa-router');

const TodoController = require('../controllers/todo.controller');

const router = new Router();

router
  .get('/', TodoController.fetchTodos)
  .post('/', TodoController.createTodo)
  .delete('/:id', TodoController.deleteTodo)
  .patch('/:id', TodoController.updateTodo);

module.exports = router;
