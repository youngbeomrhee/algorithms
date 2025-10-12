package LinkedList;

import java.util.Stack;

public class ValidParentheses {
    public static void main(String[] args) {
        ValidParentheses validParentheses = new ValidParentheses();
        System.out.println(validParentheses.isValid("()[(])"));
        System.out.println(validParentheses.isValid("]"));
    }

    /**
     * 시간복잡도: s의 길이가 n 일때, O(n)
     */
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char pop = stack.pop();
                if (ch == ')' && pop != '(') {
                    return false;
                }
                if (ch == ']' && pop != '[') {
                    return false;
                }
                if (ch == '}' && pop != '{') {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
