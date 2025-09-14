# 2주차 알고리즘 문제 풀이

## 문제 목록

### 1. Palindrome Linked List
- **파일**: [palindrome-linked-list.ts](./palindrome-linked-list.ts)
- **링크**: https://leetcode.com/problems/palindrome-linked-list/description/
- **난이도**: Easy
- **요약**: 단일 연결 리스트가 회문(palindrome)인지 판단하는 문제
- **핵심 아이디어**: 연결 리스트를 배열로 변환 후 투 포인터로 회문 검사
- **시간복잡도**: O(n)
- **공간복잡도**: O(n) - 배열에 모든 값 저장

### 2. Merge Two Sorted Lists
- **파일**: [merge-two-sorted-lists.ts](./merge-two-sorted-lists.ts)
- **링크**: https://leetcode.com/problems/merge-two-sorted-lists/description/
- **난이도**: Easy
- **요약**: 정렬된 두 연결 리스트를 하나의 정렬된 연결 리스트로 병합하는 문제
- **핵심 아이디어**: 더미 노드를 사용하여 두 포인터로 순회하며 작은 값부터 연결
- **시간복잡도**: O(n + m) - n, m은 각 리스트의 길이
- **공간복잡도**: O(1) - 기존 노드 재사용

## 학습 포인트

### Palindrome Linked List
- **배열 변환**: 연결 리스트의 값들을 배열로 변환하여 인덱스 접근 활용
- **투 포인터**: 양 끝에서 중앙으로 이동하며 회문 검사

### Merge Two Sorted Lists
- **더미 노드**: 결과 리스트의 시작점을 간단하게 처리하는 기법
- **포인터 조작**: 기존 노드를 재사용하여 공간 효율성 확보
