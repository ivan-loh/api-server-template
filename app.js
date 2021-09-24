'use strict';



const app    = require('express')();
const server = require('./app/express')(app);



if (require.main === module) {

  server
    .listen(8000, () => {
      console.log('started');
    });

  return;
}

module.exports = server;
