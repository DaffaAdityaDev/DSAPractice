// 21. Merge Two Sorted Lists
// Easy
// 19.7K
// 1.8K
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
// Accepted
// 3.5M
// Submissions
// 5.5M
// Acceptance Rate
// 63.1%


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next);
}

var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(0);
    var tail = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
            tail = tail.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
            tail = tail.next;
        }
    }
    if (l1 != null) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }
    return dummy.next;

}

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))))); // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null
console.log(mergeTwoLists([])) // []
console.log(mergeTwoLists([0])) // [0]