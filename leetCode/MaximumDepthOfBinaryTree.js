// 104. Maximum Depth of Binary Tree
// Easy
// 11K
// 177
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


var maxDepth = (root) =>　{
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    console.log(left, right);

    return Math.max(left, right) + 1;
}


console.log(maxDepth({
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
})); // 3

console.log(maxDepth({
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null
    }
})); // 2

export default maxDepth;