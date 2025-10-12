# 4주차 알고리즘 문제 풀이

## 문제 목록

### 1. Swap Nodes in Pairs

-   **파일**: [swap-nodes-in-pairs.ts](./swap-nodes-in-pairs.ts)
-   **링크**: https://leetcode.com/problems/swap-nodes-in-pairs/description/
-   **난이도**: Medium
-   **요약**: 연결 리스트에서 인접한 두 노드씩 교환하는 문제 (노드 값이 아닌 노드 자체를 교환)
-   **핵심 아이디어**: 더미 노드를 사용하여 이전 노드 포인터로 두 노드씩 교환
-   **시간복잡도**: O(n) - 모든 노드를 한 번씩 방문 (n/2번 반복)
-   **공간복잡도**: O(1) - 더미 노드 1개만 생성하고 기존 노드들의 연결만 변경

### 2. Odd Even Linked List

-   **파일**: [odd-even-linked-list.ts](./odd-even-linked-list.ts)
-   **링크**: https://leetcode.com/problems/odd-even-linked-list/description/
-   **난이도**: Medium
-   **요약**: 홀수 인덱스 노드들을 먼저 그룹화하고 짝수 인덱스 노드들을 뒤에 배치하는 문제
-   **핵심 아이디어**: 홀수/짝수 체인을 별도로 구성한 후 홀수 체인 끝을 짝수 체인 시작과 연결
-   **시간복잡도**: O(n) - 각 노드를 정확히 한 번씩만 방문
-   **공간복잡도**: O(1) - 포인터 3개만 사용하고 기존 노드 재활용

## 학습 포인트

### Swap Nodes in Pairs

-   **더미 노드 활용**: 연결 리스트 조작 시 경계 조건을 간단하게 처리
-   **포인터 3개 패턴**: prev, first, second 포인터로 노드 교환 수행
-   **노드 교환 순서**: prev → second, first → second.next, second → first 순으로 연결
-   **반복 조건**: 교환할 두 노드가 모두 존재할 때까지 반복

### Odd Even Linked List

-   **체인 분리 기법**: 하나의 연결 리스트를 두 개의 별도 체인으로 분리
-   **포인터 관리**: odd, even, evenHead 포인터로 각 체인의 상태 추적
-   **인덱스 기반 분류**: 노드의 위치(홀수/짝수)에 따른 분류 및 재배열
-   **최종 연결**: 분리된 체인들을 하나로 합치는 연결 기법
