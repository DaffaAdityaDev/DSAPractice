function squareSum(numbers){
  let newarr = []
  for(i in numbers) {
    newarr.push(numbers[i]**2)
  }
  return newarr.reduce((a, b) => a + b, 0)

}

console.log(squareSum([1,2,2])) // 9
console.log(squareSum([0, 3, 4, 5])) // 50
console.log(squareSum([])) // 0
