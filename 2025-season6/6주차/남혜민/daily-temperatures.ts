// 스택으로 다음 더 따뜻한 날까지의 일수 계산
// 전체 시간 복잡도: O(n) - 각 인덱스는 최대 한 번 push/pop
// 전체 공간 복잡도: O(n) - 스택에 최대 n개의 인덱스 저장
function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const result = new Array(n).fill(0); // O(n) - 결과 배열 초기화
    const stack: number[] = []; // 인덱스 저장하는 스택

    // 배열 순회 - O(n)
    for (let i = 0; i < n; i++) {
        // 현재 온도가 스택 top 인덱스의 온도보다 높으면
        // 각 인덱스는 최대 한 번만 pop됨 - 전체적으로 O(n)
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]] // 온도 비교
        ) {
            const prevIndex = stack.pop()!; // 이전 인덱스 꺼내기
            result[prevIndex] = i - prevIndex; // 일수 차이 계산
        }
        stack.push(i); // 현재 인덱스 저장
    }

    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
