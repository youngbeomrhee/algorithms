// 괄호 문자열의 유효성을 검사하는 문제
// 시간 복잡도: O(n) - 문자열의 각 문자를 한 번씩 순회
// 공간 복잡도: O(n) - 최악의 경우 모든 여는 괄호가 스택에 저장
function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        // O(1) - 해시맵 생성
        ')': '(',
        '}': '{',
        ']': '[',
    };

    // 문자열 순회 - O(n)
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // 조건에 맞으면 스택에 추가
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                // 스택 비어있는지 확인 + 팝 + 매칭 확인 후 종료
                return false;
            }
        }
    }

    return stack.length === 0; // 스택 비어있는지 확인
}

// 테스트 케이스
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
