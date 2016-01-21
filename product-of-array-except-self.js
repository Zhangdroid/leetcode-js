// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//use division
var productExceptSelf = function(nums) {
  var arr = [];
  var product = 1;
  var zeroNum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      product = product * nums[i];
    } else {
      zeroNum++;
    }
  }
  if (zeroNum === 0) {
    for (var i = 0; i < nums.length; i++) {
      arr[i] = product / nums[i];
    }
  } else if (zeroNum === 1) {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        arr[i] = 0;
      } else {
        arr[i] = product;
      }
    }
  } else {
    for (var i = 0; i < nums.length; i++) {
      arr[i] = 0;
    }
  }
  return arr;
};

//without division, from https://leetcode.com/discuss/46104/simple-java-solution-in-o-n-without-extra-space
var productExceptSelf = function(nums) {
  var size = nums.length;
  var left = 1,
    right = 1;
  var output = [1];
  for (var i = 0; i < size - 1; i++) {
    left *= nums[i];
    output[i + 1] = left;
  }
  for (var i = 0; i < size - 1; i++) {
    right *= nums[size - i - 1];
    output[size - i - 2] *= right;
  }
  return output;
};