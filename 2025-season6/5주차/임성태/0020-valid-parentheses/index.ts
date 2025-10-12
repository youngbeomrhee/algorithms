function isValid(s: string): boolean {
    const stack: string[] = []; // O(1) - 빈 배열 선언

    /** 괄호의 짝을 정의한 맵 (닫는 괄호 → 여는 괄호) */
    const pairMap: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{',
    }; // O(1) - 해시맵 생성 (항상 크기 3)

    // 전체 for 루프는 O(n) - 문자열의 길이만큼 반복
    for (const char of s) {
      if (char === '(' || char === '[' || char === '{') {
        // 여는 괄호는 무조건 스택에 push
        stack.push(char);
      } else {
        // 닫는 괄호일 경우 스택에서 pop하고, 짝이 맞는지 확인
        const top = stack.pop();
        if (top !== pairMap[char]) {
          return false; // 짝이 안 맞으면 false
        }
      }
    }

    // 순회 후 스택이 비어 있어야 모든 괄호가 짝을 이룸
    return stack.length === 0;
};


/**
 * 복잡도 검증 요약
 *
 * 시간 복잡도 (Time Complexity)
 * - 문자열 길이를 n이라고 할 때, 모든 문자를 한 번씩 순회 ⇒ O(n)
 * - 각 문자의 push/pop 연산은 O(1)
 * => 총 시간 복잡도: O(n)
 *
 * 공간 복잡도 (Space Complexity)
 * - 스택에 최대 n개의 괄호가 저장될 수 있음 ⇒ O(n)
 * - 추가로 사용하는 맵(pairMap)은 상수 공간 ⇒ O(1)
 * => 총 공간 복잡도: O(n)
 */
