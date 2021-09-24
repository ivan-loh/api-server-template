'use strict';

const chai     = require('chai');
const chaiHttp = require('chai-http');
const app      = require('../../../app');


chai.use(chaiHttp);
chai.should();

describe('controllers-main - /ping', () => {


  it('should pong', () => {

    chai
      .request(app)
      .get('/main/ping')
      .then(res => {
        res.should.have.status(200);
        res.body.should.be('pong');
      });

  });

});
