package temp

import datatype.ListNode

object SwapPairs {

    //시간복잡도 O(n) , 공간복잡도 O(1)
    fun swapPairs(head: ListNode?): ListNode? {
        if (head == null) {
            return head
        }

        var node = head

        while (node?.next != null) { //시간 복잡도 O(n)
            val swapVal = node.`val` //공간 1 사용
            node.`val` = node.next!!.`val`
            node.next!!.`val` = swapVal

            node = node.next!!.next
        }

        return head
    }
}