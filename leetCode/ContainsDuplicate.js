// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(arr) {
    let arrSet = new Set(); //0(n) 
    for(let i = 0; i < arr.length; i++) { //0(n)
        if(arrSet.has(arr[i])) {
            return true;
        }
        arrSet.add(arr[i]);
    }
    return false;
};

// console.log(containsDuplicate([1,2,3,1])); // true
// console.log(containsDuplicate([1,2,3,4])); // false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true

export default containsDuplicate;