/**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

 

Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 

Constraints:

1 <= n <= 10^4
nums.length == 2 * n
-10^4 <= nums[i] <= 10^4
 */
function arrayPairSum(nums: number[]): number {
    return arrayPairSum2(nums)
}

/* 
    기본적인 해법: 정렬 후에 홀수번째 값만 sum
    (n은 nums.length라고 했을 때)
    최종 시간복잡도 O(n log n) + O(1/2n) -> O(n log n) (n은 nums의 길이)
    최종 공간복잡도: O(1)
*/
function arrayPairSum1(nums: number[]): number {
    // TC: O(n log n). n은 nums의 길이
    nums.sort((a, b) => a - b)
    // SC: O(1)
    let sum = 0
    // TC: O(1/2n) 절반만 순회
    for (let i = 0; i < nums.length; i+=2) {
        sum += nums[i]
    }
    return sum
};

/*
    최적화 버젼: 값의 범위가 제한적이므로 배열을 생성하여 counting
    (n은 nums.length라고 했을 때)
    전체 시간복잡도(Time Complexity): O(20001) + O(n) + O(20001) -> O(20001)은 O(n + 1)이므로 O(3n + 2) -> O(n)
    전체 공간복잡도(Space Complexity): O(1) + O(1) + O(20001) + O(1) -> O(n) -> O(2n + 4) -> O(n)
*/
function arrayPairSum2(nums: number[]): number {
    // 음수처리를 위한 OFFSET
    // 입력 constrains의 최대값 (-10^4 <= nums[i] <= 10^4)
    const OFFSET = Math.pow(10, 4) // SC: O(1)

    // 전체 가능한 값의 범위
    // 입력 constrains (-10^4 <= nums[i] <= 10^4) -> -10000 ~ -1, 0, 1 ~ 10000
    const RANGE = Math.pow(10, 4) * 2 + 1 // SC: O(1)

    // 모든 입력값을 카운팅하는 배열 생성
    // [1, 3, 3, 2] -> [..., 1, 1, 2, ...]
    const countRecord = new Array(RANGE).fill(0) // SC: O(Math.pow(10, 4) * 2 + 1 -> 20001), TC: O(Math.pow(10, 4) * 2 + 1 -> 20001)

    // 모든 입력값의 빈도수 기록
    for (let num of nums) { // TC: O(n)
        countRecord[num + OFFSET]++
    }

    let sum = 0

    // 현재 숫자를 결과에 포함할지 여부
    // record를 순회하며 값이 있는 경우 min (a, b) 형태이므로 a일때 true, b일 때 false로 switch
    let shouldTake = true // SC: O(1)
    for (let num = 0; num < RANGE; num++) { // TC: O(20001)
        while (countRecord[num] > 0) { // 해당값이 존재
            if (shouldTake) {
                sum += num - OFFSET // 음수를 위한 OFFSET을 빼줘서 실제값으로 변환
            }

            // shouldTake switch
            shouldTake = !shouldTake

            countRecord[num]--
        }
    }

    return sum
}
