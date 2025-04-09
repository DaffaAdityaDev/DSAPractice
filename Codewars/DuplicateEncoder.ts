// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
export function duplicateEncode(str: string) {
  const lowerCaseWord : any = str.toLowerCase()
  const hashMap = new Map()
  let result = ''
  

  for (const char of lowerCaseWord) {
    hashMap.set(char, (hashMap.get(char) ?? 0) + 1)
  }

  for (const char of lowerCaseWord) {
    result += hashMap.get(char) === 1 ? "(" : ")"
  }

  return result
}

console.log(duplicateEncode("din")) // "((("
console.log(duplicateEncode("recede")) // "()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("(( @")) // "))((" 