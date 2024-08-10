function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase().split('')
        .filter(char => alphabet.includes(char))
        .map(char => alphabet.indexOf(char) + 1)
        .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11