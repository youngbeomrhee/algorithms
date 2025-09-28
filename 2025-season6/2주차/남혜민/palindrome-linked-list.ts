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

// 2. 연결 리스트 절반 뒤집어서 중간점 찾기 (토끼와 거북이 알고리즘)
// - 중간점 찾기 + 뒤집기: O(n/2) - n/2번 반복
// - 양쪽 비교: O(n/2) - 최대 n/2번 비교
// 전체 시간 복잡도: O(n/2 + n/2) => O(n)
// 공간 복잡도: O(1) - 포인터 몇 개만 사용
function isPalindrome2(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    let prev: ListNode | null = null;

    // 1) 중간점 찾기
    while (fast !== null && fast.next !== null) {
        // O(n/2) - n/2번 반복
        fast = fast.next.next; // 토끼가 2칸 이동

        // 중간점까지 오면서 절반 뒤집기
        const nextNode = slow!.next; // 다음 노드 임시 저장
        slow!.next = prev; // 연결 방향 뒤집기
        prev = slow; // prev 포인터 이동
        slow = nextNode; // 거북이가 1칸 이동
    }

    // 2) 홀수 길이인 경우 중간 노드 건너뛰기
    if (fast !== null) {
        slow = slow!.next; // 중간 노드 건너뛰기
    }

    // 3) 뒤집힌 앞부분과 뒷부분 비교
    let firstHalf = prev;
    let secondHalf = slow;

    while (firstHalf !== null && secondHalf !== null) {
        // O(n/2) - 최대 n/2번 비교
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next; // 앞쪽 포인터 이동
        secondHalf = secondHalf.next; // 뒤쪽 포인터 이동
    }

    return true;
}

console.log(
    isPalindrome2(
        new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
    )
); // true
console.log(isPalindrome2(new ListNode(1, new ListNode(2)))); // false
