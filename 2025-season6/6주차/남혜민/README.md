# 6주차 알고리즘 문제 풀이

## 문제 목록

### 1. Remove Duplicate Letters

-   **파일**: [remove-duplicate-letters.ts](./remove-duplicate-letters.ts)
-   **링크**: https://leetcode.com/problems/remove-duplicate-letters/description/
-   **난이도**: Medium
-   **요약**: 문자열에서 중복된 문자를 제거하면서 사전순으로 가장 작은 문자열을 만드는 문제
-   **핵심 아이디어**: 스택을 사용하여 현재 문자보다 크고 뒤에 다시 나오는 문자를 제거하며 그리디하게 구성
-   **시간복잡도**: O(n) - 각 문자는 최대 한 번 push/pop
-   **공간복잡도**: O(1) - 알파벳 26개로 제한

### 2. Daily Temperatures

-   **파일**: [daily-temperatures.ts](./daily-temperatures.ts)
-   **링크**: https://leetcode.com/problems/daily-temperatures/description/
-   **난이도**: Medium
-   **요약**: 각 날짜에 대해 다음 더 따뜻한 날까지 기다려야 하는 일수를 계산하는 문제
-   **핵심 아이디어**: 스택에 인덱스를 저장하고, 더 높은 온도를 만나면 이전 인덱스들의 결과값 계산
-   **시간복잡도**: O(n) - 각 인덱스는 최대 한 번 push/pop
-   **공간복잡도**: O(n) - 스택에 최대 n개의 인덱스 저장

## 학습 포인트

### Remove Duplicate Letters

-   **스택 + 그리디**: 현재 문자보다 크고 뒤에 다시 나오는 문자는 제거 가능
-   **문자 개수 추적**: Map으로 각 문자의 남은 개수를 관리하여 제거 가능 여부 판단
-   **Set 활용**: 스택에 이미 있는 문자는 스킵하여 중복 방지
-   **원본 순서 유지**: 단순 정렬이 아닌 원본 문자열의 순서를 유지하면서 최적화

### Daily Temperatures

-   **모노토닉 스택**: 온도가 감소하는 순서로 인덱스를 유지하는 스택 패턴
-   **인덱스 저장**: 온도 값이 아닌 인덱스를 저장하여 일수 차이 계산
-   **역방향 참조**: 현재 원소가 이전 원소들의 답을 결정하는 패턴
-   **O(n) 보장**: 각 인덱스는 최대 한 번만 스택에 들어가고 나옴
