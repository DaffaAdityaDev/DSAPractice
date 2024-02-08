// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

// PERMUTATIONSSTRINGSALGORITHMS

function permutations(string) {
    if (string.length === 1) {
      return [string];
    }
  
    const chars = string.split('');
    const result = new Set();
  
    function dfs(chars, start = 0) {
      if (start === chars.length - 1) {
        result.add(chars.join(''));
        return;
      }
  
      for (let i = start; i < chars.length; i++) {
        [chars[start], chars[i]] = [chars[i], chars[start]];
        dfs(chars, start + 1);
        [chars[start], chars[i]] = [chars[i], chars[start]];
      }
    }
  
    dfs(chars);
    return [...result];
}

console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('abc')); // ['abc','acb','bac','bca','cab','cba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']