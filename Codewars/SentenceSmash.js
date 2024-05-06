// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
    if (words.length === 0) return ''
    if (words.length === 1) return words[0]
    return words.join(' ')
}

console.log(smash(['hello', 'world'])) // [ 'hello', 'world' ] => 'hello world'
console.log(smash(['hello', 'world', 'this', 'is', 'great'])) // [ 'hello', 'world', 'this', 'is', 'great' ] => 'hello world this is great'
console.log(smash([])) // [] => ''