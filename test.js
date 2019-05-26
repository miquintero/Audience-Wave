require('chai').should();

const products = require('./index.js');

const tests = [
  // test case           solution               description
  [ [1, 2, 3, 4, 5],    [120, 60, 40, 30, 24], 'should work for arrays of positive integers' ],
  [ [0, 1, 2, 3, 4, 5], [120, 0, 0, 0, 0, 0],  'should work with a zero in the array' ],
  [ [],                 [],                    'should work for an empty array' ],
  [ [-3, 2, -1],        [-2, 3, -6],           'should work with negative integers' ],
  [ [0, 0],             [0, 0],                'should work for an array of zeros' ]
];

describe('Tests', () => tests.map(testCase =>
  it(testCase[2], () => products(testCase[0]).should.eql(testCase[1]))
));
