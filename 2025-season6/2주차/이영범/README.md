# 234. Palindrome Linked List

- 가장 먼저 생각해 볼 수 있는 풀이  
  Linked list가 익숙하지 않다면 전체를 한 번 순회하면서 val만 배열에 담고 배열이 palindrome인지 판단하는 방법이 있음.  
  최종 TC: O(n) + 팰린드롬 판단 로직의 TC  
  최종 SC: O(n) + 팰린드롬 판단 로직의 SC

- 일반적인 원본을 변경하는 풀이  
  slow, fast runner 기법을 활용해 중간을 판단 O(n/2)  
  중간이 판단된 시점에 전반부를 뒤집음 O(n/2)  
  뒤집은 전반부와 후반부를 비교해서 palindrome 여부를 판단 O(n/2)  
  최종 TC: O(n/2) + O(n/2) + O(n/2) -> O(2n/3)  
  최종 SC: O(1)

- 최적화 버젼 1: **한 번 순회만으로 판단.**
  slow, fast runner 기법을 활용해 중간을 판단 O(n/2)  
  원본을 변경하지 않고 prev linkedList 생성  
  최종 TC: O(n/2) + O(n/2) -> O(n)  
  최종 SC: O(n/2) -> O(n)  
  -> 시간복잡도는 낮췄지만 O(n)만큼의 메모리가 사용되고 메모리 할당에 따른 오버헤드로 오히려 성능이 떨어짐
- 최적화 버젼2: **한 번 순회만으로 판단**  
  slow, fast runner 기법을 활용해 중간을 판단 O(n/2)  
  fast를 먼저 보내고 slow는 reverse에 할당해 바로바로 뒤집음  
  최종 TC: O(n/2) + O(n/2) -> O(n)  
  최종 SC: O(1)

# 21. Merge Two Sorted Lists

초기 node를 dummy로 설정하여 로직을 단순화. 그 이후부터는 그냥 대소 비교해서 하나씩 연결해 주기만 하면 됨
최종 TC: O(n + m) (n은 list1의 length, m은 list2의 length)
