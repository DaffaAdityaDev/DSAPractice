

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
}));

