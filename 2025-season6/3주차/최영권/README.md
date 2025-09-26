# 이번 시간 과제

- https://leetcode.com/problems/reverse-linked-list/description/
- https://leetcode.com/problems/add-two-numbers/description/

# 561. reverse-linked-list

단순히 연결 리스트를 뒤집는 문제

## 기본적인 해법
주어진 리스트가 [1,2,3,4] 일때, 이전 노드를 저장할 prev, 현재 노드를 저장할 curr 변수 초기화

연결 리스트를 순회 하면서 다음 노드를 next 변수에 담고, prev(이전 노드)가 현재 노드의 다음이 되게함.
그리고 현재 노드가 다시 이전노드를 가르키는 변수 prev가 되고, next를 현재 노드로 변경하면서 하나씩 순회 및 역정렬 수행

최종 시간복잡도 : O(n) , n은 주어진 연결리스트의 길이

# 121. AddTwoNumbers

- 주어진 두개의 연결리스트를 순회하면서 자리수에 맞는 정수를 더하고, 10이 넘어가는 경우 올림처리 하면서 덧셈

최종 시간복잡도 O(max(n,m)) / 주어진 두개의 연결 리스트 중 길이가 더 긴 연결리스트에 비례