# 1주차 알고리즘 문제 풀이

## 문제 목록

### 1. Array Partition

-   **파일**: [array-partition.ts](./array-partition.ts)
-   **링크**: https://leetcode.com/problems/array-partition/description/
-   **난이도**: Easy
-   **요약**: 정수 배열을 2개씩 쌍으로 묶어서 각 쌍의 최솟값들의 합이 최대가 되도록 하는 문제
-   **핵심 아이디어**: 큰 수부터 정렬하여 2개씩 묶으면 최적해 도출
-   **시간복잡도**:
    -   풀이1 (퀵정렬): O(n log n)
    -   풀이2 (카운팅정렬): O(n)
-   **공간복잡도**:
    -   풀이1: O(1)
    -   풀이2: O(k) - k는 숫자 범위

### 2. Best Time to Buy and Sell Stock

-   **파일**: [best-time-to-buy-and-sell-stock.ts](./best-time-to-buy-and-sell-stock.ts)
-   **링크**: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
-   **난이도**: Easy
-   **요약**: 주식 가격 배열에서 한 번의 매수/매도로 얻을 수 있는 최대 이익 계산
-   **핵심 아이디어**: Greedy 알고리즘으로 최저 매수가와 최대 이익을 동시에 추적
-   **시간복잡도**: O(n)
-   **공간복잡도**: O(1)

## 학습 포인트

### Array Partition

-   **정렬 최적화**: 제한된 범위의 숫자에서는 카운팅 정렬이 퀵정렬보다 효율적
-   **수학적 통찰**: 정렬된 배열에서 2개씩 묶을 때 큰 수부터 묶는 것이 최적

### Best Time to Buy and Sell Stock

-   **Greedy 알고리즘**: 지역 최적해가 전역 최적해가 되는 경우
-   **상태 추적**: 한 번의 순회로 두 가지 상태(최저가, 최대이익)를 동시에 관리
