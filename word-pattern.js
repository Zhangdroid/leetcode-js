// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arrPattern = pattern.split('');
  var arrStr = str.split(' ');
  if (arrPattern.length !== arrStr.length) {
    return false;
  }
  var table = {};
  var selected = [];
  for (var i = 0; i < arrPattern.length; i++) {
    if (!table.hasOwnProperty(arrPattern[i]) && selected.indexOf(arrStr[i]) === -1) {
      table[arrPattern[i]] = arrStr[i];
      selected.push(arrStr[i]);
    } else {
      if (table[arrPattern[i]] !== arrStr[i]) {
        return false;
      }
    }
  }
  return true;
};