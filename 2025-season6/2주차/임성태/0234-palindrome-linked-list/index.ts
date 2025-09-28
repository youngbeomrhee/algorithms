/**
 * @problemId 234
 * @origin LeetCode
 * @title Palindrome Linked List
 * @summary 단일 연결 리스트의 머리 노드가 주어질 때,
 *          리스트의 값들이 앞뒤가 같은 순서를 이루면 true를,
 *          그렇지 않으면 false를 반환한다.
 *
 * @inputs
 * - head: 단일 연결 리스트의 머리 노드
 *
 * @outputs
 * - boolean: 연결 리스트가 회문 구조이면 true, 아니면 false
 *
 * @examples
 * - 입력: [1,2,2,1] → 출력: true
 * - 입력: [1,2] → 출력: false
 *
 * @constraints
 * - 노드 개수는 1 이상 10⁵ 이하
 * - 노드 값은 0 이상 9 이하의 정수
 */
type isPalindrome = (head: ListNode | null) => boolean;

import type { ListNode } from './list-node';

/**
 *
 * @TC
 * - 리스트 순회: O(n)
 * - 배열 비교: O(n)
 * - 전체: O(2n) -> O(n)
 *
 * @SC
 * - 배열(list): O(n)
 * - 보조 포인터 변수: O(1)
 * - 전체: O(n)
 */
export const isPalindromeWithArray: isPalindrome = (head) => {
  const list: number[] = []; // SC: O(n), 노드 값들을 저장할 배열

  // 1. 리스트 순회 -> 배열에 담기
  let node = head;
  while (node !== null) {
    list.push(node.val); // TC: O(1) 삽입, 전체 반복 O(n)
    node = node.next; // TC: O(1), n번 반복
  }
  // 👉 TC: O(n), SC: O(n)

  // 2. 배열 앞/뒤에서 투포인터 비교
  let left = 0; // SC: O(1)
  let right = list.length - 1; // SC: O(1)

  while (left < right) {
    if (list[left] !== list[right]) {
      return false; // TC: O(1) 비교, 최대 n/2번 반복
    }
    left += 1; // TC: O(1)
    right -= 1; // TC: O(1)
  }
  // 👉 TC: O(n), SC: O(1)

  return true; // 최종 결과 반환
};
