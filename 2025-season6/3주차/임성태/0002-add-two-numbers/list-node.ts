export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 배열 → 연결 리스트
 * @example
 * arrayToLinkedList([1,2,3]) -> ListNode(1) -> 2 -> 3 -> null
 */
export function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const dummy = new ListNode(0);
  let curr = dummy;

  for (const num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}

/**
 * 연결 리스트 → 배열
 * @example
 * linkedListToArray(ListNode(1)->2->3) -> [1,2,3]
 */
export function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let curr = head;

  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result;
}
