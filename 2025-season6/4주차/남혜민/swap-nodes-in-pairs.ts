import { ListNode } from './list-node';

// 연결 리스트에서 인접한 두 노드씩 교환하는 문제
// 노드의 값이 아닌 노드 자체를 교환해야 함

// 더미 노드 사용
// 시간 복잡도:
// - n이 짝수일 때: floor(n/2) = n/2번 반복
// - n이 홀수일 때: floor(n/2) = (n-1)/2번 반복
// - 각 반복마다 6개의 O(1) 연산 수행
// 전체 시간 복잡도: O(n/2) * 6) = O(n)
// 공간 복잡도: O(1) - 상수 개의 포인터만 사용
function swapPairs1(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy; // O(1) - 이전 노드 포인터

    // 최악의 경우: n이 짝수일 때 floor(n/2) = n/2번 반복
    // 예: n=4일 때 2번, n=6일 때 3번 반복
    while (prev.next && prev.next.next) {
        // O(1) - 조건 확인
        // 각 반복마다 아래 5개 연산 수행:
        let first = prev.next; // 1. 첫 번째 노드 참조
        let second = prev.next.next; // 2. 두 번째 노드 참조

        prev.next = second; // 3. 연결 변경
        first.next = second.next; // 4. 연결 변경
        second.next = first; // 5. 연결 변경

        prev = first; // 6. 포인터 이동
        // 총 6개의 O(1) 연산
    }

    return dummy.next;
}

// 테스트 케이스
const testList = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
);

console.log('반복적 (더미 노드):', swapPairs1(testList));
