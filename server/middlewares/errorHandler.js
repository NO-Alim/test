const createError = require('http-errors');

const defaultErrorHandler = (err, req, res, next) => {
  res.locals.error = process.env.NODE_ENV = 'development'
    ? err
    : { message: err.message };
  res.status(err.status || 500);
  res.json({
    errors: {
      common: {
        msg: err.message,
      },
    },
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

const notFoundErrorHandler = (req, res, next) => {
  next(createError(404, 'Your Requested Content was not Found.'));
};

module.exports = {
  defaultErrorHandler,
  notFoundErrorHandler,
};
