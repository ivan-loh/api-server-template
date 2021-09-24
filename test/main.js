'use strict';

const chai     = require('chai');
const chaiHttp = require('chai-http');
const app      = require('../app');


chai.use(chaiHttp);
chai.should();

describe('main', () => {

  it('should be 404', () => {

    chai
      .request(app)
      .get('/some-non-existant-url-to-force-the-404')
      .then(res => {
        res.should.have.status(404);
      });

  });

});
