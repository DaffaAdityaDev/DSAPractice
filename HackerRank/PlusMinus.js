function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
  
    // Calculate ratios
    const posRatio = (positive / arr.length).toFixed(6);
    const negRatio = (negative / arr.length).toFixed(6);
    const zeroRatio = (zero / arr.length).toFixed(6);
  
    // Print each ratio on a new line
    console.log(posRatio);
    console.log(negRatio);
    console.log(zeroRatio);
}
  
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])) // 0.500000, 0.333333, 0.166667
console.log(plusMinus([-4, 3, -9, 0, 4, 1])) // 0.500000, 0.333333, 0.166667
console.log(plusMinus([1, 1, 0, -1, -1])) // 0.400000, 0.400000, 0.200000
  