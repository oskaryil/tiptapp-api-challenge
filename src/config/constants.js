require('dotenv').config({ path: __dirname + '/../../.env' });

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

module.exports = defaultConfig;
