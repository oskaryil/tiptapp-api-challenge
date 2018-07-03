const Todo = require('../models/todo.model');
const Event = require('../models/event.model');

const eventTypes = {
  CREATE_TODO: 'create_todo',
  DELETE_TODO: 'delete_todo',
  UPDATE_TODO: 'update_todo',
  MARKED_AS_DONE: 'marked_as_done',
  MARKED_AS_UNDONE: 'marked_as_undone',
  UPDATE_TODO_TITLE: 'update_todo_title'
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

/**
 * @function deleteTodo
 *
 * @description
 * DOING: Should delete a todo by its _id received in request params
 *
 * @param  {Object}  ctx
 * @returns
 */
const deleteTodo = async ctx => {
  try {
    const { id } = ctx.params;
    const deletedTodo = await Todo.findOneAndDelete({ _id: id });
    if (deletedTodo) {
      const newEvent = new Event({ name: eventTypes.DELETE_TODO });
      await newEvent.save();
      ctx.status = 200;
      ctx.body = {
        message: `Todo with id ${id} has been deleted`,
        deletedTodo
      };
    } else {
      throw new Error('A todo with that id could not be found');
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = { message: 'An error occured', error: err.message };
  }
};

/**
 * @function updateTodo
 *
 * @description
 * DOING: Should update a single todo
 *
 * @param  {Object}  ctx
 * @returns
 */
const updateTodo = async ctx => {
  try {
    const { id } = ctx.params;
    const newTodoData = ctx.request.body;
    const isMarkedAsDone = newTodoData.done === 'true';
    const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, newTodoData, {
      new: true
    });
    if (updatedTodo) {
      if (newTodoData.title) {
        const newUpdateTitleEvent = new Event({
          name: eventTypes.UPDATE_TODO_TITLE
        });
        await newUpdateTitleEvent.save();
      }

      if (newTodoData.hasOwnProperty('done') && isMarkedAsDone) {
        const newMarkedAsDoneEvent = new Event({
          name: eventTypes.MARKED_AS_DONE
        });
        await newMarkedAsDoneEvent.save();
      } else if (newTodoData.hasOwnProperty('done') && !isMarkedAsDone) {
        const newMarkedAsUndoneEvent = new Event({
          name: eventTypes.MARKED_AS_UNDONE
        });
        await newMarkedAsUndoneEvent.save();
      }

      if (
        newTodoData.hasOwnProperty('title') ||
        newTodoData.hasOwnProperty('done')
      ) {
        const newUpdateEvent = new Event({ name: eventTypes.UPDATE_TODO });
        await newUpdateEvent.save();
      }
      ctx.status = 200;
      ctx.body = {
        message: `Todo with id ${id} has been updated`,
        updatedTodo
      };
    } else {
      throw new Error('A todo with that id could not be found');
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = { message: 'An error occured', error: err.message };
  }
};

module.exports = { createTodo, deleteTodo, updateTodo };
