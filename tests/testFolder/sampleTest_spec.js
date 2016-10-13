var frisby = require('frisby');
var chai = require('chai');
var assert = require('chai').assert;
var expect = require('chai').expect;

var destinationURL = 'https://jsonplaceholder.typicode.com/users'
var testName = 'Sample Test'


/** 
This is an example of a working jasmin test
Feel free to change anything in this file and inspect the error message in your logs
**/

frisby.create(testName)
  .get(destinationURL)
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json; charset=utf-8')

.expectJSONTypes('*', {
  id: Number,
  name: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String
    }
})

.expectJSON('?', {
  username: 'Antonette'
})

.toss();