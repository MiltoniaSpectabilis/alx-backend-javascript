#!/usr/bin/node

const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  it('should return correct status code and message', function(done) {
    request('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
