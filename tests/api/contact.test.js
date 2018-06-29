'use strict';

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/server');
let should = chai.should();
chai.use(chaiHttp);

// Model to test
let Contact = require('../../common/models/contact');

describe('Contacts', () => {
  beforeEach((done) => {
    // Before each test we empty the database
    // Contact.remove({}, (err) => {
    //   done();
    // });
    done();
  });

  /*
  * Test the /GET route
  */
  describe('/GET contact', () => {
    it('it should GET all the contacts', (done) => {
      chai.request(server)
        .get('/api/Contacts')
        .then(function(response) {
          response.should.have.status(200);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
  });
});
