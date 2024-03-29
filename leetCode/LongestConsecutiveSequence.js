// 128. Longest Consecutive Sequence
// Medium
// 16.3K
// 683
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// Accepted
// 1.1M
// Submissions
// 2.4M
// Acceptance Rate
// 48.2%

var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let max = 0

    for(const num of [...set]) {
        if(set.has(num - 1)) {
            continue
        }
        let [curr, score] = [num, 1]

        while(set.has(curr + 1)) {
            curr += 1
            score += 1
        }
        max = Math.max(max, score)        
    }
    return max
};


// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9
// console.log(longestConsecutive([100,4,200,1,3,2])) // 4
// console.log(longestConsecutive([1,2,0,1])) // 3

export default longestConsecutive;