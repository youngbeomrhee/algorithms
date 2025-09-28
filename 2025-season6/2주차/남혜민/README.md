# 2주차 알고리즘 문제 풀이

## 문제 목록

### 1. Palindrome Linked List
- **파일**: [palindrome-linked-list.ts](./palindrome-linked-list.ts)
- **링크**: https://leetcode.com/problems/palindrome-linked-list/description/
- **난이도**: Easy
- **요약**: 단일 연결 리스트가 회문(palindrome)인지 판단하는 문제
- **핵심 아이디어**: 
  - 풀이1: 배열 변환 후 투 포인터
  - 풀이2: 토끼와 거북이 알고리즘으로 중간점 찾기 + 절반 뒤집기
- **시간복잡도**: O(n)
- **공간복잡도**: 
  - 풀이1: O(n) - 배열에 모든 값 저장
  - 풀이2: O(1) - 포인터만 사용

### 2. Merge Two Sorted Lists
- **파일**: [merge-two-sorted-lists.ts](./merge-two-sorted-lists.ts)
- **링크**: https://leetcode.com/problems/merge-two-sorted-lists/description/
- **난이도**: Easy
- **요약**: 정렬된 두 연결 리스트를 하나의 정렬된 연결 리스트로 병합하는 문제
- **핵심 아이디어**: 더미 노드를 사용하여 두 포인터로 순회하며 작은 값부터 연결
- **시간복잡도**: O(n + m) - n, m은 각 리스트의 길이
- **공간복잡도**: O(1) - 더미 노드 1개만 생성하고 나머지는 기존 노드들의 연결만 변경

## 학습 포인트

### Palindrome Linked List
- **배열 변환**: 연결 리스트 값을 배열로 변환하여 인덱스 접근 활용
- **토끼와 거북이 알고리즘**: 빠른 포인터와 느린 포인터로 중간점 찾기
- **연결 리스트 뒤집기**: 포인터 조작으로 연결 방향 역순 변경
- **공간 최적화**: O(n) → O(1)로 공간복잡도 개선

### Merge Two Sorted Lists
- **더미 노드**: 결과 리스트의 시작점을 간단하게 처리하는 기법
- **포인터 조작**: 기존 노드를 재사용하여 공간 효율성 확보
