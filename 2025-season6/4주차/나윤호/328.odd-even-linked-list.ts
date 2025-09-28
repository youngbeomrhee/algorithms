
/*
    전체 시간복잡도(Time Complexity): O(n)
    전체 공간복잡도(Space Complexity): O(1)
    (n: linked list의 노드 개수)
  */
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) return head;

  let odd = head; // 홀수
  let even = head.next; // 짝수
  const evenHead = even;

  // TC: O(n/2)
  while (even && even.next) {
    odd.next = even.next; // 다음 홀수
    odd = odd.next; // 홀수 포인터 이동

    even.next = odd.next; // 다음 짝수
    even = even.next; // 짝수 포인터 이동
  }

  odd.next = evenHead;

  return head;
}
