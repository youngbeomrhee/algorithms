class Solution {
    // 전체 시간복잡도: O(n)
    // 전체 공간복잡도: O(n)

    fun isValid(s: String): Boolean {
        if (s.length < 2) {
            return false
        }

        val stack = Stack<Char>()
        // O(n)
        for (i in s) {
            if (i == '(' || i == '[' || i == '{') {
                stack.push(i)
            } else if (i == ')' || i == ']' || i == '}') {
                if (stack.isEmpty()) {
                    return false
                }

                val top = stack.pop()
                if ((top == '(' && i != ')') || (top == '{' && i != '}') || top == '[' && i != ']') {
                    return false
                }
            }
        }

        return stack.isEmpty()
    }
}