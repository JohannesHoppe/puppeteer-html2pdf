var forever = require('forever');

console.log('Running server forever');

forever.start ('server.js', {
  minUptime: 1000,
  spinSleepTime: 1000
});