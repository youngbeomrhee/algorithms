# 92. Reverse Linked List II

Linked List의 일부 구간을 뒤집는 문제
구간을 나눠서 순차적으로 해결하면 한 번 순회로 처리할 수 있다

1. leftPrev를 left-1 위치로 이동
2. 구간 [left, right] 뒤집기
3. 재연결: leftPrev -> (뒤집힌 머리) -> ... -> (뒤집힌 꼬리) -> curr(right+1 위치)

최종 TC: O(left) + O(right - left) = O(n) (n은 노드의 갯수)

# 20. Valid Parentheses

괄호의 짝이 맞는지 판단하는 문제. stack을 활용하는 정석적인 문제

최종 TC: O(n) (n은 문자열의 길이)
early return으로 조기 종료, map을 활용하여 확장성 있게 구현, 조건에 맞지 않는 경우 바로 종료
