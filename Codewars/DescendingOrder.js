// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //...
    const digitCount = new Map()
    let num = n
    while (num > 0) {
      const digit = num % 10 
      digitCount.set(digit, (digitCount.get(digit) || 0) + 1)
      num = Math.floor(num / 10)
    }
  
    let result = 0
    for (let i = 9; i >= 0; i--) {
      if (digitCount.has(i)) {
        for (let j = 0; j < digitCount.get(i); j++) {
          result = result * 10 + i
        }
      }
    }
    return result
  
  }