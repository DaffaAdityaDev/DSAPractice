// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// FUNDAMENTALS

function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length))
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3) // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3) // 3
console.log(findShort("lets talk about javascript the best language"), 3) // 3
