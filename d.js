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

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));