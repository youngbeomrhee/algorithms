// LeetCode 기본 제공 ListNode 가정
class Solution {

    /*
    m = list1 길이,
    n = list2 길이
    */
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        val dummy = ListNode(0)
        var tail = dummy

        var p1 = list1
        var p2 = list2

        while (p1 != null && p2 != null) {
            if (p1.`val` <= p2.`val`) {
                tail.next = p1
                p1 = p1.next
            } else {
                tail.next = p2
                p2 = p2.next
            }
            tail = tail.next!!
        }

        tail.next = p1 ?: p2

        return dummy.next
    }
}

/*
- 전체 시간복잡도: O(m + n)
- 전체 공간복잡도: O(1)
*/
