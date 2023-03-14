// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    
    let first = Math.min.apply(null, numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min.apply(null, numbers)
    
    return first + second
      
    
  
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) // 3453455
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13