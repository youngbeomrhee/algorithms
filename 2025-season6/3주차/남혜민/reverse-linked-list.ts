import { ListNode } from './list-node';

// 반복적 (iterative) 접근법 - 3개의 포인터 사용
// 전체 시간복잡도: O(n) - 모든 노드를 한 번씩 방문
// 전체 공간복잡도: O(1) - 상수 개의 포인터만 사용
function reverseListIterative(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        // O(n) - n개의 노드를 순회
        let next: ListNode | null = current.next; // O(1) - 다음 노드 저장
        current.next = prev; // O(1) - 연결 방향 뒤집기
        prev = current; // O(1) - 포인터 이동
        current = next; // O(1) - 포인터 이동
    }

    return prev; // O(1) - 노드 반환
}

console.log(
    reverseListIterative(
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        )
    )
);

// 재귀적 접근법 - 함수 호출 스택 사용
// 전체 시간복잡도: O(n) - 모든 노드를 한 번씩 방문
// 전체 공간복잡도: O(n) - 재귀 호출 스택 (각 노드마다 스택 프레임 생성)
// 스택: [1→2→3] 예시
//   1) 호출 스택 쌓기: f(1→2→3) → f(2→3) → f(3)
//   2) 베이스 케이스에서 return 3 시작
//   3) 스택 풀기: f(3)완료 → f(2→3)에서 연결뒤집기 → f(1→2→3)에서 연결뒤집기
function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        // O(1) - 스택 쌓기 중단점
        return head; // 마지막 노드가 새로운 head가 됨
    }

    // O(n) 시간, O(n) 공간 - n개 노드만큼 스택 프레임 생성
    // 각 스택 프레임에는 head, newHead 변수와 반환 주소 저장
    let newHead = reverseListRecursive(head.next);

    // 스택이 풀리면서 실행되는 부분 (마지막 노드부터 역순으로)
    head.next.next = head; // O(1) - 다음 노드가 현재 노드를 가리키도록 연결 뒤집기
    head.next = null; // O(1) - 현재 노드의 기존 연결 제거 (순환 방지)

    return newHead; // O(1) - 최종 head(원래 마지막 노드) 반환
}

console.log(
    reverseListRecursive(
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
        )
    )
);
