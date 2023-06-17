

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
}


console.log(substring("abcabcbb")); // 3
console.log(substring("bbbbb")); // 1
console.log(substring("pwwkew")); // 3

