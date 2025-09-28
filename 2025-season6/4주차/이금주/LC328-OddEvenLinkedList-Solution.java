/*
최종 복잡도 정리
시간복잡도
- 초기 변수 설정: odd, even, evenHead → O(1) + O(1) + O(1) = O(3)
- while 루프: n/2번 반복 × (링크 조작 2회 + 포인터 이동 2회 = O(4))
→ O(4 × n/2) = O(2n) ≈ O(n)
- return : O(1)
- 전체 시간복잡도: O(3) + O(n) + O(1) = O(n + 4) → 최종 O(n)

공간복잡도
- 추가 변수 : odd, even, evenHead = 3개 포인터 → O(3)
- while 루프: 포인터 재활용  → O(0)
- return: O(1)
- 전체 공간복잡도: = O(3 + 1) = O(4) → 최종 O(1)
*/
class Solution {
    public ListNode oddEvenList(ListNode head) {
        // 길이 0/1은 그대로
        if(head == null || head.next == null) return head; // TC: O(1), SC: O(1)

        // 홀수, 짝수 시작 포인터와 짝수 시작을 기억해둘 포인터
        ListNode odd = head; // 1번째 홀수 인덱스 부터 TC: O(1), SC: O(1)
        ListNode even = head.next; // 2번째 짝수 인덱스 부터 TC: O(1), SC: O(1)
        ListNode evenHead = even; //나중에 odd 끝에 붙이기 위한 것 TC: O(1), SC: O(1)

        // 한 칸씩 건너뛰며 홀수 리스트와 짝수 리스트를 각각 연결
        while(even != null && even.next != null){
            odd.next = even.next; //홀수 다음 홀수로 이동 TC: O(1)
            odd = odd.next; // TC: O(1)

            even.next = odd.next; //짝수 다음 짝수로 이동 TC: O(1)
            even = even.next; // TC: O(1)
        }

        //홀수 리스트 뒤에 짝수 리스트 이어 붙이기
        odd.next = evenHead; // TC: O(1), SC: O(1)
        return head; // TC: O(1), SC: O(1)

    }
}