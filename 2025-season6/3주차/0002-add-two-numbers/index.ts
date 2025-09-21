/**
 * @problemId 2
 * @origin LeetCode
 * @title Add Two Numbers
 * @summary 두 개의 비어 있지 않은 단일 연결 리스트가 주어진다. 각 리스트는
 *         0 이상 정수의 각 자리를 역순으로 저장하고 있으며, 각 노드는 하나의 숫자를 담고 있다.
 *         두 리스트가 나타내는 수를 더한 결과를 동일한 형식의 연결 리스트로 반환한다.
 *
 * @inputs
 * - l1: 첫 번째 연결 리스트 (역순으로 저장된 정수)
 * - l2: 두 번째 연결 리스트 (역순으로 저장된 정수)
 *
 * @outputs
 * - ListNode | null: 두 수의 합을 표현한 연결 리스트
 *
 * @examples
 * - 입력: l1 = [2,4,3], l2 = [5,6,4] → 출력: [7,0,8]
 * - 입력: l1 = [0], l2 = [0] → 출력: [0]
 * - 입력: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] → 출력: [8,9,9,9,0,0,0,1]
 *
 * @constraints
 * - 각 연결 리스트의 노드 수는 1 이상 100 이하
 * - 노드 값은 0 이상 9 이하
 * - 주어진 연결 리스트는 불필요한 앞자리에 0을 포함하지 않는다 (0 자체만 제외)
 */
type AddTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => ListNode | null;

import { ListNode } from './list-node';
import { arrayToLinkedList, linkedListToArray } from './list-node';

const addTwoNumbers = {
  iterative: (l1, l2) => {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
      const sum = x + y + carry;

      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }

    return dummy.next
  },
} satisfies Record<string, AddTwoNumbers>;

const l1 = arrayToLinkedList([2, 4, 3]);
const l2 = arrayToLinkedList([5, 6, 4]);

// → 출력: [7,0,8]
addTwoNumbers.iterative(l1, l2);
