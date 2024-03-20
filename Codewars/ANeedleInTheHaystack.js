
// A Needle in the Haystack
// 111031191% of 10,97566,104 of 151,551andrewMacmurray5 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    // your code here
    let index = 0
    haystack.forEach(e=> {
        if (e === 'needle') {
        index = haystack.indexOf(e)
        }
    })

    return `found the needle at position ${index}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3') // found the needle at position 3
console.log(findNeedle(['3', '123124234', undefined, 'world', 'hay', 2, '3', true, false, 'needle']), 'found the needle at position 9') // found the needle at position 9
console.log(findNeedle(['3', '123124234', undefined, 'world', 'hay', 2, '3', true, false, 'needle', 'needle']), 'found the needle at position 9') // found the needle at position 9