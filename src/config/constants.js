require('dotenv').config({ path: __dirname + '/../../.env' });


const devConfig = {
  MONGO_URL: process.env.MONGO_URL_DEV
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  APP_NAME: process.env.APP_NAME || 'App'
};

function envConfig(env) {
  switch(env) {
    case 'development':
      return Object.assign(defaultConfig, devConfig);
    case 'production':
      return Object.assign(defaultConfig, prodConfig);
    default:
      return Object.assign(defaultConfig, devConfig);
  }
}

module.exports = envConfig(process.env.NODE_ENV);
