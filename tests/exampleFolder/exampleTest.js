var frisby = require('frisby');
var chai = require('chai');
var assert = require('chai').assert;
var expect = require('chai').expect;

var destinationURL = 'https://jsonplaceholder.typicode.com/posts';
var testName = 'Example Test';

/*
Create a New Frisby Test with a chosen string for the name
This name will be used to identify your test in the logs
*/

frisby.create(testName)
  // define the HTTP method you wish to send to the destination URL
  .get(destinationURL)
  // OPTIONAL - define the expected response code and data type
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json; charset=utf-8')

/**
"expect" methods can test a single object or an array of objects, the rules for passing a parameter are as follows:

 - If you are expecting an array of objects, you can use the index of the object you mean to test by using [arrayName[index]]
 - If you wish to ensure all objects in an array follow a consistent format, you can use the format [arrayName.*]
 - If you wish to ensure that atleast one item in the array, use the format [arrayName.?]
 - If you wish to test a single object, you don't need to provide the objects key or you can leave parameter field out
**/

/**
expectJSON( [path], json )

Tests that response body is JSON and contains the provided JSON keys and values
in the response.
**/
.expectJSON('arrayName.?', {
  expectedKey: 'expectedValue'
})

/**
expectJSONTypes( [path], json )

Identical syntax as expectJSON, but tests the types of the JSON values instead
of the content.

String, Boolean and Number are the only valid values
If you wish to test that an item contains an object, use curly braces as in the example below
**/
.expectJSONTypes('arrayName.*', {
  expectedString: String,
  expectedBoolean: Boolean,
  expectedObject: {
    expectedString: String,
    expectedBoolean: Boolean,
    expectedNumber: Number
  },
  expectedArray: Array
})

/**
Custom Callbacks

Custom Callbacks can be used within the expectJSON method to do more specific
pattern matching depending on your needs.

When a callback is used, Frisby does not run any match for that key. 
The callback either has to return true/false (pass/fail), or can use custom Jasmine 
matchers directly. Custom callbacks are an easy way to use your own Jasmine
matchers or comparison methods in conjunction with Frisby.

The following example tests the values within an array return the expected types
**/

.expectJSON('summaries.*', {
    // Each item in the leafCategoryIds array should be a number
    numberArray: function(val) {
      var arrayCount = val.length;
      for (i = 0; i < arrayCount; i++) {
        expect(val[i]).to.be.a('Number')
      }
    },

    stringArray: function(val) {
      var arrayCount = val.length;
      for (i = 0; i < arrayCount; i++) {
        expect(val[i]).to.be.a('String')
      }
    }
  })
  .toss();

/**
afterJSON()

Callback function to run after test is completed. Helper to also automatically
convert response body to JSON.

This is a good place to use regex to test for specific patterns in your expected string values
**/

.afterJSON(function(body) {
    // Test that the response array is not empty
    expect(body.data.length).to.not.equal(0)

      // Asserts that the the value of a key is a valid jpg/gif/png file
      if (body.data[i].imagePath) {
        assert.match(body.data[i].imagePath, /(?:jpg|gif|png)/)
      }
      // Asserts that the urlVal follows the pattern /Text/Text/..
      if (body.data[i].urlPath) {
        assert.match(body.data[i].urlPath, /(\/[a-zA-Z-_ ]*\/[a-zA-Z-_ ]*\/)/)
      }
    }
  })
  .toss();