/*
    전체 시간복잡도(Time Complexity): O(n)
    전체 공간복잡도(Space Complexity): O(1)
    (n: linked list의 노드 개수)
*/
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0); // SC: O(1)
  dummy.next = head;
  let prev = dummy;

  // TC: O(n/2)
  while (prev.next && prev.next.next) {
    // 교환할 두 노드 지정
    const first = prev.next;
    const second = prev.next.next;

    // 포인터 교환
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // 다음 pair로 이동
    prev = first;
  }

  return dummy.next;
}
