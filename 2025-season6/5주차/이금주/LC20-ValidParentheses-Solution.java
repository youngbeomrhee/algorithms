/*
최종 복잡도 정리

시간복잡도
- 초기 변수 설정: stack 생성 O(1)
- toCharArray(): 문자열을 배열로 변환 O(n)
- for 루프:
    - 조건 확인: O(1)
    - stack.push(), stack.isEmpty(), stack.pop()  : O(1 + 1 + 1) = O(3)
    - 짝 확인 (3개 조건): O(3) = O(1)
    - 총 루프 내부: O(1)
    - 반복 횟수: n번
→ 전체 = O(1 × n) = O(n)
- return stack.isEmpty(): O(1)
- 전체 시간복잡도: O(1) + O(n) + O(n) + O(1) = O(2n + 2) → 최종: O(n)

공간복잡도
- 추가 변수: stack, c, top = 3개 → O(3)
- toCharArray(): 문자열 길이만큼 배열 생성 → O(n)
- stack에 저장되는 데이터:
    - 최악의 경우: 모든 문자가 여는 괄호 "(((("
    - 최대 n개 저장 → O(n)
- return: O(1)
- 전체 공간복잡도: O(3) + O(n) + O(n) + O(1) = O(2n + 4) → 최종: O(n)
*/

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();  // TC: O(1), SC: O(1)

        for(char c : s.toCharArray()){  // TC: O(n) - n번 반복, SC: O(n) - toCharArray()
            if(c =='(' || c=='[' || c=='{'){ // TC: O(1)
                stack.push(c); // TC: O(1), SC: O(1) - 최악 n개 쌓임
            }
            else{
                if(stack.isEmpty()){ // TC: O(1)
                    return false; // TC: O(1)
                }

                char top = stack.pop();  // TC: O(1), SC: O(1)

                if(c ==')' && top !='(') return false; // TC: O(1)
                if(c ==']' && top !='[') return false; // TC: O(1)
                if(c =='}' && top !='{') return false; // TC: O(1)
            }
        }

        // 스택이 비어있어야 true
        return stack.isEmpty(); // TC: O(1)
    }
}
