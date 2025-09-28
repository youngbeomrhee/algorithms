/*
최종 복잡도 정리
시간복잡도
- 초기 변수 설정: O(1) + O(1) = O(2)
- while 루프:
    - 조건 확인: O(1)
    - 루프 내부: a, b 포인터 생성 O(2) + 링크 스왑 O(3) + prev 이동 O(1) = O(6)
    - 반복 횟수 = n/2번 ≈ O(n)
→ 전체 루프 = O(7 × n/2) = O(n)
- return : O(1)
- 전체 시간복잡도: O(2) + O(n) + O(1) = O(n + 3) → 최종: O(n)

공간복잡도
- 추가 변수 : dummy, prev, a, b = 4개 포인터 → O(4)
- while 루프: 포인터 재활용  → O(0)
- return: O(1)
- 전체 공간복잡도: = O(4 + 1) = O(5) = O(1)
*/

class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(-1, head); // TC: O(1), SC: O(1)
        ListNode prev = dummy; //prev는 [a, b] 앞을 가리키는 포인터 TC: O(1), SC: O(1)

        // 두 개 씩 있을 때만 스왑 가능하며, prev.next = a / a.next = b
        while(prev.next != null && prev.next.next != null){  // 최대 n/2번 반복
            ListNode a = prev.next; // TC: O(1), SC: O(1)
            ListNode b = a.next; // TC: O(1), SC: O(1)

            // 스왑, 이미 존재하는 노드의 포인터(next)를 바꿔주는 작업이라 공간 복잡도 x
            a.next = b.next; // a-> b 다음으로 TC: O(1)
            b.next = a; // b-> a TC: O(1)
            prev.next = b; // prev -> b TC: O(1)

            // 다음 쌍으로 이동
            prev = a; //TC: O(1)
        }

        return dummy.next; // TC: O(1), SC: O(1)
    }
}