
public class SwapNodesinPairs {
    public static void main(String[] args) {
        SwapNodesinPairs swapNodesinPairs = new SwapNodesinPairs();
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        ListNode listNode = swapNodesinPairs.swapPairs(l1);
        System.out.println("listNode = " + listNode);
    }

    /**
     * 연결 리스트에서 인접한 두 노드의 값을 교환하는 함수
     * 시간복잡도: O(n) - n개 노드를 2칸씩 이동하여 n/2번 반복, 상수 계수 무시하여 O(n)
     */
    public ListNode swapPairs(ListNode head) {
        // 빈 리스트이거나 노드가 1개면 그대로 반환
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode current = head;
        
        // 쌍이 존재하는 동안 반복
        while (current != null && current.next != null) {
            // 값 교환 (temp 변수 사용)
            int temp = current.val;
            current.val = current.next.val;
            current.next.val = temp;
            
            // 다음 쌍으로 이동 (2칸 점프)
            current = current.next.next;
        }
        
        return head;
    }
}
