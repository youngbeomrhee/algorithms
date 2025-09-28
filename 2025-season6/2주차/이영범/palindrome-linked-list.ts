/**
 * 234. Palindrome Linked List
 *
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: false
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 10^5].
 * - 0 <= Node.val <= 9
 *
 * Follow up: Could you do it in O(n) time and O(1) space?
 */

// - 홀수케이스
//     [1  2   3   4   5]
//             s
//                     f
//             prev
// - 짝수케이스
//     [1  2   3   3   2   1]
//             s
//                     f
//             prev
// Definition for singly-linked list
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 메인 함수 - 가장 최적화된 솔루션 사용
 * @param head - 연결 리스트의 헤드 노드
 * @returns 팰린드롬 여부
 */
export function isPalindrome(head: ListNode | null): boolean {
  return isPalindrome2(head);
}

/*
  한 번 순회만으로 판단. slow, fast runner 기법을 활용해 중간을 판단
  원본을 변경하지 않고 prev linkedList 생성
  최종 TC: O(n/2) + O(n/2) -> O(n)
  최종 SC: O(n/2) -> O(n)
  -> 시간복잡도는 낮췄지만 O(n)만큼의 메모리가 사용되고 메모리 할당에 따른 오버헤드로 오히려 성능이 떨어짐
*/
export function isPalindrome1(head: ListNode | null): boolean {
  // 1. null 체크 추가
  if (head === null || head.next === null) return true;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  let reverse: ListNode | null = new ListNode(head.val, null);

  // TC: O(n/2)
  while (fast.next && fast.next.next) {
    slow = slow!.next; // 1칸 전진
    fast = fast.next.next; // 2칸 전진
    reverse = new ListNode(slow!.val, reverse);
  }

  // 홀수인 경우는 fast가 가장 끝 요소에 위치, slow와 prev는 정중앙
  // 짝수인 경우는 fast가 가장 끝 요소 하나 전에 위치, slow와 prev는 정중앙 하나 전 위치
  if (fast.next !== null) {
    slow = slow!.next;
  }

  // TC: O(n/2)
  while (slow && reverse) {
    if (slow.val !== reverse.val) {
      return false;
    }
    slow = slow.next;
    reverse = reverse.next;
  }
  return true;
}

/*
  일반적인 원본을 변경하는 풀이. 
  slow, fast runner 기법을 활용해 중간을 판단 O(n/2)
  중간이 판단된 시점에 전반부를 뒤집음 O(n/2)
  뒤집은 전반부와 후반부를 비교해서 palindrome 여부를 판단 O(n/2)
  최종 TC: O(n/2) + O(n/2) + O(n/2) -> O(2n/3)
  최종 SC: O(1)
*/
export function isPalindrome2(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // TC: O(n/2)
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // endToHalfHead는 후반부 뒤집은 리스트의 헤드이므로
  let endToHalfHead = null;
  // 홀수, 짝수 케이스 상관없이 한 칸 더 이동 -> 하단에서 endToHalfHead 존재여부만 체크
  slow = slow.next;

  // TC: O(n/2)
  while (slow) {
    const next = slow.next;
    slow.next = endToHalfHead;
    endToHalfHead = slow;
    slow = next;
  }

  // TC: O(n/2)
  while (endToHalfHead !== null) {
    if (head!.val !== endToHalfHead.val) {
      return false;
    }
    head = head!.next;
    endToHalfHead = endToHalfHead.next;
  }
  return true;
}

/*
  한 번 순회만으로 판단. slow, fast runner 기법을 활용해 중간을 판단 O(n/2)
  fast를 먼저 보내고 slow는 reverse에 할당해 바로바로 뒤집음
  최종 TC: O(n/2) + O(n/2) -> O(n) 
  최종 SC: O(1)
*/
export function isPalindrome3(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let reverse: ListNode | null = null;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    // slow.next를 임시로 저장
    const next: ListNode | null = slow!.next;
    slow!.next = reverse;
    reverse = slow;
    slow = next;
  }

  // 짝수개인 경우 reverse를 한 칸 더 전진
  if (fast.next) {
    // slow.next를 임시로 저장
    const next: ListNode | null = slow!.next;
    slow!.next = reverse;
    reverse = slow;
    slow = next;
  } else {
    slow = slow!.next;
  }

  while (reverse) {
    if (reverse.val !== slow!.val) {
      return false;
    }
    reverse = reverse.next;
    slow = slow!.next;
  }
  return true;
}

/**
 * 헬퍼 함수: 배열을 연결 리스트로 변환
 */
export function arrayToLinkedList(arr: number[]): ListNode | null {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}
