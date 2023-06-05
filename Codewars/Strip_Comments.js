function solution(input, markers) {


    let inputArr = input.split('\n')
    let output = []
    for (let i = 0; i < inputArr.length; i++) {
      
      for (let j = 0; j < markers.length; j++) {
        if (inputArr[i].includes(markers[j])) {
          inputArr[i] = inputArr[i].slice(0, inputArr[i].indexOf(markers[j]))
        }
      }
      output.push(inputArr[i].trim())
    }
    input = output.join('\n')

    return input
    
  };

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))