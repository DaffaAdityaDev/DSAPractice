// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function expression(num, oper) {
    if(!oper) 
      return num
    return oper(num)
}
  
function zero(n) {return expression(0, n)}
function one(n) {return expression(1, n)}
function two(n) {return expression(2, n)}
function three(n) {return expression(3, n)}
function four(n) {return expression(4, n)}
function five(n) {return expression(5, n)}
function six(n) {return expression(6, n)}
function seven(n) {return expression(7, n)}
function eight(n) {return expression(8, n)}
function nine(n) {return expression(9, n)}

function plus(x) { 
    return function(y) {
        return y + x
}}
function minus(x) {
    return function(y) {
        return y - x
}}
function times(x) {
    return function(y) {
        return y * x
}}
function dividedBy(x) {
    return function(y) {
        return Math.floor(y / x)
}}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3