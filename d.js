function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let cipherText = '';
        for (let i = 0; i < str.length; i++) {
            let row = abc.indexOf(key[i % key.length]);
            let col = abc.indexOf(str[i]);
            if (abc.indexOf(col) >= 0) {
                cipherText += abc[(row + col) % abc.length];
            } else {
                cipherText += str[i];
            }
        }
        return str === str.toUpperCase() ? cipherText.toUpperCase() : cipherText;
    }
        
    this.decode = function (str) {
        let deCipherText = '';
        for (let i = 0; i < str.length; i++) {
            let row = abc.indexOf(key[i % key.length]);
            let col = abc.indexOf(str[i]);
            if (abc.indexOf(col) >= 0) {
                deCipherText += abc[(col - row + abc.length) % abc.length];
            } else {
                deCipherText += str[i];
            }
        }
        return str === str.toUpperCase() ? deCipherText.toUpperCase() : deCipherText;
    };
}

console.log(new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz').encode('codewars')); // returns 'rovwsoiv'
console.log(new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz').decode('rovwsoiv')); // returns 'codewars'
console.log(new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz').encode('CODEWARS')); // returns 'ROVWSOIV'
console.log(new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz').decode('ROVWSOIV')); // returns 'CODEWARS'