/**
 * @problemId 21
 * @origin LeetCode
 * @title Merge Two Sorted Lists
 * @summary 두 개의 정렬된 단일 연결 리스트의 머리 노드가 주어진다.
 *         이 두 리스트의 노드들을 하나의 정렬된 연결 리스트로 합쳐서,
 *         새로운 리스트의 머리 노드를 반환해야 한다.
 *
 * @inputs
 * - list1: 정렬된 연결 리스트의 머리 노드
 * - list2: 정렬된 연결 리스트의 머리 노드
 *
 * @outputs
 * - ListNode | null: 병합된 정렬 리스트의 머리 노드
 *
 * @examples
 * - 입력: list1 = [1,2,4], list2 = [1,3,4] → 출력: [1,1,2,3,4,4]
 * - 입력: list1 = [], list2 = [] → 출력: []
 * - 입력: list1 = [], list2 = [0] → 출력: [0]
 *
 * @constraints
 * - 두 리스트의 노드 개수는 0 이상 50 이하
 * - 각 노드의 값은 -100 이상 100 이하
 * - list1과 list2는 모두 오름차순(비내림차순)으로 정렬되어 있음
 */
type mergeTwoSortedLists = (list1: ListNode | null, list2: ListNode | null) => ListNode | null;

import { ListNode } from './list-node';

/**
 *
 *
 * TC: O(n + m)
 * - 두 리스트를 한 번씩 순회
 *
 * SC: O(1)
 * - dummy 포인터 외 추가 공간 없음
 */
export const mergeTwoLists: mergeTwoSortedLists = (list1, list2) => {
  const dummy = new ListNode(0); // dummy 노드 생성 (SC: O(1))
  let current = dummy; // 현재 위치 포인터 (SC: O(1))

  // ✅ 두 리스트를 동시에 순회 (TC: O(min(n, m)))
  // list1과 list2 중 더 작은 값을 연결하면서 진행
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
};
