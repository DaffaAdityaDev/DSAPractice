function isValid(str) {
    let Stack = []
    let mapOposite ={
        '(':')',
        '[':']',
        '{':'}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            Stack.push(str[i])
        } else {
            let last = Stack.pop()
            if (str[i] !== mapOposite[last]) return false
        }
    }
    if (Stack.length !== 0) return false
    return true
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false