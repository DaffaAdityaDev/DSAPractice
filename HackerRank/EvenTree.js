// You are given a tree (a simple connected graph with no cycles).

// Find the maximum number of edges you can remove from the tree to get a forest such that each connected component of the forest contains an even number of nodes.

// As an example, the following tree with  nodes can be cut at most  time to create an even forest.

// image

// Function Description

// Complete the evenForest function in the editor below. It should return an integer as described.

// evenForest has the following parameter(s):

// t_nodes: the number of nodes in the tree
// t_edges: the number of undirected edges in the tree
// t_from: start nodes for each edge
// t_to: end nodes for each edge, (Match by index to t_from.)
// Input Format

// The first line of input contains two integers  and , the number of nodes and edges.
// The next  lines contain two integers  and  which specify nodes connected by an edge of the tree. The root of the tree is node .

// Constraints

// Note: The tree in the input will be such that it can always be decomposed into components containing an even number of nodes.  is the set of positive even integers.

// Output Format

// Print the number of removed edges.

// Sample Input 1

// CopyDownload
// Undirected Graph: t
// 2
// 1
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

 
// 10 9
// 2 1
// 3 1
// 4 3
// 5 2
// 6 1
// 7 2
// 8 6
// 9 8
// 10 8
// Sample Output 1

// 2
// Explanation 1

// Remove edges  and  to get the desired result.


// image image

// No more edges can be removed.


// Complete the evenForest function below..
function evenForest(t_nodes, t_edges, t_from, t_to) {
  // Create adjacency list for the tree
  const tree = Array.from({ length: t_nodes + 1 }, () => []);
  for (let i = 0; i < t_edges; i++) {
      const u = t_from[i];
      const v = t_to[i];
      tree[u].push(v);
      tree[v].push(u);
  }

  const sizes = new Array(t_nodes + 1).fill(0);
  dfs(1, -1, tree, sizes); // Start DFS from the root (node 1)

  let removableEdges = 0;
  
  // Check for each node if we can remove an edge (i.e., if its subtree size is even)
  for (let i = 2; i <= t_nodes; i++) { // Starting from node 2 (node 1 is the root)
      if (sizes[i] % 2 === 0) {
          removableEdges++;
      }
  }

  return removableEdges;
}

console.log(evenForest(10, 9, [2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 3, 2, 1, 2, 2, 6, 8])) // 3