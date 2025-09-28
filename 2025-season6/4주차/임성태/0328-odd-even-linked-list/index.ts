/**
 * @problemId 328
 * @origin LeetCode
 * @title Odd Even Linked List
 * @summary 단일 연결 리스트가 주어진다. 리스트의 노드들을
 *         인덱스가 홀수인 노드들과 짝수인 노드들로 분리한 뒤,
 *         홀수 노드들을 앞에 두고 그 뒤에 짝수 노드들을 이어붙인
 *         새로운 리스트의 머리 노드를 반환한다.
 *         단, 홀수 그룹과 짝수 그룹 내부의 상대적 순서는 유지되어야 한다.
 *
 * @inputs
 * - head: 연결 리스트의 첫 번째 노드 (또는 비어 있을 수 있음)
 *
 * @outputs
 * - ListNode | null: 홀수 인덱스 노드 뒤에 짝수 인덱스 노드가 이어진 리스트 머리 노드
 *
 * @examples
 * - 입력: [1, 2, 3, 4, 5] → 출력: [1, 3, 5, 2, 4]
 * - 입력: [2, 1, 3, 5, 6, 4, 7] → 출력: [2, 3, 6, 7, 1, 5, 4]
 *
 * @constraints
 * - 리스트의 길이: 0 ≤ length ≤ 10⁴
 * - 노드 값: -10⁶ ≤ Node.val ≤ 10⁶
 */

/** OddEvenList:  */
type OddEvenList = (head: ListNode | null) => ListNode | null;

import type { ListNode } from '@ds/list-node';
import { arrayToLinkedList, linkedListToArray } from '@tests/builders/linked-list';

export const oddEvenList = {
  /**
   * @TC O(n) → while 루프가 리스트 전체 노드를 한 번만 방문 → O(n)
   * @SC O(1) → 입력 리스트 외에 odd, even, evenHead 세 개의 포인터만 사용 → O(1)
   */
  iterative(head: ListNode | null) {
    if (head === null || head.next === null) return head;

    let odd: ListNode = head;
    let even: ListNode | null = head?.next;
    const evenHead = even;

    while (even !== null && even?.next !== null) {
      odd.next = even.next;
      odd = odd.next;

      even.next = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
    return head;
  },
} satisfies Record<string, OddEvenList>;

const head = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log('head:', head);

console.log('oddEvenList.iterative(head):', linkedListToArray(oddEvenList.iterative(head)));
