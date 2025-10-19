class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length; // TC: O(1), SC: O(n)
        int answer[] = new int[n]; // 결과 배열, TC: O(1), SC: O(n)
        Stack<Integer> stack = new Stack<>(); // 인덱스를 저장하는 감소 스택,  TC: O(1), SC: O(n)

        for(int i=0; i<n; i++){  // 모든 날짜 순회, TC: O(n)
            // 현재 기온이 스택 top의 기온보다 높으면 pop하며 답을 계산
            while(!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()] ){
                int prevIdx = stack.pop(); //답을 찾지 못한 이전 날짜의 인덱스, TC: O(1)
                temperatures[prevIdx] = i-prevIdx //현재 날짜 - 이전 날짜 = 대기 일수, TC: O(1)
            }
             stack.push(i); // 현재 인덱스를 스택에 추가, TC: O(1)
        }
         return answer; // 결과 반환, TC: O(1)
    }
}

/*
최종 복잡도 정리

시간복잡도 (TC):
- 변수 초기화: n, answer, stack = O(1) + O(1) + O(1) = O(3) = O(1)
- for 루프:
    - 반복 횟수: n번
    - 루프 내부:
        * isEmpty() 체크: O(1)
        * peek(): O(1)
        * while 루프: 각 원소는 최대 1번만 push되고 1번만 pop됨 → 전체 O(n)
        * pop(): O(1)
        * 인덱스 차이 계산: O(1)
        * push(): O(1)
    → 전체 = O(n) + O(n) = O(2n) = O(n)
- return: O(1)
- 전체 시간복잡도: O(1) + O(n) + O(1) = O(n + 2) → 최종: O(n)

공간복잡도 (SC):
- n 변수: O(1)
- answer 배열: O(n)
- stack: 최악의 경우 모든 인덱스 저장 (감소하는 배열) → O(n)
- for 루프 변수 (i, prevIdx): O(1)
- 전체 공간복잡도: O(1) + O(n) + O(n) + O(1) = O(2n + 2) → 최종: O(n)
*/
