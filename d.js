function printerError(s) {
  // your code
  const validsChars = 'abcdefghijklm'
  let errors = 0

  for (let i = 0; i < s.length; i++) {
    if (!validsChars.includes(s[i])) {
      errors++
    }
  }

  return `${errors}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjm")) // 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")) // 8/22