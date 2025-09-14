import { ListNode } from './list-node';

// You are given the heads of two sorted linked lists list1 and list2.
//  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// 1. 더미 노드로 반복문을 통해 두 포인터로 순회
// 시간 복잡도: O(n + m) - n은 list1의 길이, m은 list2의 길이
// 공간 복잡도: O(1) - 새로운 노드를 생성하지 않고 기존 노드를 재사용
function mergeTwoLists1(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    // 0) 더미 노드 만들기
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        // 1) 두 연결리스트 순회
        // O(min(n, m)) - 둘 중 짧은 리스트까지 반복
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // 2) 남은 노드들 연결
    current.next = list1 || list2; // O(1) - 남은 리스트 전체 연결

    return dummy.next; // O(1) - 더미 노드 다음부터 반환
}

console.log(
    mergeTwoLists1(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
    )
); //  [1,1,2,3,4,4]
