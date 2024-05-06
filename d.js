function smash(words) {
    if (words.length === 0) return ''
    if (words.length === 1) return words[0]
    return words.join(' ')
}

console.log(smash(['hello', 'world'])) // [ 'hello', 'world' ] => 'hello world'
console.log(smash(['hello', 'world', 'this', 'is', 'great'])) // [ 'hello', 'world', 'this', 'is', 'great' ] => 'hello world this is great'
console.log(smash([])) // [] => ''