const Event = require('../models/event.model');

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

module.exports = { fetchEvents };
