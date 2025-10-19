package LinkedList;

import java.util.Stack;

/**
 * 시간 복잡도 : O(n) // n은 s의 길이
 */
public class RemoveDuplicateLetters {
    public static void main(String[] args) {
        RemoveDuplicateLetters removeDuplicateLetters = new RemoveDuplicateLetters();
        System.out.println(removeDuplicateLetters.removeDuplicateLetters("bcabc"));
    }

    public String removeDuplicateLetters(String s) {
        int[] lastIndex = new int[26];
        for (int i = 0; i < s.length(); i++) {
            lastIndex[s.charAt(i) - 'a'] = i;
        }

        Stack<Character> stack = new Stack<>();
        boolean[] inStack = new boolean[26];

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            // 이미 스택에 있는 문자는 건너뛰기
            if (inStack[c - 'a']) {
                continue;
            }

            // 스택의 top이 현재 문자보다 크고, 나중에 다시 나온다면 제거
            while (!stack.isEmpty() && stack.peek() > c && lastIndex[stack.peek() - 'a'] > i) {
                char removed = stack.pop();
                inStack[removed - 'a'] = false;
            }

            // 현재 문자 추가
            stack.push(c);
            inStack[c - 'a'] = true;
        }

        // 4. 스택을 문자열로 변환
        StringBuilder result = new StringBuilder();
        for (char c : stack) {
            result.append(c);
        }

        return result.toString();
    }
}
