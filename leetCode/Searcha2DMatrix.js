// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        let middle = Math.floor(matrix[i].length / 2)
        let pointerLeft = 0
        let pointerRight = matrix[i].length - 1
        
        while (pointerLeft <= pointerRight) {
          if (matrix[i][middle] === target) return true
          if (matrix[i][middle] < target) pointerLeft = middle + 1
          if (matrix[i][middle] > target) pointerRight = middle - 1
          middle = Math.floor((pointerLeft + pointerRight) / 2)
        }
      }

    return false
 };