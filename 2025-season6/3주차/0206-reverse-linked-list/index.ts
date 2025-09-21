/**
 * @problemId 206
 * @origin LeetCode
 * @title Reverse Linked List
 * @summary 단일 연결 리스트의 머리 노드가 주어졌을 때,
 *          노드들의 순서를 반대로 뒤집은 새로운 리스트의 머리 노드를 반환하는 문제.
 *
 * @inputs
 * - head: 단일 연결 리스트의 머리 노드
 *
 * @outputs
 * - ListNode | null: 뒤집힌 연결 리스트의 머리 노드
 *
 * @examples
 * - 입력: [1, 2, 3, 4, 5] → 출력: [5, 4, 3, 2, 1]
 * - 입력: [1, 2] → 출력: [2, 1]
 * - 입력: [] → 출력: []
 *
 * @constraints
 * - 노드 개수: 0 ≤ n ≤ 5000
 * - 노드 값 범위: -5000 ≤ Node.val ≤ 5000
 */
type ReverseList = (head: ListNode | null) => ListNode | null;

import type { ListNode } from './list-node';
import { arrayToLinkedList, linkedListToArray } from './list-node';

export const reverseList = {
  /**
   * @TC 반복문은 리스트 길이 n번 순회 → 전체적으로 O(n) 시간
   * @SC prev, curr, next 포인터 변수만 사용 → 공간 복잡도는 O(1)
   */
  iterative: (head) => {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
      const next: ListNode | null = curr.next;
      curr.next = prev; // curr.next를 prev로 뒤집기
      prev = curr; // prev를 curr로 전진
      curr = next; // curr를 next로 전진
    }

    return prev;
  },
} satisfies Record<string, ReverseList>;

const head = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(head);
console.log('linkedList:', linkedListToArray(linkedList));

const reversedLinkedList = reverseList.iterative(linkedList);
console.log('reversedLinkedList:', linkedListToArray(reversedLinkedList));
