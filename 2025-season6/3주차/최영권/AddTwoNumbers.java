package LinkedList;

import LinkedList.Node.ListNode;

import java.math.BigInteger;

public class AddTwoNumbers {

    public static void main(String[] args) {
        AddTwoNumbers addTwoNumbers = new AddTwoNumbers();
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
        ListNode l2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(9))));
//        ListNode l2 = new ListNode();
        ListNode listNode = addTwoNumbers.addTwoNumbers2(l1, l2);
        System.out.println(listNode);
    }

    /*
     * 시간복잡도 : O(max(m, n))
     * - m: l1의 길이, n: l2의 길이
     * - 더 긴 연결리스트의 길이에 비례
     */
    public ListNode addTwoNumbers2(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode head = new ListNode();
        ListNode listNode = head;

        while (l1 != null || l2 != null || carry > 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;

            int sum = val1 + val2 + carry;
            carry = sum / 10;
            listNode.val = sum % 10;

            // 다음 노드가 필요한 경우에만 생성
            if (l1 != null || l2 != null || carry > 0) {
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;

                // 아직 처리할 것이 남아있다면 다음 노드 생성
                if (l1 != null || l2 != null || carry > 0) {
                    listNode.next = new ListNode();
                    listNode = listNode.next;
                }
            }
        }

        return head;
    }

    // solution 1
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        String l1Str = reverse(l1);
        String l2Str = reverse(l2);

        BigInteger l = new BigInteger(l1Str);
        BigInteger l3 = new BigInteger(l2Str);
        BigInteger add = l.add(l3);
        String string = add.toString();
        char[] charArray = string.toCharArray();
        ListNode head = new ListNode();
        ListNode listNode = head;
        for (int i = charArray.length - 1; i >= 0; i--) {
            listNode.val = Character.getNumericValue(charArray[i]);
            if (i != 0) {
                listNode.next = new ListNode();
                listNode = listNode.next;
            }
        }
        return head;
    }

    // 1,2,3,4 -> 4321
    private String reverse(ListNode l1) {
        ListNode prev = null;
        ListNode curr = l1;
        StringBuilder result = new StringBuilder();
        while (curr != null) {
            result.insert(0, curr.val);
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return result.toString();
    }


}
