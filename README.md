## Synopsis

This example project contains a description of a simple contract test suite which runs in a matter of seconds and can be used to validate an API or JSON endpoint

Included in the project is an example of a test using assert and expect from chai with a description of each step
It also includes a working example test so you can try it yourself and see the logs produced from running these tests.

## Requirements

The contract tests require node.js to be installed on the machine and also depends on the extension in the package.json file. 


 - To install these extensions run the command 'npm install' from within this directory.

## Tests

 To run the tests, from inside the root of this folder run the command `jasmine-node --verbose tests` 
 This will run the tests and print a log of the results, if you have xcpretty installed these will display in colour.


 - When creating a new test, it will only run if it follows the format [Your text]_spec.js


 - Define your folder structure in the spec/support/json file, this will be used to excecute your tests


 - These can be run at manually or you can run at certain intervals using a cron job


