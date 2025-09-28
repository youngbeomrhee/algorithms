fun reverseList(head: ListNode?): ListNode? {
    var origin = head
    var result : ListNode? = null
    //1회 순회 -> 시간복잡도 O(n)
    //공간 복잡도 > O(n)
    while (origin != null) {
        val node = ListNode(origin.`val`)
        node.next = result
        origin = origin.next
        result = node
    }

    return result
}

//최적화 풀이 공간 복잡도 n(1)
fun reversList2(head: ListNode?): ListNode? {
    var prev: ListNode? = null
    var curr = head

    while (curr != null) {
        val next = curr.next   // 다음 노드 임시 저장
        curr.next = prev       // 현재 노드의 next를 이전 노드로 변경
        prev = curr            // prev를 현재 노드로 이동
        curr = next            // curr을 다음 노드로 이동
    }

    return prev
}