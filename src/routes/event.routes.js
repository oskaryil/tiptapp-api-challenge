const Router = require('koa-router');

const EventController = require('../controllers/event.controller');

const router = new Router();

router
  .get('/', EventController.fetchEvents)
  .get('/:name', EventController.fetchBasedOnEventName);

module.exports = router;
