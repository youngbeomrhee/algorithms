/*
최종 복잡도 정리
- while 루프: 최대 min(n, m)번 반복 → O(min(n, m))
- 남은 리스트 이어붙이기: O(1)
- 전체 시간복잡도: O(n + m)   (최악의 경우 두 리스트 전체 순회)
- 전체 공간복잡도: O(1)       (dummy, tail 등 포인터 변수만 추가 사용)
*/

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // dummy 노드 생성 : 결과 리스트의 시작을 잡아주기 위함
        ListNode dummy = new ListNode(-1); // TC: O(1), SC: O(1)
        ListNode tail = dummy; // TC: O(1), SC: O(1)

        // 두 리스트를 비교하여 작은 값을 결과에 붙임
        while(list1 !=null && list2 !=null){ // TC: O(min(n, m))
            if(list1.val <= list2.val){  // TC: O(1)
                tail.next = list1;  // TC: O(1)
                list1 = list1.next;  // TC: O(1)
            }
            else{
                tail.next = list2;  // TC: O(1)
                list2 = list2.next;  // TC: O(1)
            }
            tail = tail.next; // 결과 리스트 포인터도 앞으로 이동
        }

        // 남은 리스트 이어붙이기
        if(list1 != null) tail.next = list1;  // TC: O(1)
        if(list2 != null) tail.next = list2;  // TC: O(1)

        //dummy next 반환
        return dummy.next;  // TC: O(1)
    }
}