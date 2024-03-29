// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false 

    return s.split('').sort().join('') ===  t.split('').sort().join('') // 0(n log n)
};

// console.log(isAnagram('anagram', 'nagaram')) // true
// console.log(isAnagram('rat', 'car')) // false

export default isAnagram