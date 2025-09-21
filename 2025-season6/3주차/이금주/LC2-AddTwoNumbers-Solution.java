/*
최종 복잡도 정리
시간복잡도
- 초기 변수 설정: O(1) + O(1) + O(1) = O(3)
- while 루프: O(max(n, m))번 반복 × (O(1) + O(1) + … ≈ O(8)) → O(8 × max(n, m)) = O(max(n, m)) : 참고로 n은 l1의 길이 m은 l2의 길이
- return : O(1)
- 전체 시간복잡도: O(3) + O(8 × max(n, m)) + O(1) = O(8 × max(n, m) + 4) = O(max(n, m))
공간복잡도
- 추가 변수 : dummy, tail, carry, x, y, sum, digit = O(7)
- while 루프: 반복해도 새로운 “추가 변수” 없음 (포인터 이동만) → O(0)
- return: O(1)
- 전체 공간복잡도: = O(7+1) = O(8) = O(1)   (prev, curr, next 포인터만 추가 사용)
*/

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);  // TC: O(1), SC: O(1)
        ListNode tail = dummy; // 포인터、 TC: O(1), SC: O(1)
        int carry = 0; //자리올림、 TC: O(1), SC: O(1)

        // 두 리스트가 끝나고 carry가 0이 될 때까지 반복
        while(l1 != null || l2 !=null || carry != 0){ //최대 max(n,m)+1번 반복
            //현재 자리값 꺼내기
            int x = (l1 != null) ? l1.val : 0; // TC: O(1), SC: O(1)
            int y = (l2 != null) ? l2.val : 0; // TC: O(1), SC: O(1)

            // 합과 새로운 자리올림 계산
            int sum = x + y + carry; // TC: O(1), SC: O(1)
            carry = sum / 10; // TC: O(1), SC: O(1)
            int digit = sum % 10; // TC: O(1), SC: O(1)

            // 결과 자릿수 노드로 이어붙이기
            tail.next = new ListNode(digit); // TC: O(1), SC: O(1)
            tail = tail.next; // TC: O(1), SC: O(1)

            //포인터 전진
            if(l1 != null) l1 = l1.next; // TC: O(1)
            if(l2 != null) l2 = l2.next; // TC: O(1)
        }
        return dummy.next; // TC: O(1), SC: O(1)
    }
}