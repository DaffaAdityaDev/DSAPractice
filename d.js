var replaceElements = function(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let bigest = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > bigest) {
                bigest = arr[j];
            } else if (arr[j] === arr.length - 1) {
                bigest = -1;
            } else {
                continue;
            }
        }
        newArr.push(bigest);
    }

    return newArr;
};

console.log(replaceElements([17,18,5,4,6,1])); // [18,6,6,6,1,-1]