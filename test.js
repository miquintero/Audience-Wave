require('chai').should();

const products = require('./index.js');

const tests = [
  // test case           solution               description

  [ "hello",       ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'], 'should work for any string in lower-case' ],
  [ "hello world", ['Hello world', 'hEllo world', 'heLlo world', 'helLo world', 'hellO world', 'hello World', 'hello wOrld', 'hello woRld', 'hello worLd', 'hello worlD'],  'should pass over a whitespace' ],

];

describe('Tests', () => tests.map(testCase =>
  it(testCase[2], () => products(testCase[0]).should.eql(testCase[1]))
));
