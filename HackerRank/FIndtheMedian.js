// he median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?

// Example

// The sorted array . The middle element and the median is .

// Function Description

// Complete the findMedian function in the editor below.

// findMedian has the following parameter(s):

// int arr[n]: an unsorted array of integers
// Returns

// int: the median of the array
// Input Format

// The first line contains the integer , the size of .
// The second line contains  space-separated integers 

// Constraints

//  is odd
// Sample Input 0

// 7
// 0 1 2 4 6 5 3
// Sample Output 0

// 3

function findMedian(arr) {
    // Write your code here
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3])); // 3
console.log(findMedian([1, 2, 3, 4, 5])); // 3
console.log(findMedian([1, 2, 3, 4, 5, 6])); // 3.5