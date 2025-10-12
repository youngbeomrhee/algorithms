import { ListNode, printList } from './list-node';

// 연결 리스트의 left번째부터 right번째까지 노드를 뒤집는 문제
// 시간 복잡도: O(left-1) + O(right-left) = O(n) - 리스트를 한 번 순회하며 뒤집을 구간을 찾고 뒤집음
// 공간 복잡도: O(1) - 포인터 몇 개만 사용하고 기존 노드 재활용
function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (!head || left === right) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // left 이전 위치까지 이동 - O(left-1) = O(n)
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next!;
    }

    let current = prev.next!; // O(1) - 현재 노드 설정

    // right - left번 뒤집기 수행 - O(right-left) = O(n)
    for (let i = 0; i < right - left; i++) {
        let next = current.next!; // 다음 노드 참조
        current.next = next.next; // 연결 변경
        next.next = prev.next; // 연결 변경
        prev.next = next; // 연결 변경
    }

    return dummy.next;
}

// 테스트 케이스
const testList = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(printList(reverseBetween(testList, 2, 4))); // [1,4,3,2,5]
