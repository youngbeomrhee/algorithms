
public class OddEvenLinkedList {
    public static void main(String[] args) {
        // 기존 버전 테스트 (새 노드 생성 방식)
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        OddEvenLinkedList oddEvenLinkedList = new OddEvenLinkedList();
        ListNode result1 = oddEvenLinkedList.oddEvenList(l1);
        System.out.println("기존 버전 결과 = " + result1);
        
        // 최적화 버전 테스트 (노드 재활용 방식)
        ListNode l2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        ListNode result2 = oddEvenLinkedList.oddEvenListVersion2(l2);
        System.out.println("최적화 버전 결과 = " + result2);
    }

    /**
     * 최적화된 버전: 기존 노드를 재활용하는 방식
     * 시간복잡도: O(n) - 약 n/2번 반복하지만 상수 계수 무시하여 O(n)
     * 공간복잡도: O(1) - 기존 노드를 재활용하여 상수 공간만 사용
     */
    public ListNode oddEvenListVersion2(ListNode head) {
        // 빈 리스트이거나 노드가 1개면 그대로 반환
        if (head == null || head.next == null) {
            return head;
        }

        // odd: 홀수 번째 노드들의 현재 마지막 노드
        // even: 짝수 번째 노드들의 현재 마지막 노드
        // evenHead: 짝수 번째 노드들의 시작점 (나중에 연결용)
        ListNode odd = head;
        ListNode even = head.next;
        ListNode evenHead = even;

        // 기존 노드들을 재활용하여 홀수/짝수 체인 구성
        while (even != null && even.next != null) {
            // 홀수 체인: 1 -> 3 -> 5 -> ...
            odd.next = even.next;
            odd = odd.next;

            // 짝수 체인: 2 -> 4 -> 6 -> ...
            even.next = odd.next;
            even = even.next;
        }

        // 홀수 체인 끝에 짝수 체인 연결
        odd.next = evenHead;

        return head;
    }

    /**
     * 기존 버전: 새로운 노드를 생성하는 방식
     * 시간복잡도: O(n) - n번 반복하여 모든 노드를 한 번씩 방문
     * 공간복잡도: O(n) - 새로운 노드들을 계속 생성
     */
    public ListNode oddEvenList(ListNode head) {
        ListNode odd = new ListNode();
        ListNode even = new ListNode();
        ListNode oddFirst = odd;
        ListNode evenFirst = even;
        boolean oddFlag = true;
        while (head != null) {
            int val = head.val;
            if (oddFlag) {
                odd.next = new ListNode(val);
                odd = odd.next;
            } else {
                even.next = new ListNode(val);
                even = even.next;
            }
            head = head.next;
            oddFlag = !oddFlag;
        }
        odd.next = evenFirst.next;
        return oddFirst.next;
    }


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
