const Todo = require('../models/todo.model');

const createTodo = async ctx => {
  try {
    const { title } = ctx.request.body;
    const newTodo = new Todo();
    newTodo.title = title;
    await newTodo.save();
    ctx.status = 201;
    ctx.body = { message: 'Todo created', todo: newTodo };
  } catch (err) {
    ctx.status = 400;
    ctx.body = err.message;
  }
};

module.exports = { createTodo };
