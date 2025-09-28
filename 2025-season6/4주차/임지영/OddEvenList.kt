package temp

import datatype.ListNode

object OddEvenList {

    //1차 풀이: 시간복잡도 O(n) / 공간복잡도 O(n)
    fun oddEvenList(head: ListNode?): ListNode? {
        if(head == null || head.next == null) {
            return head
        }

        val oddList = ListNode()
        val evenList = ListNode()

        var currentNode = head
        var oddNode = oddList
        var evenNode = evenList

        var isOdd = true
        while (currentNode != null) {  // 시간복잡도 O(n)
            if (isOdd) {
                oddNode.`val` = currentNode.`val`
                if (currentNode.next?.next != null) {
                    oddNode.next = ListNode()
                    oddNode = oddNode.next!!
                }
            } else {
                evenNode.`val` = currentNode.`val`
                if (currentNode.next?.next != null) {
                    evenNode.next = ListNode()
                    evenNode = evenNode.next!!
                }
            }
            currentNode = currentNode.next
            isOdd = !isOdd
        }

        oddNode.next = evenList
        return oddList
    }

    //1차 풀이: 시간복잡도 O(n) / 공간복잡도 O(1) => 기존 노드 재사용
    fun oddEvenList2(head: ListNode?): ListNode? {
        if(head == null) {
            return head
        }
        var oddNode = head
        val evenList = head.next
        var evenNode = evenList

        while (evenNode?.next != null) { // 시간복잡도 O(n)
            oddNode?.next = evenNode.next
            oddNode = oddNode?.next

            evenNode.next = oddNode?.next
            evenNode = evenNode.next
        }

        oddNode?.next = evenList
        return head
    }
}