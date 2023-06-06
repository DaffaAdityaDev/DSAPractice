

function Longest(arr) {
    arr.sort((a,b) => a - b)
    let answer = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i+1]) {
            answer = arr[i+1]
        }
    }

    return answer
    
}

console.log(Longest([100,4,200,1,3,2]))

