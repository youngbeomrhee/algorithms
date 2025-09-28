/*
최종 복잡도 정리
- 초기 변수 설정: O(1) + O(1) + O(1) = O(3)
- while 루프: O(n)번 반복 × ( O(1) + O(1) + O(1) + O(1) ) → O(n) × O(4) = O(4n)
- return: O(1)
- 전체 시간복잡도: O(3) + O(4n) + O(1) = O(4n + 4) →  O(n)
- 전체 공간복잡도: O(1)   (prev, curr, next 포인터만 추가 사용)
*/

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null; // TC: O(1), SC: O(1)
        ListNode curr = head; // TC: O(1), SC: O(1)
        ListNode next = null;  // TC: O(1), SC: O(1)

        while(curr !=null){    // 최대 n번 반복 → TC: O(n)
            next = curr.next;  // TC: O(1)
            curr.next = prev;  // TC: O(1)
            prev = curr;  // TC: O(1)
            curr = next;  // TC: O(1)
        }
        return prev; // TC: O(1)
    }
}