class Solution {

    fun isPalindrome(head: ListNode?): Boolean {
        if (head?.next == null) return true

        val mid = findMid(head)             // O(n)
        val rev = reverse(mid!!.next)       // O(n/2)

        var p1 = head                       // O(1)
        var p2 = rev                        // O(1)
        var ok = true                       // O(1)
        while (ok && p2 != null) {          // O(n/2)
            if (p1!!.`val` != p2.`val`) ok = false // O(1)
            p1 = p1.next                    // O(1)
            p2 = p2.next                    // O(1)
        }

        mid.next = reverse(rev)             // O(n/2)
        return ok                           // O(1)
    }

    /*
    - 시간복잡도(Time Complexity): O(n)
    - 공간복잡도(Space Complexity): O(1)
    */
    private fun findMid(head: ListNode?): ListNode? {
        var slow = head                     // O(1)
        var fast = head                     // O(1)
        while (fast?.next != null && fast.next?.next != null) { //O(n)
            slow = slow?.next               // O(1)
            fast = fast.next?.next          // O(1)
        }
        return slow                         // O(1)
    }

    private fun reverse(node: ListNode?): ListNode? {
        var prev: ListNode? = null          // O(1)
        var cur = node                      // O(1)
        while (cur != null) {               // O(k)
            val nxt = cur.next              // O(1)
            cur.next = prev                 // O(1)
            prev = cur                      // O(1)
            cur = nxt                       // O(1)
        }
        return prev                         // O(1)
    }
}

/*
- 전체 시간복잡도: O(n) + O(n/2) + O(n/2) + O(n/2) -> O(2.5n) -> O(n)
- 전체 공간복잡도: O(1)
*/
