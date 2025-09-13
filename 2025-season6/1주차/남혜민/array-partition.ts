// 1. 큰 순서대로 정렬해서 2개씩 묶어 min을 게신
// - sort(): O(n log n) - 자바스크립트의 sort는 퀵정렬 기반
// - for: O(n) - n/2번 반복하므로 O(n)
// 전체 시간 복잡도: O(n log n + n/2) => O(n log n)
function arrayPairSum1(nums: number[]): number {
    nums.sort((a, b) => b - a); // O(n log n) - 최악의 경우 퀵정렬
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        // O(n/2) - n/2번 반복
        sum += Math.min(nums[i], nums[i + 1]);
    }
    return sum;
}

// 2. 1번의 퀵정렬 대신 카운팅 정렬을 적용 (범위: -10^4 <= nums[i] <= 10^4)
// - 카운팅 정렬: O(n + k) - k는 숫자의 범위
// - for: O(n) - n번 반복하므로 O(n)
//  전체 시간 복잡도: O(20001 + n + 20001) = O(n + 40002) => O(n)
function arrayPairSum2(nums: number[]): number {
    let sum = 0;
    let counts = new Array(20001).fill(0); // O(20001) - 배열 생성 및 초기화
    // 1) 빈도수 세기
    for (let i = 0; i < nums.length; i++) {
        // O(n) - n번 반복
        counts[nums[i] + 10000] += 1;
    }
    let takeTurn = true;
    // 2) 카운팅 정렬 (범위가 제한적인 경우 가능)
    for (let i = 0; i < 20001; i += 1) {
        // O(20001) - 20001번 반복
        if (counts[i] === 0) {
            // 해당하는 숫자 없으면 통과
            continue;
        }
        let currentNum = i - 10000; // 실제 숫자
        let countValue = counts[i];

        for (let j = 0; j < countValue; j += 1) {
            if (takeTurn) {
                sum += currentNum;
            }
            takeTurn = !takeTurn;
        }
    }
    return sum;
}

const ex1 = [1, 4, 3, 2]; // 4
const ex2 = [6, 2, 6, 5, 1, 2]; // 9

console.log(arrayPairSum1(ex1));
console.log(arrayPairSum1(ex2));

console.log(arrayPairSum2(ex1));
console.log(arrayPairSum2(ex2));
