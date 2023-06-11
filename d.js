

function maxArea(nums) {
    let maxArea = -Infinity
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const area = Math.min(nums[left], nums[right]) * (right - left)
        maxArea = Math.max(maxArea, area)

        if (nums[left] < nums[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));