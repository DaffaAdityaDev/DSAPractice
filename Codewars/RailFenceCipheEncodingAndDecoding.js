// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

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
  