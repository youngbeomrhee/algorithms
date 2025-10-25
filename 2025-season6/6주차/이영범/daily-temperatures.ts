/*
739. Daily Temperatures
Medium
Topics
premium lock icon
Companies
Hint
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.



Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]


Constraints:

1 <= temperatures.length <= 10^5
30 <= temperatures[i] <= 100

최종 TC: O(n) + O(n) = O(2n) = O(n)
*/
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  // TC: O(n) - 길이 n 배열 생성 및 0으로 초기화
  const answer = new Array(n).fill(0);
  // 인덱스를 저장하는 Monotonic Decreasing Stack
  const stack: number[] = [];

  // TC: O(n)
  // while 루프를 포함해도 각 인덱스는 최대 1번만 push, 1번만 pop되므로 amortized O(n)
  for (let i = 0; i < n; i++) {
    // 현재 온도가 스택 top의 온도보다 높으면
    // 이전 낮은 온도들의 답을 업데이트
    // TC: Amortized O(1) per iteration - 전체 실행에서 총 n번의 pop만 발생
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIdx = stack.pop()!;
      answer[prevIdx] = i - prevIdx; // 몇 일 후에 더 따뜻해지는지
    }

    // 현재 인덱스를 스택에 저장 (아직 답을 찾지 못한 날들)
    stack.push(i);
  }

  // 스택에 남아있는 인덱스들은 더 따뜻한 날이 없는 경우 (이미 0으로 초기화됨)
  return answer;
}

export default dailyTemperatures;
