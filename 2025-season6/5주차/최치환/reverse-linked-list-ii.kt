class Solution {
    // 전체 시간복잡도: O(left) + O(right-left) = O(n)
    // 전체 공간복잡도: O(1)

    fun reverseBetween(head: ListNode?, left: Int, right: Int): ListNode? {
        val current = ListNode(0)
        current.next = head
        var pre: ListNode? = current

        //  O(left)
        repeat(left - 1) { pre = pre?.next }
        val start = pre?.next
        var then = start?.next

        // O(right-left)
        repeat(right - left) {
            start?.next = then?.next
            then?.next = pre?.next
            pre?.next = then
            then = start?.next
        }

        return current.next
    }
}