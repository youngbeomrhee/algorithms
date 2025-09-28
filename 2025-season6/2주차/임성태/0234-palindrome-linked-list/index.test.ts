import { isPalindromeWithArray } from './index';
import type { ListNode } from './list-node';

const createLinkedList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) {
    return null;
  }

  const head: ListNode = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }

  return head;
};

describe('isPalindromeWithArray', () => {
  test('회문 리스트 [1, 2, 2, 1]', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isPalindromeWithArray(head)).toBe(true);
  });

  test('비회문 리스트 [1,2]', () => {
    const head = createLinkedList([1, 2]);
    expect(isPalindromeWithArray(head)).toBe(false);
  })

  test('홀수 길이 회문 [1,2,3,2,1]', () => {
    const head = createLinkedList([1,2,3,2,1]);
    expect(isPalindromeWithArray(head)).toBe(true);
  })

  test('하나짜리 리스트 [1]', () => {
    const head = createLinkedList([1]);
    expect(isPalindromeWithArray(head)).toBe(true);
  });

  test('빈 리스트 []', () => {
    const head = createLinkedList([]);
    expect(isPalindromeWithArray(head)).toBe(true); // 빈 리스트도 회문으로 처리
  });
});
