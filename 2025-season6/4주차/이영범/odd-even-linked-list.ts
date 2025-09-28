/*
328. Odd Even Linked List
Solved
Medium
Topics
premium lock icon
Companies
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 

Constraints:

The number of nodes in the linked list is in the range [0, 10^4].
-10^6 <= Node.val <= 10^6
*/

// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
    최종 TC: O(n)
    최종 SC: O(1)
*/
export function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    // 짝수 노드의 시작점 저장
    let oddHead = head
    let evenHead: ListNode | null = head.next
    const savedEvenHead = evenHead

    // TC: O(n) (n은 node의 갯수)
    // 모두 존재하는 경우에만 반복
    while (oddHead && evenHead) {
        const nextNext = oddHead.next?.next ?? null
        
        if (nextNext === null) {
            break
        }

        oddHead.next = nextNext
        evenHead.next = nextNext?.next ?? null
        
        oddHead = nextNext
        evenHead = nextNext?.next ?? null
    }

    oddHead.next = savedEvenHead

    return head
};

// 최적화 버젼. 불필요한 로직을 줄이고 가독성 향상
export function oddEvenList2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    let odd = head
    let even: ListNode | null = head.next
    const evenHead = even

    // TC: O(n) (n은 node의 갯수)
    // 짝수 노드가 존재하는지 여부만 체크하면 됨
    while (even && even.next) {
        odd.next = even.next // 홀수번째 노드 연결
        odd = odd.next
        even.next = odd.next // 짝수번째 노드 연결
        even = even.next
    }
    odd.next = evenHead
    return head
}