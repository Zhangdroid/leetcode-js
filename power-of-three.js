// Given an integer, write a function to determine if it is a power of three.

// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0) {
    return false;
  }
  var error = 10e-15;
  var res = Math.log(n) / Math.log(3);
  return Math.abs(res - Math.round(res)) < error;
};