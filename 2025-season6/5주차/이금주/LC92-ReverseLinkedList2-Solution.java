/*
최종 복잡도 정리

시간복잡도
- 초기 변수 설정: dummy O(1) + prev O(1) = O(2)
- 첫 번째 for 루프:
    - 조건 확인: O(1)
    - 루프 내부: prev 이동 O(1)
    - 반복 횟수: left-1번 ≤ n번
    → 전체 = O(1 × (left-1)) ≤ O(n)
- start 설정: O(1)
- 두 번째 for 루프:
    - 조건 확인: O(1)
    - 루프 내부: temp 생성 O(1) + 링크 변경 O(3) = O(4)
    - 반복 횟수: right-left번 ≤ n번
    → 전체 = O(4 × (right-left)) ≤ O(4n)
- return: O(1)
- 전체 시간복잡도: O(2) + O(left-1) + O(1) + O(4×(right-left)) + O(1)
                 ≤ O(2) + O(n) + O(1) + O(4n) + O(1)
                 = O(5n + 4)
                 → 최종: O(n)

공간복잡도
- 추가 변수: dummy, prev, start, temp = 4개 포인터 → O(4)
- 첫 번째 for 루프: 추가 공간 없음 → O(0)
- 두 번째 for 루프: temp 재활용 → O(0)
- return: O(1)
- 전체 공간복잡도: O(4) + O(0) + O(0) + O(1) = O(5) → 최종: O(1)
*/

class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(-1, head); // TC: O(1), SC: O(1)
        ListNode prev = dummy; // TC: O(1), SC: O(1)
        
        // prev를 left-1 위치까지 이동
        for(int i=0; i<left-1; i++){  // TC: O(left-1) ≤ O(n)
            prev = prev.next;  // TC: O(1)
        }

        ListNode start = prev.next; // TC: O(1), SC: O(1)

        // 뒤집기: right-left번 반복
        for(int i = 0; i < right - left; i++){  // TC: O(right-left) ≤ O(n)
            ListNode temp = start.next; // 이동시킬 노드 TC: O(1), SC: O(1)
            start.next = temp.next; // start를 temp 다음으로 연결 TC: O(1)
            temp.next = prev.next; // temp 맨 앞 삽입 TC: O(1)
            prev.next = temp; // prev와 temp 연결 TC: O(1)
            // 루프 내부 = O(1 + 1 + 1 + 1) = O(4)
        }

        return dummy.next; // TC: O(1), SC: O(1)
    }
}

