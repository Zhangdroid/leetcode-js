// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Time limit exceeded
var isAnagram = function(s, t) {
  var arrS = s.split('');
  var arrT = t.split('');
  var sLength = s.length;
  var tLength = t.length;
  if (sLength !== tLength) {
    return false;
  }
  for (var i = 0; i < sLength; i++) {
    if (arrS.indexOf(arrT[i]) !== -1) {
      arrS.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
};

var isAnagram = function(s, t) {
  var arrS = s.split('');
  var arrT = t.split('');
  if (s.length !== t.length) {
    return false;
  }
  arrS.sort();
  arrT.sort();
  return arrS.toString() === arrT.toString()
};