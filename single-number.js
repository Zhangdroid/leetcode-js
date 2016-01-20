// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();
  for (var i = 0; i < (nums.length - 1) / 2; i++) {
    if (nums[2 * i] !== nums[2 * i + 1]) {
      return nums[2 * i];
    }
  }
  return nums[nums.length - 1];
};