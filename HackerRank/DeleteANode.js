// This challenge is part of a tutorial track by MyCodeSchool and is accompanied by a video lesson.

// Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

// Example



// After removing the node at position , .

// Function Description

// Complete the deleteNode function in the editor below.

// deleteNode has the following parameters:
// - SinglyLinkedListNode pointer llist: a reference to the head node in the list
// - int position: the position of the node to remove

// Returns
// - SinglyLinkedListNode pointer: a reference to the head of the modified list

// Input Format

// The first line of input contains an integer , the number of elements in the linked list.
// Each of the next  lines contains an integer, the node data values in order.
// The last line contains an integer, , the position of the node to delete.

// Constraints

// , where  is the  element of the linked list.
// Sample Input

// 8
// 20
// 6
// 2
// 19
// 7
// 4
// 15
// 9
// 3
// Sample Output

// 20 6 2 7 4 15 9
// Explanation

// The original list is 20 > 6 > 2 > 19 > 7 > 4 > 15 > 9 . After deleting the node at position , the list is 20 > 6 > 2 > 7 > 4 > 15 > 9.



/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    // Write your code here
    let current = llist
    let previous = null
    let count = 0

    while (current) {
        if (count === position) {
            if (previous) {
                previous.next = current.next
            } else {
                llist = current.next
            }
        }
        previous = current
        current = current.next
        count++
    }
    return llist
}


console.log(deleteNode([20, 6, 2, 19, 7, 4, 15, 9], 1)) // 20 2 19 7 4 15 9
console.log(deleteNode([20, 6, 2, 19, 7, 4, 15, 9], 3)) // 20 6 2 7 4 15 9
console.log(deleteNode([20, 6, 2, 19, 7, 4, 15, 9], 7)) // 20 6 2 19 7 4 15