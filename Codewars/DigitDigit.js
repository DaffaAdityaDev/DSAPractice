function squareDigits(num){
    let numberStr = num.toString().split('');
    let digitSquare = numberStr.map(e => e ** 2);
    let finisValue = Number(digitSquare.join(""))
    return finisValue
}

console.log(squareDigits(3212)) // 9414
console.log(squareDigits(2112)) //4114
console.log(squareDigits(0)) // 0