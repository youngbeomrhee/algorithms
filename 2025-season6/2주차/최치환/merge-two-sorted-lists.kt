class Solution {
    /*
        NodeList를 List로 변환 후 리스트를 합치고 정렬
        (n은 list1의 노드 개수, m은 list2의 노드 개수라고 했을 때)
        전체 시간복잡도(Time Complexity): O(1) + O(n) + O(m) + O(n+m) + O((n+m)log(n+m)) + O(1) + O(n+m) -> O((n+m)log(n+m))
        전체 공간복잡도(Space Complexity): O(n) + O(m) + O(n+m) + O(1) -> O(n+m)
    */
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        if (list1 == null) {
            return list2
        } else if (list2 == null) {
            return list1
        }

        val numberList1 = toNodeList(list1) // SC: O(n), TC: O(n)
        val numberList2 = toNodeList(list2) // SC: O(m), TC: O(m)

        numberList1.addAll(numberList2) // TC: O(m)
        numberList1.sortBy { it } // TC: O((n+m)log(n+m))
        
        if (numberList1.isEmpty()) {
            return null
        }

        return getNode(numberList1)
    }
    
    /*
        List를 ListNode로 변환
    */
    fun getNode(list: List<Int>): ListNode {
        val node = ListNode(list[0])
        var head = node

        for (i in 1 until list.size) { // TC: O(k)
            head.next = ListNode(list[i]) // TC: O(1)
            head = head.next!! // TC: O(1)
        }
        
        return node
    }
    
    /*
        ListNode를 List로 변환
    */
    fun toNodeList(list: ListNode?): MutableList<Int> {
        val numberList = mutableListOf<Int>()
        var head = list

        while (head != null) { // TC: O(k)
            numberList.add(head.`val`) // TC: O(1)
            head = head.next // TC: O(1)
        }

        return numberList
    }
}