// 79. Word Search
// Solved
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    // Helper function to perform DFS
    function dfs(index, row, col) {
        // If the index matches the word length, we have found the word
        if (index === word.length) return true;
        // If out of bounds or not a match, return false
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) return false;
        
        // Mark the current cell as visited by replacing the character with a placeholder
        let temp = board[row][col];
        board[row][col] = '#';
        
        // Explore all possible directions: up, down, left, right
        let found = dfs(index + 1, row + 1, col) ||
                    dfs(index + 1, row - 1, col) ||
                    dfs(index + 1, row, col + 1) ||
                    dfs(index + 1, row, col - 1);
        
        // Restore the original character after exploring
        board[row][col] = temp;
        
        return found;
    }
    
    // Iterate over the board to find the starting point of the word
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the first letter matches and DFS finds the word, return true
            if (board[i][j] === word[0] && dfs(0, i, j)) {
                return true;
            }
        }
    }
    
    // If the word is not found, return false
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED") === true); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE") === true); // true


