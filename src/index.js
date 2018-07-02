const Koa = require('koa');
const app = new Koa();

const constants = require('./config/constants');
const middlewares = require('./config/middlewares')(app);

app.listen(constants.PORT, () => {
  console.log(`${constants.APP_NAME} running on port ${constants.PORT}`)  ;
});
