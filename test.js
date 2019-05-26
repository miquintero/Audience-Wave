require('chai').should();

const products = require('./index.js');
const test = [
  [ [1, 2, 3, 4, 5], [120, 60, 40, 30, 24] ],   // should work for arrays of positive integers
  [ [0, 1, 2, 3, 4, 5], [120, 0, 0, 0, 0, 0] ], // should work with a zero in the array
  [ [], [] ],                                   // should work for an empty array
  [ [-3, 2, -1], [-2, 3, -6] ],                 // should work with negative integers
  [ [0, 0], [0, 0] ]                            // should work for an array of zeros
];


describe('Tests', function () {

  it('should work for arrays of positive integers', function () {
    JSON.stringify(products(test[0][0])).should.eql(JSON.stringify(test[0][1]));
  });

  it('should work with a zero in the array', function () {
    JSON.stringify(products(test[1][0])).should.eql(JSON.stringify(test[1][1]));
  });

  it('should work for an empty array', function () {
    JSON.stringify(products(test[2][0])).should.eql(JSON.stringify(test[2][1]));
  });

  it('should work with negative integers', function () {
    JSON.stringify(products(test[3][0])).should.eql(JSON.stringify(test[3][1]));
  });

  it('should work for an array of zeros', function () {
    JSON.stringify(products(test[4][0])).should.eql(JSON.stringify(test[4][1]));
  });

});
