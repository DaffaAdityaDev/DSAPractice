// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let Vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (Vowel.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(getCount("abracadabra")); // 5