/*
20. Valid ParenthesesGiven a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/
/*
	최종 TC: O(n) (n은 문자열의 길이)
*/
export function isValid(s: string): boolean {
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    const top = stack[stack.length - 1];
    if (
      (top === '(' && char === ')') ||
      (top === '{' && char === '}') ||
      (top === '[' && char === ']')
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

/* 
	최종 TC: O(n) (n은 문자열의 길이)
	early return으로 조기 종료, map을 활용하여 확장성 있게 구현, 조건에 맞지 않는 경우 바로 종료
*/
export function isValid2(s: string): boolean {
  // Early return: 홀수 길이는 항상 invalid
  if (s.length % 2 !== 0) return false;

  // 닫는 괄호 -> 여는 괄호 매핑
  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in pairs) {
      // 닫는 괄호: 스택이 비었거나 매칭 실패시 즉시 false
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      // 여는 괄호: 스택에 push
      stack.push(char);
    }
  }

  return stack.length === 0;
}
