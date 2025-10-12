# 5주차 알고리즘 문제 풀이

## 문제 목록

### 1. Reverse Linked List II

-   **파일**: [reverse-linked-list-ii.ts](./reverse-linked-list-ii.ts)
-   **링크**: https://leetcode.com/problems/reverse-linked-list-ii/description/
-   **난이도**: Medium
-   **요약**: 연결 리스트의 left번째부터 right번째까지 노드를 뒤집는 문제
-   **핵심 아이디어**: 더미 노드를 사용하여 뒤집을 구간의 이전 노드를 찾고, 반복적으로 노드를 앞으로 이동
-   **시간복잡도**: O(n) - 리스트를 한 번 순회하며 뒤집을 구간을 찾고 뒤집음
-   **공간복잡도**: O(1) - 포인터 몇 개만 사용하고 기존 노드 재활용

### 2. Valid Parentheses

-   **파일**: [valid-parentheses.ts](./valid-parentheses.ts)
-   **링크**: https://leetcode.com/problems/valid-parentheses/description/
-   **난이도**: Easy
-   **요약**: 괄호 문자열의 유효성을 검사하는 문제 (올바른 순서로 열리고 닫히는지)
-   **핵심 아이디어**: 스택을 사용하여 여는 괄호를 저장하고 닫는 괄호와 매칭 확인
-   **시간복잡도**: O(n) - 문자열의 각 문자를 한 번씩 순회
-   **공간복잡도**: O(n) - 최악의 경우 모든 여는 괄호가 스택에 저장

## 학습 포인트

### Reverse Linked List II

-   **더미 노드 활용**: 연결 리스트 조작 시 경계 조건을 간단하게 처리
-   **부분 뒤집기 기법**: 전체가 아닌 특정 구간만 뒤집는 효율적인 방법
-   **노드 이동 패턴**: current.next를 prev.next 앞으로 이동시키는 반복 패턴
-   **인덱스 기반 탐색**: left 위치까지 이동 후 right-left번 뒤집기 수행

### Valid Parentheses

-   **스택 자료구조**: LIFO 특성을 활용한 괄호 매칭 검사
-   **해시맵 활용**: 닫는 괄호와 여는 괄호의 매핑 관계 저장
-   **조기 종료**: 매칭되지 않는 경우 즉시 false 반환으로 효율성 향상
-   **최종 검증**: 모든 괄호가 처리된 후 스택이 비어있는지 확인