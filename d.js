function encodeRailFenceCipher(string, numberRails) {
  // code
  const arr = new Array(numberRails).fill('');
  let rail = 0;
  let direction = 1;
  for (let i = 0; i < string.length; i++) {
    arr[rail] += string[i];
    rail += direction;
    if (rail === numberRails - 1 || rail === 0) {
      direction = -direction;
    }
  }
  return arr.join('');
}

function decodeRailFenceCipher(string, numberRails) {
  let rail = new Array(numberRails).fill().map(() => new Array(string.length).fill('\n'));

  let dir_down = false;
  let row = 0, col = 0;

  for (let i = 0; i < string.length; i++) {
    if (row == 0) dir_down = true;
    if (row == numberRails - 1) dir_down = false;

    rail[row][col++] = '*';

    dir_down ? row++ : row--;
  }

  let index = 0;
  for (let i = 0; i < numberRails; i++) {
    for (let j = 0; j < string.length; j++) {
      if (rail[i][j] == '*' && index < string.length) {
        rail[i][j] = string[index++];
      }
    }
  }

  let result = '';
  row = 0, col = 0;
  for (let i = 0; i < string.length; i++) {
    if (row == 0) dir_down = true;
    if (row == numberRails - 1) dir_down = false;

    if (rail[row][col] != '*') {
      result += rail[row][col++];
    }

    dir_down ? row++ : row--;
  }
  return result;
}

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)); // "WEAREDISCOVEREDFLEEATONCE"