

var search = (nums, target) =>　{
    if (nums.length === 0) return -1;
    
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;
        left++;
        right--;
    }

    return -1;
};


console.log(search([4,5,6,7,0,1,2], 0));  // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1

