// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

// Sum everything except 1 , the sum is 2 + 3 + 4 + 5 = 14.
// Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
// Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
// Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
// Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.
// Hints: Beware of integer overflow! Use 64-bit Integer.


function miniMaxSum(arr) {
    // Write your code here
    let min = 0
    let max = 0
    let sum = 0
    
    min = arr[0]
    max = min
    sum = min
    
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
            
        }
        
    }
    
    console.log ((sum - max), (sum - min))
}

console.log(miniMaxSum([1, 2, 3, 4, 5])) // 10 14
console.log(miniMaxSum([7, 69, 2, 221, 8974])) // 299 9271

