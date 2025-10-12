
public class ReverseLinkedListII {
    public static void main(String[] args) {
        ReverseLinkedListII linkedListII = new ReverseLinkedListII();
        ListNode listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        ListNode listNode1 = linkedListII.reverseBetween(listNode, 2, 4);
        System.out.println("listNode1 = " + listNode1);
    }

    /**
     * 시간복잡도: 노드의 길이가 n 일때, O(n)
     */
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode leftNode = null;
        ListNode prev = null;
        if (left > 1) {
            leftNode = head;
        }
        for (int i = 1; i < left - 1; ++i) {
            leftNode = leftNode.next;
        }
        ListNode curr = head;

        if (leftNode != null) {
            curr = leftNode.next;
        }

        ListNode nextNode;
        while (left <= right) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
            left++;
        }

        if (leftNode == null) {
            head.next = curr;
            head = prev;
        } else {
            leftNode.next.next = curr;
            leftNode.next = prev;
        }
        return head;
    }
}
