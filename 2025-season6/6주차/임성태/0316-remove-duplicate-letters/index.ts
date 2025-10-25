// 319 - Remove Duplicate Letters
function removeDuplicateLetters(s: string): string {
  // 마지막으로 등장하는 인덱스 계산
  const lastIndex: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  // 스택과 방문 여부 값 초기화
  const stack: string[] = [];
  const visited: Set<string> = new Set();

  // 문자열 순회하며 스택 관리
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (visited.has(char)) continue; // 이미 스택에 있는 문자는 건너뜀

    // 스택의 마지막 문자가 현재 문자보다 사전식 순서상 뒤에 있고, 나중에 다시 등장할 수 있다면 제거
    while (
      stack.length > 0 &&
      stack[stack.length - 1].charCodeAt(0) > char.charCodeAt(0) &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      visited.delete(stack.pop()!);
    }

    stack.push(char);
    visited.add(char);
  }

  return stack.join('');
}

console.log('expected: abc === ', removeDuplicateLetters('bcabc'));
console.log('expected: acdb === ', removeDuplicateLetters('cbacdcbc'));
// 319 - Remove Duplicate Letters

function removeDuplicateLetters(s: string): string {
  // 마지막으로 등장하는 인덱스 계산
  const lastIndex: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  // 스택과 방문 여부 값 초기화
  const stack: string[] = [];
  const visited: Set<string> = new Set();

  // 문자열 순회하며 스택 관리
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (visited.has(char)) continue; // 이미 스택에 있는 문자는 건너뜀

    // 스택의 마지막 문자가 현재 문자보다 사전식 순서상 뒤에 있고, 나중에 다시 등장할 수 있다면 제거
    while (
      stack.length > 0 &&
      stack[stack.length - 1].charCodeAt(0) > char.charCodeAt(0) &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      visited.delete(stack.pop()!);
    }

    stack.push(char);
    visited.add(char);
  }

  return stack.join('');
}

console.log('expected: abc === ', removeDuplicateLetters('bcabc'));
console.log('expected: acdb === ', removeDuplicateLetters('cbacdcbc'));
