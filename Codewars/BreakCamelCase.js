function BreakCamelCase(string) {
    reg = string.replace(/([A-Z])/g, ' $1').trim()
    return reg
}

console.log(BreakCamelCase("camelCasing")) // camel Casing
console.log(BreakCamelCase("identifier")) // identifier
console.log(BreakCamelCase("")) // ""