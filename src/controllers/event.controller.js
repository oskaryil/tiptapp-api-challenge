const Event = require('../models/event.model');
const errorHandler = require('../helpers/errorHandler');

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
    errorHandler(ctx, err);
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
    errorHandler(ctx, err);
  }
};

module.exports = { fetchEvents, fetchBasedOnEventName };
