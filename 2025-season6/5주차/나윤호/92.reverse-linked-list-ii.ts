/*
  전체 시간복잡도(Time Complexity): O(n)
  전체 공간복잡도(Space Complexity): O(1)
  (n: 연결 리스트의 노드 개수)

  동작 원리:
  1. Dummy 노드로 left=1 엣지 케이스 처리
  2. left-1 위치까지 이동하여 beforeLeft 찾기 - TC: O(left)
  3. left~right 구간을 표준 reversal로 역순 - TC: O(right-left)
  4. 역순된 구간을 앞뒤로 연결 복원 - TC: O(1)
*/
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || left === right) return head;

  // TC: O(1), SC: O(1)
  const dummy = new ListNode(0);
  dummy.next = head;

  // TC: O(left)
  let beforeLeft = dummy;
  for (let i = 0; i < left - 1; i++) {
    beforeLeft = beforeLeft.next!;
  }

  // TC: O(right-left)
  let prev: ListNode | null = null;
  let curr: ListNode | null = beforeLeft.next;
  const leftNode = curr;

  // TC: O(right-left+1)
  for (let i = 0; i <= right - left; i++) {
    const next = curr!.next;
    curr!.next = prev;
    prev = curr;
    curr = next;
  }

  // TC: O(1)
  beforeLeft.next = prev;
  leftNode!.next = curr;

  return dummy.next;
}
