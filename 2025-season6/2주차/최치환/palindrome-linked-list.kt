class Solution {
    /*
        기본 버전: NodeList를 List로 변환 후 양 끝에서 비교
        (n은 연결리스트의 노드 개수라고 했을 때)
        전체 시간복잡도(Time Complexity): O(1) + O(1) + O(n) + O(n/2) + O(1) -> O(n)
        전체 공간복잡도(Space Complexity): O(n) + O(1) + O(1) -> O(n)
    */
    fun isPalindrome(head: ListNode?): Boolean {
        val list = mutableListOf<Int>()
        var next = head

        // NodeList를 List로 변환
        while (next != null) { // TC: O(n)
            list.add(next.`val`)
            next = next.next
        }

        // List의 양 끝에서 값 비교
        for (i in 0 until list.size / 2) { // TC: O(n/2)
            if (list[i] != list[list.size - i - 1]) {
                return false
            }
        }
        return true
    }
}