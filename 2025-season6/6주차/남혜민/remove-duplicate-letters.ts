// 스택 + 그리디로 중복 제거하며 사전순 최소 문자열 생성
// 전체 시간 복잡도: O(n) - 각 문자는 최대 한 번 push/pop
// 전체 공간 복잡도: O(1) - 알파벳 26개로 제한
function removeDuplicateLetters(s: string): string {
    const result = []; // stack

    const count = new Map<string, number>(); // 각 문자 개수
    const stack = new Set<string>(); // 스택에 있는지 확인

    // 각 문자 개수 세기 - O(n)
    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    // 문자열 순회하며 스택 구성 - O(n)
    for (const char of s) {
        count.set(char, count.get(char)! - 1); // 현재 문자 사용 처리

        if (stack.has(char)) continue; // 이미 스택에 있으면 스킵

        // 스택의 top이 현재 문자보다 크고, 뒤에 또 나온다면 제거
        // 전체적으로 O(n) - 각 문자는 최대 한 번만 pop됨
        while (
            result.length > 0 &&
            result[result.length - 1] > char && // 사전순 비교
            count.get(result[result.length - 1])! > 0 // 문자가 없어질 때까지
        ) {
            stack.delete(result.pop()!);
        }

        result.push(char);
        stack.add(char);
    }

    return result.join(''); // O(n) - 배열을 문자열로 변환
}

console.log(removeDuplicateLetters('bcabc')); // "abc"
