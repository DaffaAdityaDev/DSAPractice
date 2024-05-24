// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of '',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in stringList.

// matchingStrings has the following parameters:

// string stringList[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query

function matchingStrings(stringList, queries) {
    // Create a frequency map for stringList
    const frequencyMap = {};
    for (const str of stringList) {
        if (frequencyMap[str]) {
            frequencyMap[str]++;
        } else {
            frequencyMap[str] = 1;
        }
    }

    // Create the result array based on the frequency map
    const result = [];
    for (const query of queries) {
        result.push(frequencyMap[query] || 0);
    }

    return result;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])) // [2, 1, 0]
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])) // [1, 0, 1]