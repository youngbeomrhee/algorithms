# 이번 시간 과제

- https://leetcode.com/problems/palindrome-linked-list/description/
- https://leetcode.com/problems/merge-two-sorted-lists/description/

# 꼭 지켜주세요
많은 분이 제출해 주시다보니 검수가 어렵습니다. 아래 규칙을 꼭 준수해 주세요

- 시간복잡도가 발생하는 모든 코드에는 아래 규격대로 주석으로 시간복잡도를 기술해 주세요

  - 규격
code // TC: O(x)

  - 코드상 예시
```
const countRecord = new Array(RANGE).fill(0) // SC: O(Math.pow(10, 4) * 2 + 1 -> 20001), TC: O(Math.pow(10, 4) * 2 + 1 -> 20001)

for (let num of nums) { // TC: O(n)

for (let num = 0; num < RANGE; num++) { // TC: O(20001)
```

- 라인별로 기술된 시간복잡도를 최종적으로 가장 상단에 정리해 주세요
```
    (nums.length를 n이라고 했을 때)
    전체 시간복잡도(Time Complexity): O(20001) + O(n) + O(20001) -> O(20001)은 O(n + 1)이므로 O(3n + 2) -> O(n)
    전체 공간복잡도(Space Complexity): O(1) + O(1) + O(20001) + O(1) -> O(n) -> O(2n + 4) -> O(n)
```

- 공유드린 엑셀에 마지막 시간 복잡도를 정리해 주세요
```
O(20001) + O(n) + O(20001) -> O(20001)은 O(n + 1)이므로 O(3n + 2) -> O(n)
(n: nums.length)
```

- 주의: (nums.length를 n이라고 했을 때) 처럼 마지막으로 정리한 내용과 본인이 기술한 라인별 시간복잡도가 동일한 기준을 따르고 있는지 확인해 주세요. 변수는 n 하나가 아니라 여러개일수 있고, 상수중에 정의한 변수로 치환이 가능할수도 있습니다