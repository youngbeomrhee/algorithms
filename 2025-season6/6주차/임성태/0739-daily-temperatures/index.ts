// 739 - Daily Temperatures

function dailyTemperatures(temperatures: number[]): number[] {
  const length = temperatures.length;
  // 결과를 저장할 배열을 길이만큼 0으로 초기화
  const answer = new Array<number>(length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < length; i++) {
    // 스택이 비어있지 않고 현재 온도가 스택 최상단 온도보다 높을 때
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()!;

      // 꺼낸 인덱스에 대한 결과를 현재 인덱스와의 차이로 저장
      answer[index] = i - index;
    }
    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
