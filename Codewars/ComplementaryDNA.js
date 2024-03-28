// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
    let complementaryStrand = '';
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                complementaryStrand += 'T';
                break;
            case 'T':
                complementaryStrand += 'A';
                break;
            case 'C':
                complementaryStrand += 'G';
                break;
            case 'G':
                complementaryStrand += 'C';
                break;
        }
    }
    return complementaryStrand;
}

console.log(dnaStrand("ATTGC")) // TAACG
console.log(dnaStrand("GTAT")) // CATA