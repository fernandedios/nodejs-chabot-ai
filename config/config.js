let env = process.env.NODE_ENV || 'development';
let config = {};
let confKeys;

if (env === 'development') {
  const keys = require('./keys.json'); // json automatically converted to object
  confKeys = keys["dev"];
}
else if (env === 'production') {
  confKeys = process.env;
}

Object.keys(confKeys) // gets object keys and returns it as an array
  .forEach((key) => {
    config[key] = confKeys[key];
  });

// console.log(config);

module.exports = config;
