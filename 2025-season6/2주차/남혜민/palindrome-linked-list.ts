import { ListNode } from './list-node';

// Description: Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// 1. 배열로 변환해서 투 포인터
// - 연결 리스트 순회: O(n) - n개 노드를 한 번씩 방문
// - 투 포인터 비교: O(n/2) - 최대 n/2번 비교
// 전체 시간 복잡도: O(n + n/2) => O(n)
// 공간 복잡도: O(n) - 배열에 모든 값 저장
function isPalindrome1(head: ListNode | null): boolean {
    const values: number[] = [];

    let currentNode: ListNode | null = head;

    // 1) 연결 리스트를 배열로 변환
    while (currentNode !== null) {
        // O(n) - n개 노드 순회
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let left = 0;
    let right = values.length - 1;

    // 2) 투 포인터로 검사
    while (left < right) {
        // O(n/2) - 최대 n/2번 반복
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(
    isPalindrome1(
        new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
    )
); // true
console.log(isPalindrome1(new ListNode(1, new ListNode(2)))); // false
