# 3주차 알고리즘 문제 풀이

## 문제 목록

### 1. Reverse Linked List

-   **파일**: [reverse-linked-list.ts](./reverse-linked-list.ts)
-   **링크**: https://leetcode.com/problems/reverse-linked-list/description/
-   **난이도**: Easy
-   **요약**: 연결 리스트의 순서를 뒤집는 문제
-   **핵심 아이디어**: 3개의 포인터(prev, current, next)를 사용하여 연결 방향 변경
-   **시간복잡도**:
    -   반복적 풀이: O(n)
    -   재귀적 풀이: O(n)
-   **공간복잡도**:
    -   반복적 풀이: O(1)
    -   재귀적 풀이: O(n) - 재귀 호출 스택

### 2. Add Two Numbers

-   **파일**: [add-two-numbers.ts](./add-two-numbers.ts)
-   **링크**: https://leetcode.com/problems/add-two-numbers/description/
-   **난이도**: Medium
-   **요약**: 역순으로 저장된 두 연결 리스트로 표현된 숫자를 더하는 문제
-   **핵심 아이디어**: 자릿수 올림(carry)을 처리하면서 두 리스트를 동시 순회
-   **시간복잡도**: O(m + n) - 두 리스트의 모든 노드 처리
-   **공간복잡도**: O(max(m, n)) - 결과 리스트 저장

## 학습 포인트

### Reverse Linked List

-   **포인터 관리**: 3개의 포인터를 사용하여 연결 방향을 안전하게 변경
-   **반복 vs 재귀**: 반복적 방법이 공간 효율성에서 우수
-   **연결 리스트 기본기**: 노드 연결 조작의 기초

### Add Two Numbers

-   **자릿수 올림 처리**: 10이 넘는 합에서 carry를 다음 자리로 전달
-   **더미 노드 활용**: 결과 리스트 구성을 위한 효율적 기법
-   **비동기 순회**: 서로 다른 길이의 리스트 처리 방법
-   **시간 복잡도 정확한 분석**: O(max(m,n))이 아닌 O(m+n)으로 정확한 분석

### 주요 패턴

1. **더미 노드**: 결과 리스트 구성을 위한 임시 헤드
2. **두 포인터 기법**: 서로 다른 속도로 이동하는 포인터
3. **재귀 vs 반복**: 공간 복잡도 고려한 선택
