import { mergeTwoLists } from './index';
import { ListNode } from './list-node';

// 배열을 연결 리스트로 변환하는 유틸
function arrayToList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// 연결 리스트를 배열로 변환하는 유틸
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('mergeTwoLists', () => {
  test('두 개의 정렬 리스트를 병합 (일반 케이스)', () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test('두 리스트가 모두 빈 경우', () => {
    const result = mergeTwoLists(null, null);
    expect(listToArray(result)).toEqual([]);
  });

  test('list1이 비어 있고 list2만 있는 경우', () => {
    const list1 = null;
    const list2 = arrayToList([0]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([0]);
  });

  test('list2가 비어 있고 list1만 있는 경우', () => {
    const list1 = arrayToList([5, 10]);
    const list2 = null;
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([5, 10]);
  });

  test('중복 값이 많은 경우', () => {
    const list1 = arrayToList([2, 2, 2]);
    const list2 = arrayToList([2, 2]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([2, 2, 2, 2, 2]);
  });

  test('음수와 양수가 섞여 있는 경우', () => {
    const list1 = arrayToList([-10, -3, 0]);
    const list2 = arrayToList([-5, 2, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([-10, -5, -3, 0, 2, 4]);
  });
});
