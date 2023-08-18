// 206. Reverse Linked List
// Easy
// 19.2K
// 347
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

// Accepted
// 3.3M
// Submissions
// 4.4M
// Acceptance Rate
// 74.5%


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    
    if (head == null || head.next == null) {
        return head;
    }
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))); // 5 -> 4 -> 3 -> 2 -> 1 -> null