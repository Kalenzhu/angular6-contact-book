'use strict';

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/server');
let should = chai.should();
chai.use(chaiHttp);

describe('Contacts', () => {
  /*
  * Test the /POST route
  */
  describe('/POST contact', () => {
    it('it should POST a new contact', (done) => {
      let contact = {
        firstName: 'varun',
        lastName: 'sukheja',
        phoneNumber: 1234567890,
        email: 'sukheja.varun@gmail.com',
      };
      let res = {
        firstName: 'varun',
        lastName: 'sukheja',
        phoneNumber: 1234567890,
        email: 'sukheja.varun@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1};
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(200);
          response.body.should.eql(res);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
  });
  /*
  * Test the /GET route
  */
  describe('/GET contact', () => {
    it('it should GET all the contacts', (done) => {
      let res = [{firstName: 'varun',
        lastName: 'sukheja',
        phoneNumber: 1234567890,
        email: 'sukheja.varun@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1}];
      chai.request(server)
        .get('/api/Contacts')
        .then(function(response) {
          response.should.have.status(200);
          response.body.should.have.length(1);
          response.body.should.eql(res);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
  });

  after(() => {
    // After all test we empty the database
    let fs = require('fs');
    let fileToRemove = 'data/test-data.json';
    fs.unlink(fileToRemove, function(err) {
      if (err && err.code == 'ENOENT') {
        // file doesn't exist
        console.info('File does not exist');
      } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error('Error occurred while trying to remove DB file');
      } else {
        console.info('removed DB file');
      }
    });
  });
});
