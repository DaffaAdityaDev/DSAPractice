// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// StringsFundamentals

function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase().split('')
        .filter(char => alphabet.includes(char))
        .map(char => alphabet.indexOf(char) + 1)
        .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
console.log(alphabetPosition("Welcome.")); // 23 5 12 3 15 13 5
console.log(alphabetPosition("The quick brown fox jumps over the lazy dog.")); // 20 8 5 17 21 9 3 11 2 18 15 23 14 6 15 24 10 21 13 16 19 15 22 5 18 20 8 5 12 1 26 25 4 15 7