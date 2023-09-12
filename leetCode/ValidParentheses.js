// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
 
var isValid = function(s) {
    let Stack = []
    let mapOposite ={
        '(':')',
        '[':']',
        '{':'}'
    }
     
    for (let i = 0; i < s.length; i++) { //0(n)
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            Stack.push(s[i])
        } else {
            let last = Stack.pop()
            if (s[i] !== mapOposite[last]) return false
        }
    }

    if (Stack.length !== 0) return false
    return true
 };

// console.log(isValid("()")) // true
// console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false

export default isValid