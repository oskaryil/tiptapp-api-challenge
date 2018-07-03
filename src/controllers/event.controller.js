const Event = require('../models/event.model');

/**
 * @function fetchEvents
 *
 * @description
 * DOING: Should fetch all events
 *
 * @param  {Object}  ctx
 * @returns
 */
const fetchEvents = async ctx => {
  try {
    const events = await Event.find();
    ctx.status = 200;
    ctx.body = events;
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      message: 'An error occured while fetching the events',
      error: err.message
    };
  }
};

/**
 * @function fetchBasedOnEventName
 *
 * @description
 * DOING: Should fetch events based on the name requested
 *
 * @param  {Object}  ctx
 * @returns
 */
const fetchBasedOnEventName = async ctx => {
  try {
    const eventName = ctx.params.name;
    const events = await Event.find({ name: eventName });
    ctx.status = 200;
    ctx.body = { message: `Fetched events with the name ${eventName}`, events };
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      message: 'An error occured while fetching the events',
      error: err.message
    };
  }
};

module.exports = { fetchEvents, fetchBasedOnEventName };
