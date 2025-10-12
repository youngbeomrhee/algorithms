/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return null;

    const dummy = new ListNode(0, head);

    // 1) prev를 "left 직전"으로 이동 (dummy에서 시작하므로 left-1번 전진)
    let prev: ListNode = dummy;
    for (let i = 1; i < left; i++) {
      prev = prev.next!;
    }

    // 2) curr는 뒤집기 시작 노드(left번째)
    const curr: ListNode = prev.next!;

    // 3) head-insertion: [left, right] 구간을 제자리에서 뒤집기
    for (let i = 0; i < right - left; i++) {
      const temp: ListNode = curr!.next!;
      curr!.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }

    return dummy.next;
};


/**
 * 복잡도 검증 요약
 *
 * [시간 복잡도] O(n)
 *   - (1) prev 이동: O(left)
 *   - (2) 구간 반전: O(right - left)
 *   - → 총합: O(left + right - left) = O(n)
 *
 * [공간 복잡도] O(1)
 *   - 더미 노드, prev, curr, temp 상수 개수
 *   - 별도의 리스트나 배열 사용 없음
 */
