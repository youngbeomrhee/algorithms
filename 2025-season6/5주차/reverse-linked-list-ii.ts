/*
92. Reverse Linked List II
Solved
Medium
Topics
premium lock icon
Companies
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
	최종 TC: O(left) + O(right - left) = O(n) (n은 노드의 갯수)
*/
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // Early return: 리스트가 비었거나, 노드가 1개거나, 뒤집을 구간이 없는 경우
  if (!head || !head.next || left === right) return head;

  const dummy = new ListNode(0, head);
  let leftPrev: ListNode = dummy;

  // 1) leftPrev를 left-1 위치로 이동 (left > 1일 때만 필요)
  if (left > 1) {
    // TC: O(left)
    for (let i = 1; i < left; i++) {
      // 문제 제약: 1 <= left <= n 보장, leftPrev.next는 항상 존재
      leftPrev = leftPrev.next as ListNode;
    }
  }

  // 2) 구간 [left, right] 뒤집기
  let prev: ListNode | null = null;
  let curr = leftPrev.next as ListNode; // 문제 제약: left <= n 보장
  // 뒤집힌 후 꼬리가 될 노드(원래 left 위치의 노드)를 저장
  const reversedTail = curr;

  // TC: O(right - left)
  for (let i = left; i <= right; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next as ListNode; // 마지막 반복에서는 null일 수 있지만 루프 종료 후 사용 안 함
  }

  // 3) 재연결: leftPrev -> (뒤집힌 머리) -> ... -> (뒤집힌 꼬리) -> curr(right+1 위치)
  leftPrev.next = prev;
  reversedTail.next = curr;

  return dummy.next;
}
