class Solution {

    // 전체 시간복잡도: O(1) + O(n) + O(1) = O(n)
    // 전체 공간복잡도: O(1)

    fun swapPairs(head: ListNode?): ListNode? {
        var currentNode: ListNode? = head
        var next: ListNode? = head?.next

        // 시간복잡도: O(n)
        while (currentNode?.`val` != null) {
            val temp = currentNode.`val`
            if (next?.`val` != null) {
                currentNode.`val` = next.`val`
            }
            next?.`val` = temp

            currentNode = next?.next
            next = currentNode?.next
        }

        return head
    }
}