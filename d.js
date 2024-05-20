function increamParlor(m, arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === m) {
            result.push(i + 1, j + 1)
        }
        }
    }
    return result
  
}

console.log(increamParlor(4, [1, 4, 5, 3, 2])) // [1, 4]
console.log(increamParlor(4, [2, 2, 4, 3])) // [1, 2]