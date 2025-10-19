/*
최종 TC: O(26) + O(n) + O(26) + O(n) = O(2n + 52) = O(n)
- 각 문자의 마지막 위치 저장: O(n)
- 스택 구성 (각 문자는 최대 1번 push/pop): O(n)
 */
export function removeDuplicateLetters(s: string): string {
  const n = s.length;
  // TC: O(26)
  const lastIdx = new Array<number>(26).fill(-1);

  // 1) 각 문자의 마지막 등장 위치
  // TC: O(n)
  for (let i = 0; i < n; i++) {
    lastIdx[s.charCodeAt(i) - 97] = i;
  }

  const stack: string[] = [];
  // TC: O(26)
  const inStack = new Array<boolean>(26).fill(false);

  // 2) 그리디 + 모노토닉 스택
  // TC: O(n) - 각 문자는 최대 1번만 push되고 1번만 pop되므로 while 포함 전체 amortized O(n)
  for (let i = 0; i < n; i++) {
    const c = s[i];
    const idx = c.charCodeAt(0) - 97;

    // 이미 결과(스택)에 있으면 건너뛰기
    if (inStack[idx]) continue;

    // 현재 문자 c보다 사전순으로 큰 문자가 top에 있고,
    // 그 문자가 뒤에도 더 나온다면 pop해서 더 작은 사전순 만들기
    // TC: Amortized O(1) per iteration - 각 문자는 최대 1번만 pop됨
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > c &&
      lastIdx[stack[stack.length - 1].charCodeAt(0) - 97] > i
    ) {
      const popped = stack.pop()!;
      inStack[popped.charCodeAt(0) - 97] = false;
    }

    stack.push(c);
    inStack[idx] = true;
  }

  return stack.join("");
}
