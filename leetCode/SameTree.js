// 100. Same Tree
// Easy
// 9.6K
// 191
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104
// Accepted
// 1.6M
// Submissions
// 2.7M
// Acceptance Rate
// 58.7%



var isSameTree = (p, q) =>　{
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  
}


// console.log(isSameTree(
//     {
//         val: 1,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     },
//     {
//         val: 1,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 3,
//             left: null,
//             right: null
//         }
//     }
// )) // true


// console.log(isSameTree(
//     {
//         val: 1,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     {
//         val: 1,
//         left: null,
//         right: {
//             val: 2,
//             left: null,
//             right: null
//         }
//     }
// )) // false

// console.log(isSameTree(
//     {
//         val: 1,
//         left: {
//             val: 2,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     {
//         val: 1,
//         left: null,
//         right: {
//             val: 2,
//             left: null,
//             right: null
//         }
//     }
// )) // false

export default isSameTree
