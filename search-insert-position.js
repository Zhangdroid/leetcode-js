// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  } else {
    var length = nums.length;
    for (var i = 0; i < length; i++) {
      if (target < nums[i] && nums[i] !== nums[i + 1]) {
        return i;
      }
    }
    return length;
  }
};

var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var mid = parseInt((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};