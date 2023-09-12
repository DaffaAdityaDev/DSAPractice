// 347. Top K Frequent Elements
// Medium
// 14.5K
// 514
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

var topKFrequent = function(nums, k) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i])
            map.set(nums[i], count + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    let result = [...map.entries()].sort((a, b) => b[1] - a[1])
    let final = []
    for (let i = 0; i < k; i++) {
        final.push(result[i][0])
    }
   
    return final
    
};

// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([1], 1))
// console.log(topKFrequent([1,2], 2))

export default topKFrequent