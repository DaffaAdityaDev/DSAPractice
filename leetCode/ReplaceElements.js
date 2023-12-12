var replaceElements = function(arr) {
    let maxSoFar = -1;
    let result = new Array(arr.length);

    for(let i = arr.length - 1; i >= 0; i--) {
        result[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, arr[i]);
    }

    result[arr.length - 1] = -1;

    return result;
};

console.log(replaceElements([17,18,5,4,6,1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]
console.log(replaceElements([400, 401])); // [401, -1]