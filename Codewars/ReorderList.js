// 143. Reorder List
// Solved
// Medium
// Topics
// Companies
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


var reorderList = function(head) {
    if (!head || !head.next) return;

    const mid = findMid(head);
    const secondHalf = reverse(mid.next);
    mid.next = null; // Split the list into two halves
    merge(head, secondHalf);
};

// Function to find the middle of the linked list
const findMid = (head) => {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// Function to reverse a linked list
const reverse = (head) => {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// Function to merge two halves of the linked list
const merge = (head1, head2) => {
    let first = head1, second = head2;
    while (second) {
        let next1 = first.next;
        let next2 = second.next;

        first.next = second;
        if (!next1) break; // If the first list is shorter, break the loop
        second.next = next1;

        first = next1;
        second = next2;
    }
};

function constructLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const printLinkedList = (head) => {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
};

let head = constructLinkedList([1,2,3,4,5]);
reorderList(head);
printLinkedList(head); // [1,5,2,4,3]

let head2 = constructLinkedList([1,2,3,4,5,6]);
reorderList(head2);
printLinkedList(head2); // [1,6,2,5,3,4]

let head3 = constructLinkedList([1,2,3,4]);
reorderList(head3);
printLinkedList(head3); // [1,4,2,3]