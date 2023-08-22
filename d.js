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