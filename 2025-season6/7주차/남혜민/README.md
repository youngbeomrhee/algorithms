# 7주차 알고리즘 문제 풀이

## 문제 목록

### 1. Implement Stack using Queues

-   **파일**: [implement-stack-using-queues.ts](./implement-stack-using-queues.ts)
-   **링크**: https://leetcode.com/problems/implement-stack-using-queues/description/
-   **난이도**: Easy
-   **요약**: 큐를 사용하여 LIFO(Last In First Out) 스택을 구현하는 문제
-   **핵심 아이디어**: 큐에 원소를 추가할 때마다 새 원소를 맨 앞으로 이동시켜 LIFO 순서 유지
-   **시간복잡도**: push O(n), pop/top/empty O(1)
-   **공간복잡도**: O(n) - 큐에 최대 n개의 원소 저장

### 2. Implement Queue using Stacks

-   **파일**: [implement-queue-using-stacks.ts](./implement-queue-using-stacks.ts)
-   **링크**: https://leetcode.com/problems/implement-queue-using-stacks/description/
-   **난이도**: Easy
-   **요약**: 스택을 사용하여 FIFO(First In First Out) 큐를 구현하는 문제
-   **핵심 아이디어**: 입력용 스택과 출력용 스택 두 개를 사용하여 FIFO 순서 유지
-   **시간복잡도**: push O(1), pop/peek O(1) amortized (평균)
-   **공간복잡도**: O(n) - 두 스택에 최대 n개의 원소 저장

## 학습 포인트

### Implement Stack using Queues

-   **큐로 스택 구현**: 큐는 FIFO, 스택은 LIFO이므로 원소 순서를 재배치해야 함
-   **push 시 재배치**: 새 원소를 추가한 후 n-1번 shift/push하여 맨 앞으로 이동
-   **트레이드오프**: push는 O(n)이지만 pop/top은 O(1)로 효율적
-   **단일 큐 사용**: 하나의 큐만으로도 스택 동작 구현 가능

### Implement Queue using Stacks

-   **두 스택 활용**: inStack(입력용), outStack(출력용)으로 역할 분리
-   **Lazy Transfer**: outStack이 비어있을 때만 inStack에서 원소 이동
-   **Amortized O(1)**: 각 원소는 최대 2번(inStack→outStack, pop) 이동하므로 평균 O(1), 최악은 O(n)
-   **효율적 구현**: push는 항상 O(1), pop/peek은 평균 O(1)
