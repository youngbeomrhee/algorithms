import java.util.*;

// https://leetcode.com/problems/palindrome-linked-list/
public class PalindromeLinkedList {

    /*
     * 개선버전 - 투 포인터와 링크드 리스트 뒤집기 활용
     * (n은 연결 리스트의 노드 개수라고 했을 때)
     * 전체 시간복잡도(Time Complexity): O(n/2) + O(n/2) + O(n/2) -> O(n)
     * 전체 공간복잡도(Space Complexity): O(1)
     */
    public boolean isPalindrome2(ListNode head) {
        if (head == null || head.next == null) return true;

        // 1단계: 중간점 찾기 (빠른 포인터, 느린 포인터)
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) { // TC: O(n/2) - fast가 2칸씩 이동하므로 n/2번 반복
            slow = slow.next;      // 1칸 이동
            fast = fast.next.next; // 2칸 이동
        }

        // 2단계: slow부터 끝까지 뒤집기
        ListNode prev = null;
        ListNode current = slow;
        ListNode next = null;

        while (current != null) { // TC: O(n/2) - 리스트의 뒤쪽 절반만 순회, 뒤쪽의 절반의 순서를 바꾸기 위함
            next = current.next;     // 다음 노드 저장
            current.next = prev;     // 화살표 뒤집기
            prev = current;          // prev 이동
            current = next;          // current 이동
        }

        // 3단계: 앞쪽과 뒤집힌 뒤쪽 비교
        ListNode firstHalf = head;    // 앞쪽 시작
        ListNode secondHalf = prev;   // 뒤집힌 뒤쪽 시작 (prev가 새로운 head)

        while (secondHalf != null) { // TC: O(n/2) - 뒤쪽 절반과 앞쪽 절반 비교
            if (firstHalf.val != secondHalf.val) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true;
    }

    // 첫번째 풀이
    // TC :  연결 리스트 길이가 n 일때, O(n) + O(n) -> O(2n) -> O(n)
    public boolean isPalindrome1(ListNode head) {
        List<Integer> list = new ArrayList<>();

        while (head != null) { // TC : O(n) - n개의 모든 노드를 순회
            list.add(head.val);
            head = head.next;
        }

        for (int i = 0; i < list.size(); i++) { // TC : O(n) - n개의 모든 요소를 비교
            Integer i1 = list.get(i);
            Integer i2 = list.get(list.size() - i - 1);
            if (!Objects.equals(i1, i2)) {
                return false;
            }
        }
        return true;
    }

    public class ListNode {
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
