class Solution {
    // 전체 시간복잡도: O(1) + O(1) + O(n) + O(1) + O(n) = O(n)
    // 전체 공간복잡도: O(n) + O(n) = O(n)

    fun reverseList(head: ListNode?): ListNode? {
        // O(1)
        if (head == null) {
            return null
        }

        // O(1)
        if (head.next == null) {
            return head
        }

        // O(n)
        val list = mutableListOf<Int>()
        var node = head
        while (node?.`val` != null || node?.next != null) {
            list.add(node.`val`)
            node = node.next
        }

        // O(1)
        val result: ListNode? = ListNode(list[list.size - 1])
        var resultHead = result

        // O(n)
        for (i in list.size - 2 downTo 0) {
            resultHead?.next = ListNode(list[i])
            resultHead = resultHead?.next
        }

        return result
    }
}