class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstValues(root) {
  if (!root) return [];
  const stack = [root];
  const values = [];
  while (stack.length) {
    const node = stack.pop();
    values.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return values;
}

function depthFirstRecursiveValues(root) {
  if (!root) return [];
  const leftValues = depthFirstRecursiveValues(root.left);
  const rightValues = depthFirstRecursiveValues(root.right);
  return [root.value, ...leftValues, ...rightValues];
}

function breadthFirstValues(root) {
  if(!root) return [];
  const queue = [root];
  const values = [];
  while(queue.length) {
    const currentNode = queue.shift();
    values.push(currentNode.value);

    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }

  return values;
}

const a = new Node(12);
const b = new Node(13);
const c = new Node(4);
const d = new Node(2);
const e = new Node(1);
const f = new Node(-10);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breadthFirstValues(a));
