/*
최종 복잡도 정리

시간복잡도
- 초기 변수 설정: stack 생성, HashMap 생성,map.put() 3회 =  O(1+1+3) = O(5)
- toCharArray(): 문자열을 배열로 변환 O(n)
- for 루프:
    - 반복 횟수: n번
→ 전체 = O(1 × n) = O(n)
- return stack.isEmpty(): O(1)
- 전체 시간복잡도: O(5) + O(n) + O(n) + O(1) = O(2n + 6) → 최종: O(n)

공간복잡도
- 추가 변수: stack, map, map 내부 데이터 3쌍 , c = 3개 → O(6)
- toCharArray(): 문자열 길이만큼 배열 생성 → O(n)
- stack에 저장되는 데이터:
    - 최악의 경우: 모든 문자가 여는 괄호 "(((("
    - 최대 n개 저장 → O(n)
- return: O(1)
- 전체 공간복잡도: O(6) + O(n) + O(n) + O(1) = O(2n + 7) → 최종: O(n)
*/

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>(); // TC: O(1), SC: O(1)

        HashMap<Character, Character> map = new HashMap<>(); // TC: O(1), SC: O(1)
        map.put(')', '('); // TC: O(1), SC: O(1)
        map.put(']', '['); // TC: O(1), SC: O(1)
        map.put('}', '{'); // TC: O(1), SC: O(1)

        for(char c: s.toCharArray()){ // TC: O(n) - n번 반복, SC: O(n) - toCharArray()
            // 닫는 괄호
            if(map.containsKey(c)){ // TC: O(1)
                //stack이 비어있거나 짝이 안맞으면 false
                if(stack.isEmpty() || stack.pop() != map.get(c)){ // TC: O(1) + O(1) + O(1)
                    return false; // TC: O(1)
                }
            }
            // 여는 괄호 
            else{
                stack.push(c); // TC: O(1), SC: O(1) - 최악 n개 쌓임
            }
        } 
        return stack.isEmpty();  // TC: O(1)
    }
}
