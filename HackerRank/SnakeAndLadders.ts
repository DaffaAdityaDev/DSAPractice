// Markov takes out his Snakes and Ladders game, stares at the board and wonders: "If I can always roll the die to whatever number I want, what would be the least number of rolls to reach the destination?"

// Rules The game is played with a cubic die of  faces numbered 1 to 6.

// Starting from square , land on square  with the exact roll of the die. If moving the number rolled would place the player beyond square , no move is made.

// If a player lands at the base of a ladder, the player must climb the ladder. Ladders go up only.

// If a player lands at the mouth of a snake, the player must go down the snake and come out through the tail. Snakes go down only.

// Function Description

// Complete the quickestWayUp function in the editor below. It should return an integer that represents the minimum number of moves required.

// quickestWayUp has the following parameter(s):

// ladders: a 2D integer array where each  contains the start and end cell numbers of a ladder
// snakes: a 2D integer array where each  contains the start and end cell numbers of a snake
// Input Format

// The first line contains the number of tests, .

// For each testcase:
// - The first line contains , the number of ladders.
// - Each of the next  lines contains two space-separated integers, the start and end of a ladder.
// - The next line contains the integer , the number of snakes.
// - Each of the next  lines contains two space-separated integers, the start and end of a snake.

// Constraints



// The board is always  with squares numbered  to .
// Neither square  nor square  will be the starting point of a ladder or snake.
// A square will have at most one endpoint from either a snake or a ladder.

// Output Format

// For each of the t test cases, print the least number of rolls to move from start to finish on a separate line. If there is no solution, print -1.

// Sample Input

// 2
// 3
// 32 62
// 42 68
// 12 98
// 7
// 95 13
// 97 25
// 93 37
// 79 27
// 75 19
// 49 47
// 67 17
// 4
// 8 52
// 6 80
// 26 42
// 2 72
// 9
// 51 19
// 39 11
// 37 29
// 81 3
// 59 5
// 79 23
// 53 7
// 43 33



function quickestWayUp(ladders: number[][], snakes: number[][]): number {
  // Create a map to store ladders and snakes
  const jumps = new Map<number, number>();
  
  // Add ladders to the map
  for (const [start, end] of ladders) {
    jumps.set(start, end);
  }
  
  // Add snakes to the map
  for (const [start, end] of snakes) {
    jumps.set(start, end);
  }
  
  // BFS setup
  const queue: [number, number][] = [[1, 0]]; // [current position, number of rolls]
  const visited = new Array(101).fill(false); // Boolean array to track visited squares
  
  while (queue.length > 0) {
    const [current, rolls] = queue.shift()!;
    
    // If we reach 100, return the number of rolls
    if (current === 100) {
      return rolls;
    }
    
    // Mark the current position as visited
    visited[current] = true;
    
    // Try all possible die rolls (1 to 6)
    for (let i = 1; i <= 6; i++) {
      let next = current + i;
      
      // If the next position has a ladder or snake, jump to the corresponding position
      if (jumps.has(next)) {
        next = jumps.get(next)!;
      }
      
      // If the next position is within the board and not visited, add it to the queue
      if (next <= 100 && !visited[next]) {
        visited[next] = true; // Mark as visited immediately to avoid redundant additions
        queue.push([next, rolls + 1]);
      }
    }
  }
  
  // If we exit the loop, it means we couldn't reach 100
  return -1;
}


console.log(quickestWayUp(
  [
    [32, 62],
    [42, 68],
    [12, 98]
  ],
  [
    [95, 13],
    [97, 25],
    [93, 37],
    [79, 27],
    [75, 19],
    [49, 47],
    [67, 17],
    [8, 52],
    [6, 80],
    [26, 42],
    [2, 72],
    [9, 51],
    [39, 11],
    [37, 29],
    [81, 3],
    [59, 5],
    [79, 23],
    [53, 7],
    [43, 33],
    [77, 21]
  ]
)) // 3 5