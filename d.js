// function permutations(string) {
//   if (string.length === 1) {
//     return [string];
//   }
//   const result = [];
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     const remainingChars = string.slice(0, i) + string.slice(i + 1);
//     for (const subPermutation of permutations(remainingChars)) {
//       result.push(char + subPermutation);
//     }
//   }
//   return result;

// }

// console.log(permutations('ab')); // ['ab', 'ba']

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