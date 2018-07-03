const Todo = require('../models/todo.model');
const Event = require('../models/event.model');

const eventTypes = {
  CREATE_TODO: 'create_todo'
};

const createTodo = async ctx => {
  try {
    const { title } = ctx.request.body;
    const newTodo = new Todo();
    const newEvent = new Event({ name: eventTypes.CREATE_TODO });
    newTodo.title = title;
    await newTodo.save();
    await newEvent.save();
    ctx.status = 201;
    ctx.body = { message: 'Todo created', todo: newTodo };
  } catch (err) {
    ctx.status = 400;
    ctx.body = err.message;
  }
};

module.exports = { createTodo };
