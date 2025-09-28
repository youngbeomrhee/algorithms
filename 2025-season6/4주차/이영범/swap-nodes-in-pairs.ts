/*
24. Swap Nodes in Pairs
Solved
Medium
Topics
premium lock icon
Companies
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:



Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
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
export function swapPairs(head: ListNode | null): ListNode | null {
    // early return
    if (!head || !head.next) {
        return head
    }

    const dummyHead = new ListNode(0, head)
    // pair의 이전 node
    let prev = dummyHead

    // TC: O(n) (n은 node의 갯수)
    while (prev.next && prev.next.next) {
        let left = prev.next // 1 -> 2
        let right = prev.next.next // 2 -> 3

        // swap
        left.next = right.next // 1 -> 3
        right.next = left // 2 -> 1

        // pair의 앞의 node로 prev.next 변경
        prev.next = right // 0 -> 2

        // 새로운 pair의 이전 node -> swap 된 후이므로 left
        prev = left // 1 -> 3
    }
    return dummyHead.next
};