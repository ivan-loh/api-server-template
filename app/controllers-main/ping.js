'use strict';

const router = require('express').Router();
const path   = require('path');

module.exports = (app) => {

  app.use('/' + path.basename(__filename, '.js'), router);

};

router.get('/', (req, res) => {
  res.jsonp('pong');
});
