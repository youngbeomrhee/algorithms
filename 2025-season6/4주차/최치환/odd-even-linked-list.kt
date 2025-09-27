class Solution {
    
    // 전체 시간복잡도: O(1) + O(1) + O(n) + O(1) = O(n)
    // 전체 공간복잡도: O(n)

    fun oddEvenList(head: ListNode?): ListNode? {
        var oddList: ListNode? = ListNode(0)
        var oddHead = oddList
        var evenList: ListNode? = ListNode(0)
        var evenHead = evenList
        var currentHead = head

        var count = 1
        // 시간복잡도: O(n)
        // 공간복잡도: O(n)
        while (currentHead?.`val` != null) {
            if (count % 2 == 0) {
                evenHead?.next = ListNode(currentHead.`val`)
                evenHead = evenHead?.next
            } else {
                oddHead?.next = ListNode(currentHead.`val`)
                oddHead = oddHead?.next
            }

            currentHead = currentHead.next
            count++
        }
        
        oddHead?.next = evenList?.next
        return oddList?.next
    }
}