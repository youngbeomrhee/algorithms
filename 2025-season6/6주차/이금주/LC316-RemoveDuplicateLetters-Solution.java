class Solution {
    public String removeDuplicateLetters(String s) {
        //1. 각 문자의 남은 개수를 세기 위한 배열
        int[] count = new int[26]; // TC: O(1), SC: O(26) = O(1)
        for(char c : s.toCharArray()){ //TC : O(n)
            count[c-'a']++;
        }

        // 2. 이미 deque에 포함된 문자인지 체크
        boolean[] visited = new boolean[26]; //TC : O(1), SC:O(26)=O(1)

        // 3. 결과를 만들 Deque
        Deque<Character> deque = new ArrayDeque<>(); //TC : O(1), SC:O(1)

        // 4. 문자열 순회
        for(char c : s.toCharArray()){ // TC: O(n)
            count[c-'a']--; // 현재 문자 사용했으므로 개수 감소, TC: O(1)

            // 이미 deque에 있으면 스킵
            if(visited[c-'a']){// TC: O(1)
                continue;
            }

            // deque 마지막이 현재 문자보다 크고, 뒤에 또 나온다면 제거
            while(!deque.isEmpty() && // TC: O(1)
                   deque.peekLast() > c &&  // 마지막 요소 확인, TC: O(1)
                   count[deque.peekLast() - 'a'] > 0) {  // 뒤에 또 나오는지 확인, TC: O(1)
                
                char removed = deque.removeLast();  // 마지막에서 제거, TC: O(1)
                visited[removed - 'a'] = false;  // visited 해제, TC: O(1)    
            }
            // 현재 문자를 deque 마지막에 추가
            deque.addLast(c); // TC: O(1)
            visited[c - 'a'] = true;  // visited 표시, TC: O(1)
            
            }

            // 5.  eque를 문자열로 변환
            StringBuilder result = new StringBuilder();  // TC: O(1), SC: O(n)
            for (char c : deque) {  // TC: O(n)
                result.append(c);  // TC: O(1)
            }
            return result.toString();  // TC: O(n)
        }
}
/*
최종 복잡도 정리

시간복잡도 (TC):
- 초기 변수 설정: count 배열, visited 배열, deque = O(3) = O(1)
- 첫 번째 for 루프 (count 계산):
    - 반복 횟수: n번
    - 루프 내부: count 증가 O(1)
    → 전체 = O(n)
- 두 번째 for 루프 (문자 처리):
    - 반복 횟수: n번
    - 루프 내부:
        * count 감소: O(1)
        * visited 확인: O(1)
        * while 루프: 각 문자는 최대 1번만 제거됨 → 전체 O(n)
        * peekLast, removeLast: O(1)
        * addLast: O(1)
    → 전체 = O(n) + O(n) = O(2n) = O(n)
- 세 번째 for 루프 (결과 생성):
    - 반복 횟수: 최대 26번 (알파벳 개수)
    - 루프 내부: append O(1)
    → 전체 = O(26) = O(1)
- toString(): O(n)
- 전체 시간복잡도: O(1) + O(n) + O(n) + O(1) + O(n) = O(3n + 2) → 최종: O(n)

공간복잡도 (SC):
- count 배열: O(26) = O(1)
- visited 배열: O(26) = O(1)
- deque: 최대 26개 문자 저장 → O(26) = O(1)
- result StringBuilder: 최대 26개 문자 → O(26) = O(1)
- for 루프: 변수 재활용 → O(0)
- 전체 공간복잡도: O(1) + O(1) + O(1) + O(1) = O(4) → 최종: O(1)
*/
