'use strict';

const { NODE_ENV, ROOT } = require('./config');



const express = require('express');
const glob    = require('glob');
const morgan  = require('morgan');



module.exports = app => {


  app.use(morgan('dev'));
  app.use(express.json());


  const router_main = express.Router();
  // Routes - main
  glob
    .sync( ROOT + 'app/controllers-main/*.js')
    .forEach(path => require(path)(router_main));

  app.use('/main', router_main);


  // Catch All

  app.use((req, res, next) => {
    res.status(404);
    return next(new Error('Not Found'));
  });

  app.use( (err, req, res, next) => {

    const { status = 500, message } = err;
    if (NODE_ENV === 'test') {
      console.err(err.stack);
    }

    res.status(status);
    res.jsonp({message, status});

  });

  return app;

};
