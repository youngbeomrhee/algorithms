import { ListNode, printList } from './list-node';

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// 홀수 인덱스와 짝수 인덱스 노드를 분리하여 재배열
// 시간 복잡도: O(n)
// - n은 연결리스트의 노드 개수
// - 각 노드를 정확히 한 번씩만 방문하여 홀수/짝수 체인에 연결
// - 최선의 경우(노드 1개): O(1)
// - 최악의 경우(노드 n개): O(n)
// 공간 복잡도: O(1) - 기존 노드들의 연결만 변경하고 추가 공간 사용 안함
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let odd: ListNode = head;
    let even: ListNode | null = head.next;
    let evenHead: ListNode | null = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
}

console.log(
    printList(
        oddEvenList(
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(3, new ListNode(4, new ListNode(5)))
                )
            )
        )
    )
); // [1,3,5,2,4]
