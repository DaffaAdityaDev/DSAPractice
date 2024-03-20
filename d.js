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