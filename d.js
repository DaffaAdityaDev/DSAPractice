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

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false 