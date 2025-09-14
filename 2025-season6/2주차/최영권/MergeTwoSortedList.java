// https://leetcode.com/problems/merge-two-sorted-lists/description/
public class MergeTwoSortedList {
    public static void main(String[] args) {
        MergeTwoSortedList mergeTwoSortedList = new MergeTwoSortedList();
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))));

        System.out.println("mergeTwoSortedList.mergeTwoLists(l1, l2) = " + mergeTwoSortedList.mergeTwoLists(l1, l2));
        System.out.println("mergeTwoSortedList.mergeTwoLists(l1, l2) = " + mergeTwoSortedList.mergeTwoLists(null, null));
    }

    /*
     * (m은 list1의 노드 개수, n은 list2의 노드 개수라고 했을 때)
     * 전체 시간복잡도: O(m + n) -> O(m + n)
     * 전체 공간복잡도(Space Complexity): O(1) + O(1) + O(m + n) + O(1) + O(1) -> O(m + n)
     */
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode merge = new ListNode(-1000); // TC: O(1)
        ListNode head = merge; // TC: O(1)

        // 두개의 연결 리스트를 앞에서부터 비교하면서 새로운 리스트에 추가하면서 병합 정렬
        while (list1 != null && list2 != null) { // TC: O(m + n)
            int val1 = list1.val;
            int val2 = list2.val;
            if (val1 < val2) {
                merge.val = val1;
                list1 = list1.next;
            } else {
                merge.val = val2;
                list2 = list2.next;
            }
            merge.next = new ListNode();
            merge = merge.next;
        }

        // 아직 정렬에 포함되지 않은 리스트 요소가 있으면 추가
        if (list1 != null) {
            merge.val = list1.val;
            merge.next = list1.next;
        } else if (list2 != null) {
            merge.val = list2.val;
            merge.next = list2.next;
        }
        return head.val == -1000 ? null : head; // TC: O(1)
    }

    // Definition for singly-linked list.
    public static class ListNode {
        @Override
        public String toString() {
            return "ListNode{" +
                    "val=" + val +
                    ", next=" + next +
                    '}';
        }

        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
}

