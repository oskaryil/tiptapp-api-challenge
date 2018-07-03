const errorHandler = (ctx, err) => {
  ctx.status = err.status || 400;
  ctx.body = { message: 'An error occured', error: err.message };
};

module.exports = errorHandler;
