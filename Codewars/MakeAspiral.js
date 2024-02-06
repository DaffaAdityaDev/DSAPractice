// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

// ALGORITHMSARRAYSLOGIC

function spiralize(n) {
    return Array(n)
    .fill(Array(n).fill())
    .map((row, i) =>
      row.map((col, j) => {
        return +(
          // top
          (i < n / 2 && i % 2 === 0 && j >= i - 2 && j <= n - i - 1) ||
          // right
          ((n - j) % 2 === 1 && i > n - j - 1 && i <= j) ||
          // bottom
          ((n - i) % 2 === 1 && j > n - i - 1 && j < i) ||
          // left
          (j % 2 === 0 && i > j + 1 && i < n - j)
        );
      })
    );
}
console.log(spiralize(5)); // [ [1,1,1,1,1], [0,0,0,0,1], [1,1,1,0,1], [1,0,0,0,1], [1,1,1,1,1] ]
console.log(spiralize(10)); // [ [1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,1], [1,1,1,1,1,1,1,1,0,1], [1,0,0,0,0,0,0,1,0,1], [1,0,1,1,1,1,0,1,0,1], [1,0,1,0,0,1,0,1,0,1], [1,0,1,0,0,0,0,1,0,1], [1,0,1,1,1,1,1,0,0,1], [1,0,0,0,0,0,0,0,0,1], [1,1,1,1,1,1,1,1,1,1] ]
console.log(spiralize(15)); // [ [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1], [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1], [1,0,1,1,1,1,1,1,1,1,1,0,1,0,1], [1,0,1,0,0,0,0,0,0,0,1,0,1,0,1], [1,0,1,0,1,1,1,1,1,0,1,0,1,0,1], [1,0,1,0,1,0,0,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1] ]