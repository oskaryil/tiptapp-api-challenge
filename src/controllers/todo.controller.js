const Todo = require('../models/todo.model');
const Event = require('../models/event.model');

const eventTypes = {
  CREATE_TODO: 'create_todo'
};

/**
 * @function createTodo
 *
 * @description
 * DOING: Should create a Todo and an Event upon request
 *
 * @param  {Object}  ctx
 * @returns
 */
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
    ctx.body = { message: 'An error occured', error: err.message };
  }
};

module.exports = { createTodo };
