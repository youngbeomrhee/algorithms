/**
 * @problemId 24
 * @origin LeetCode
 * @title Swap Nodes in Pairs
 * @summary 단일 연결 리스트가 주어진다. 이 리스트에서 인접한 두 노드를
 *         서로 교환한 새로운 리스트의 머리 노드를 반환해야 한다.
 *         단, 노드의 값은 변경하지 않고 노드 자체의 연결 구조만 바꿀 수 있다.
 *
 * @inputs
 * - head: 연결 리스트의 첫 번째 노드 (또는 비어 있을 수 있음)
 *
 * @outputs
 * - ListNode | null: 인접 노드가 교환된 후의 리스트 머리 노드
 *
 * @examples
 * - 입력: [1, 2, 3, 4] → 출력: [2, 1, 4, 3]
 * - 입력: [] → 출력: []
 * - 입력: [1] → 출력: [1]
 * - 입력: [1, 2, 3] → 출력: [2, 1, 3]
 *
 * @constraints
 * - 리스트의 길이: 0 ≤ length ≤ 100
 * - 노드 값: 0 ≤ Node.val ≤ 100
 */

/** SwapPairs: 인접한 두 노드의 입력(head)을 뒤집은 리스트의 새 head를 반환하는 계약 */
type SwapPairs = (head: ListNode | null) => ListNode | null;

import { ListNode } from '@ds/list-node';
import { arrayToLinkedList, linkedListToArray } from '@tests/builders/linked-list';

export const swapPairs = {
  /**
   * @TC O(n) → 리스트를 한 번 순회하면서 모든 노드를 최대 1회씩 swap
   * @SC O(1) → dummy 노드와 몇 개의 포인터(prev, first, second)만 사용
   */
  iterative(head: ListNode | null) {
    const dummy: ListNode | null = new ListNode(0, head);
    let prev: ListNode | null = dummy;

    // while 루프: 리스트를 한 쌍(2개 노드)씩 순회
    // 최대 length/2번 반복 → O(n) 시간
    while (prev.next !== null && prev.next.next !== null) {
      const first: ListNode | null = prev.next!;
      const second: ListNode | null = first.next!;

      prev.next = second;
      first.next = second.next;

      second.next = first;
      prev = first;
    }

    return dummy.next;
  },
} satisfies Record<string, SwapPairs>;

const head = arrayToLinkedList([1, 2, 3, 4]);
console.log('head: ', head);

console.log('swapPairs.iterative(head): ', linkedListToArray(swapPairs.iterative(head)));
