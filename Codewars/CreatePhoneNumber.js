function createPhoneNumber(numbers) {
    let firstNum = numbers.splice(0, 3)
    let secondNum = numbers.splice(0, 3)
    let thirdNum = numbers
    return `(${firstNum.join('')}) ${secondNum.join('')}-${thirdNum.join('')}`
    
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])) // (123) 456-7890
console.log(createPhoneNumber([1,1,1,1,1,1,1,1,1,1])) // (111) 111-1111
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])) // (123) 456-7890

