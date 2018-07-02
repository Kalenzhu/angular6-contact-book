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
        id: 1,
      };
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
      let res = [{
        firstName: 'varun',
        lastName: 'sukheja',
        phoneNumber: 1234567890,
        email: 'sukheja.varun@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1,
      }];
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

  /*
  * Test the /PUT route
  */
  describe('/PUT contact', () => {
    it('it should PUT a new contact', (done) => {
      let contact = {
        firstName: 'Arjun',
        lastName: 'Ranawat',
        phoneNumber: 9876543210,
        email: 'arjun.ranawat@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1,
      };
      let res = {
        firstName: 'Arjun',
        lastName: 'Ranawat',
        phoneNumber: 9876543210,
        email: 'arjun.ranawat@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1,
      };
      chai.request(server)
        .put('/api/Contacts')
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
  * Test the /GET by id route
  */
  describe('/GET contacts/{id}', () => {
    it('it should GET single contact by Id', (done) => {
      let res = {
        firstName: 'Arjun',
        lastName: 'Ranawat',
        phoneNumber: 9876543210,
        email: 'arjun.ranawat@gmail.com',
        isActive: true,
        country: 'India',
        countryCode: '+91',
        id: 1,
      };
      chai.request(server)
        .get('/api/Contacts/1')
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
  * Negative Tests
  */
  describe('/POST contact Negative Tests', () => {
    it('it should fail if first name is missing', (done) => {
      let contact = {
        lastName: 'Paji',
        phoneNumber: 9876543210,
        email: 'karam.paji@gmail.com',
      };
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(422);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
    it('it should fail if phoneNumber is missing', (done) => {
      let contact = {
        firstName: 'karam',
        lastName: 'Paji',
        email: 'karam.paji@gmail.com',
      };
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(422);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
    it('it should fail if phone number is already present', (done) => {
      let contact = {
        firstName: 'Karam',
        lastName: 'Paji',
        phoneNumber: 9876543210,
        email: 'karam.paji@gmail.com',
      };
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(422);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
    it('it should fail if phone number is less than 10 digits', (done) => {
      let contact = {
        firstName: 'Karam',
        lastName: 'Paji',
        phoneNumber: 12345,
        email: 'karam.paji@gmail.com',
      };
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(422);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
    it('it should fail if phone number is more than 10 digits', (done) => {
      let contact = {
        firstName: 'Karam',
        lastName: 'Paji',
        phoneNumber: 123456789012345,
        email: 'karam.paji@gmail.com',
      };
      chai.request(server)
        .post('/api/Contacts')
        .send(contact)
        .then(function(response) {
          response.should.have.status(422);
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
