// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
//slow
var containsDuplicate = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      return true;
    }
  }
  return false;
};

var containsDuplicate = function(nums) {
  var hashTable = {};
  for (var i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      return true;
    }
    hashTable[nums[i]] = true;
  }
  return false;
};