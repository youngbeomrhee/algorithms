class Solution {
    // 전체 시간복잡도: O(1) + O(1) + O(max(m, n)) + O(1) = O(max(m, n))
    // 전체 공간복잡도:O(max(m, n))

    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        // O(1)
        var sum = (l1?.`val` ?: 0) + (l2?.`val` ?: 0)
        var temp: Int = sum / 10

        // O(1)
        val result: ListNode? = ListNode(sum % 10)
        var resultHead = result
        var l1Head = l1?.next
        var l2Head = l2?.next

        // O(max(m, n)) : 두 리스트 전체 길이만큼 반복 (m, n은 각 리스트의 길이)
        while (l1Head?.`val` != null || l2Head?.`val` != null) {
            // O(1) : 각 자릿수의 합 계산 및 노드 연결
            sum = (l1Head?.`val` ?: 0) + (l2Head?.`val` ?: 0) + temp
            resultHead?.next = ListNode((sum % 10))
            resultHead = resultHead?.next
            temp = sum / 10
            l1Head = l1Head?.next
            l2Head = l2Head?.next
        }

        // O(1) : 마지막 자리 올림 처리
        if (temp != 0) {
            resultHead?.next = ListNode(temp)
        }

        return result
    }
}