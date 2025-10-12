/*
  전체 시간복잡도(Time Complexity): O(n)
  전체 공간복잡도(Space Complexity): O(n)
  (n: 문자열의 길이)
*/
function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;

    const stack: string[] = []; // SC: O(n)

    const pairs: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) { // TC: O(n)
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0; // TC: O(1)
};

