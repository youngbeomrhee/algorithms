# 24. Swap Nodes in Pairs
node를 pair 단위로 생각해서 left, right를 swap하는 문제
prev를 이전 pair의 직전 node로 설정하고 dummyHead를 사용해 복잡도를 낮추는 기법이 필요

최종 TC: O(n)
최종 SC: O(1)

# 328. Odd Even Linked List
홀수번째의 node와 짝수번째의 node 2개의 그룹으로 분할하고 홀수번 node 그룹의 끝에 짝수번 node 그룹을 연결해야 하는 문제
next -> next.next로 변경하고 최종결과에 짝수번째 그룹을 연결하기 위해 짝수번째 시작 node를 저장

최종 TC: O(n)
최종 SC: O(1)