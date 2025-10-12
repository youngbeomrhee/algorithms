# 📘 Linked List Problems – LeetCode Solutions

## Problems

---

### 🔹 \[206] Reverse Linked List

* **파일명:** `LC206-ReverseLinkedList-Solution.java`
* **문제 링크:** [LeetCode 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

**풀이 아이디어:**

* 세 개의 포인터(`prev`, `curr`, `next`)를 이용해 연결 방향을 하나씩 뒤집는다.
* `while (curr != null)` 반복하면서 `curr.next = prev` 로 방향을 바꾸고, 포인터를 한 칸씩 전진한다.

---

#### 복잡도 분석

```java
public ListNode reverseList(ListNode head) {
    ListNode prev = null;   // TC: O(1), SC: O(1)
    ListNode curr = head;   // TC: O(1), SC: O(1)
    ListNode next = null;   // TC: O(1), SC: O(1)

    while(curr != null) {   // 최대 n번 반복 → O(n)
        next = curr.next;   // O(1)
        curr.next = prev;   // O(1)
        prev = curr;        // O(1)
        curr = next;        // O(1)
    }
    return prev;            // O(1)
}
```

**합산하기 (TC):**

* 초기 변수 설정: O(3)
* while 루프: O(n) × (O(1)+O(1)+O(1)+O(1)) = O(4n)
* return: O(1)
* 총합 = O(4n + 4) → **O(n)**

**합산하기 (SC):**

* 추가 변수 prev, curr, next → O(3)
* 루프 반복 중 새 메모리 없음 → O(0)
* return: O(1)
* 총합 = O(4) → **O(1)**

---

---

### 🔹 \[2] Add Two Numbers

* **파일명:** `LC2-AddTwoNumbers-Solution.java`
* **문제 링크:** [LeetCode 2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

**풀이 아이디어:**

1. `dummy` 와 `tail` 포인터를 사용해 결과 리스트를 만든다.
2. `carry` 변수를 두어 자리올림을 관리한다.
3. 두 리스트를 동시에 순회하며 `sum = x + y + carry` 로 각 자리를 계산한다.
4. 새로운 노드를 생성해 결과 리스트에 붙인다.
5. 둘 중 한 리스트가 끝나면 나머지는 0으로 간주한다.
6. 마지막에 carry가 남으면 새 노드를 하나 더 만든다.

---

#### 왜 carry가 필요한가?

* 예: `7 + 8 = 15` → 현재 자리엔 `5`, 다음 자리에는 올림값 `1`을 더해야 한다.
* carry는 바로 이 **자리올림 값**을 저장하기 위한 변수다.

#### 왜 sum에 carry를 더하나?

* carry는 이전 자리에서 생긴 올림값이므로, 현재 자리 계산에 반드시 포함해야 한다.
* 예: `9 + 9 = 18` → digit=8, carry=1 → 다음 자리에서 `다음 노드 값 + 1`을 계산해야 정확하다.

#### 왜 시간 복잡도가 O(max(n, m))인가?

* 두 리스트를 동시에 순회하므로, 긴 쪽 리스트 길이에 맞춰 최대 **max(n, m)** 번 반복한다.
* carry 때문에 마지막에 한 번 더 돌 수 있지만, 이는 상수항이라 무시된다.

---

#### 코드

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
         ListNode dummy = new ListNode(0); // O(1), O(1)
         ListNode tail = dummy;            // O(1), O(1)
         int carry = 0;                    // O(1), O(1)

         while(l1 != null || l2 != null || carry != 0) { // 최대 max(n,m)+1번
            int x = (l1 != null) ? l1.val : 0;  // O(1)
            int y = (l2 != null) ? l2.val : 0;  // O(1)

            int sum = x + y + carry;            // O(1)
            carry = sum / 10;                   // O(1)
            int digit = sum % 10;               // O(1)

            tail.next = new ListNode(digit);    // O(1)
            tail = tail.next;                   // O(1)

            if(l1 != null) l1 = l1.next;        // O(1)
            if(l2 != null) l2 = l2.next;        // O(1)
         }
         return dummy.next;                     // O(1)
    }
}
```

---

#### 합산하기

**시간 복잡도 (TC):**

* 초기 변수 설정: O(3)
* while 루프: O(max(n, m)) × (O(1) × 약 8) = O(8 × max(n, m))
* return: O(1)
* 총합 = O(8 × max(n, m) + 4) → **O(max(n, m))**

**공간 복잡도 (SC):**

* 추가 변수(dummy, tail, carry, x, y, sum, digit) = O(7)
* while 반복 중 새 변수 없음
* 출력 리스트는 결과라서 추가 공간에서 제외
* 총합 = O(7+1) = O(8) → **O(1)**
