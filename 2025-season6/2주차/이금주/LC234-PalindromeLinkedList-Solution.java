/*
234. Palindrome Linked List

n = 연결 리스트의 노드 수

전체 시간복잡도(Time Complexity):
O(n) [중간 찾기] + O(n) [뒤집기] + O(n) [비교] + O(1) [기타 상수 연산]
= O(3n + 1) -> O(n)

전체 공간복잡도(Space Complexity):
포인터 변수 7개(first, second, slow, fast, prev, curr, next) + 상수
= O(1)
*/
class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head == null || head.next == null) return true; // // TC: O(1), SC: O(1)

        // [중간 찾기] : fast(2칸), slow(1칸)
        ListNode slow = head, fast = head;
        while(fast != null && fast.next != null){  // TC: O(n/2)
            slow = slow.next;  // TC: O(1)
            fast = fast.next.next;  // TC: O(1)
        }
        // 홀수 길이면 가운데 노드는 비교에서 제외
        if(fast != null) slow = slow.next;  // TC: O(1), SC: O(1)

        //[뒤쪽 절반 뒤집기] : slow 역순화하고, 그 머리를 second로 보관
        // 시간 복잡도 : O(K) 공간복잡도 : O(1)
        ListNode prev = null, curr = slow;
        while(curr !=null){ // TC: O(n/2)
            ListNode next = curr.next; // TC: O(1)
            curr.next = prev; // TC: O(1)
            prev = curr; // TC: O(1)
            curr = next; // TC: O(1)
        }
        ListNode second = prev; // 뒤집힌 두 번째 절반의 head
        ListNode first = head; // 리스트의 맨 앞

      // TC: O(n/2)
        while(second != null){ //뒤쪽 절반 비교
            if(first.val != second.val) return false; // TC: O(1)
            first = first.next; // TC: O(1)
            second = second.next; // TC: O(1)

        }
        return true;
    }
}
