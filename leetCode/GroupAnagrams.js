// 49. Group Anagrams
// Medium
// 15.2K
// 435
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

let reorder = (str) => {
    return str.split('').sort((a, b) => a.localeCompare(b)).join('');
}

let groupWords = (words, map) => {
    for (const original of words) {
        const sorted = reorder(original)
        const values = map.get(sorted) || []

        values.push(original)
        map.set(sorted, values)
    }
}

function groupAnagrams(words, map = new Map()) {
    if (!words.length) return [];

    groupWords(words, map)

    return [...map.values()]

}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
// console.log(groupAnagrams([""])); // [['']]
// console.log(groupAnagrams(["a"])); // [['a']]

export default groupAnagrams;
