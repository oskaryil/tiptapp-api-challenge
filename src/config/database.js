const mongoose = require('mongoose');
const constants = require('./constants');

try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  throw err;
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', err => {
    throw err;
  });

module.exports = mongoose.connection;
