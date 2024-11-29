#!/usr/bin/node

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(response => {
      expect(response.data).to.equal('Successful response from the API');
      done();
    }).catch(done);
  });
});
