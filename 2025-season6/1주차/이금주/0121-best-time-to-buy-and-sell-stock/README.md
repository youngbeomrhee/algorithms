# 📘 🔹 \[121] Best Time to Buy and Sell Stock

* **문제 링크:** [LeetCode 121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

> 하루에 하나의 주식을 사고, 미래의 어느 날에 팔아서 얻을 수 있는 **최대 이익**을 구하는 문제입니다.
> 단, “산 날 < 판 날” 조건을 반드시 지켜야 합니다.
> 만약 이익이 불가능하면 `0`을 반환합니다.

---

## 🥇 최초 접근 (Solution.java)
<img width="761" height="460" alt="image" src="https://github.com/user-attachments/assets/7399f8dd-bbc5-4d98-afc5-33d35eaecd81" />


### **힌트 기반 아이디어**

* 지금까지 본 **최소 가격**을 저장해 두고,
* 현재 가격에서 그 최소 가격을 뺀 값을 **최대 이익 후보**로 갱신합니다.

---

### **풀이 요약**

1. `minSoFar` = 매우 큰 값으로 시작
2. 배열을 순회하면서

   * 현재 값이 `minSoFar`보다 작으면 최소값 갱신
   * 아니라면, `(현재 값 - minSoFar)`로 얻을 수 있는 이익을 계산 → `maxProfit`에 반영
3. 끝까지 순회한 뒤 `maxProfit` 반환

---

### **Java 코드**

```java
class Solution {
    public int maxProfit(int[] prices) {   
        int minSoFar = Integer.MAX_VALUE; // 지금까지 본 최저가
        int maxProfit = 0; // 최대 이익

        for (int p : prices) {
            if (p < minSoFar) {
                minSoFar = p; // 최저가 갱신
            } else {
                maxProfit = Math.max(maxProfit, p - minSoFar); // 현재 팔면 얻는 수익
            }
        }
        return maxProfit;
    }
}

/*
📊 복잡도 분석

시간복잡도:
- 변수 초기화: O(1)
- prices 배열 순회: 길이 N만큼 반복 → O(N)
  (루프 안 비교·대입·Math.max는 전부 O(1))
- 반환: O(1)
=> 전체 = O(N)

공간복잡도:
- 입력 배열은 제외
- 추가 변수: minSoFar, maxProfit, 루프 변수 → O(1)
=> 전체 = O(1)
*/
```

---

### **예제 입출력**

```text
Input: prices = [7,1,5,3,6,4]
Output: 5
설명: 2일차(가격=1)에 매수 → 5일차(가격=6)에 매도 → 이익=5

Input: prices = [7,6,4,3,1]
Output: 0
설명: 항상 가격이 떨어지므로 거래하지 않고 이익=0
```

---

### **Edge Cases**

* 모든 가격이 내림차순 → `0` 반환
* 모든 가격이 오름차순 → 첫 날 사서 마지막 날 파는 것이 최대 이익
* 배열 길이가 1일 경우 → 거래 불가능, 이익=0

---

## ⚡ 최적화 접근 1 — Sliding Window (Two Pointers)
<img width="786" height="476" alt="image" src="https://github.com/user-attachments/assets/46f9a491-0b56-4b45-9ab3-5ab1cbc191fb" />

### **아이디어**

* `left`는 **매수일(최저가 후보)**, `right`는 **매도일**로 두고 오른쪽으로만 전진합니다.
* `prices[right] < prices[left]` → 더 싼 날을 발견했으므로, 매수일을 그날로 갱신합니다.
* 그렇지 않다면 `(prices[right] - prices[left])`로 얻을 수 있는 이익을 계산하여 `maxProfit`을 갱신합니다.

👉 이렇게 하면 시간 순서를 어기지 않고도, **한 번만 순회(O(N))** 하면서 최대 이익을 구할 수 있습니다.

---

### **풀이 요약**

1. `left = 0` (처음 날을 매수일로 가정)
2. 배열을 오른쪽(`right`)으로 탐색

   * 현재 가격이 더 싸면 `left = right`로 변경
   * 현재 가격이 더 크면 `(prices[right] - prices[left])` 이익 후보를 계산
3. 전체 순회를 마치고 `maxProfit` 반환

---

### **Java 코드**

```java
class SolutionTwoPointer {
    public int maxProfit(int[] prices) {
        int left = 0;        // 살 날(최저가 후보)
        int maxProfit = 0;   // 최대 이익

        for (int right = 1; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                // 더 싼 날을 발견 → 새로운 매수일로 갱신
                left = right;
            } else {
                // 현재 팔면 얻을 수 있는 이익 계산
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            }
        }
        return maxProfit;
    }
}
```

---

### **복잡도 분석**

* **시간복잡도:**

  * 배열 한 번 순회 = `O(N)`
  * 내부 연산은 모두 `O(1)`
  * **총합 = O(N) + O(1) = O(N)**

* **공간복잡도:**

  * `left`, `maxProfit`, `right` 변수만 사용 = `O(1)`
  * **총합 = O(1)**

---

### **어떻게 이런 생각을 할 수 있을까?**

* 핵심 제약은 \*\*“산 날 < 판 날”\*\*입니다.
* 단순히 최소값만 기록하는 방식(minSoFar)과 달리,
  → 슬라이딩 윈도우처럼 “두 포인터를 움직이며”
  → `left`는 항상 **현재까지 가장 싼 날**, `right`는 **오늘**로 유지하면 조건을 자연스럽게 강제할 수 있습니다.

---

### **타당한 근거 (정당성)**

* 반복문 불변식: 항상 `left ≤ right`.
* `left`는 `right` 이전 구간에서 본 최소값 인덱스.
* 더 작은 값이 등장하면, 이후 최적 매수일은 반드시 그 값 이후에 존재하므로 `left`를 옮겨도 손해가 없음 (**교환 논법**).


## 성능 메모
- 이 문제의 두 풀이(최초 접근, 두 포인터)는 알고리즘적으로 **동일한 O(N) 시간, O(1) 공간**.
- LeetCode의 Runtime/Memory는 **단일 실행 샘플**이라 서버 상태(JIT/GC 등)에 따라 수 ms·수 MB 단위로 흔들릴 수 있음.
- 메모리 지표는 코드 변수뿐 아니라 **JVM 힙/스택/클래스 로딩 오버헤드**까지 포함하므로 0.x MB 차이는 **유의하지 않음**.
- 미세 비교가 필요하면 로컬에서 반복 실행 평균 또는 JMH로 측정할 것.

---

## 📌 구체적으로 무엇이 “최적화”인가?

### 1. **사고 모델 최적화**

* **최초 풀이(minSoFar 방식)**
  “지금까지의 최소값을 기록 → 오늘 팔면 얻는 이익 계산”
* **두 포인터 방식**
  “left = 매수일, right = 매도일 → 오른쪽으로만 전진하면서 최소값 자동 갱신”

> 사실상 같은 연산이지만, **시간 순서 제약(산 뒤에 팔기)**을 **포인터 불변식(left ≤ right)**으로 자연스럽게 강제하는 장점이 있어요.
즉, **알고리즘적 직관을 강화**하는 최적화.

### 2. **코드 가독성과 확장성**

* 두 포인터 접근은 sliding window 패턴과 유사해서,
  → 이후 “여러 번 거래” 문제(`Best Time to Buy and Sell Stock II`, `III`) 같은 **확장 문제에 사고 전환이 더 쉽습니다.**
* 즉, **재사용성과 학습 곡선을 최적화**한 버전.


### 3. **복잡도 유지 (성능 손실 없음)**

* 두 버전 모두 **시간 O(N), 공간 O(1)** → 이론 성능은 동일.
* 다만 실제 측정에서 ms, MB 단위 차이가 나는 건 **JVM/JIT/GC 노이즈**이지, 알고리즘 차이가 아닙니다.

> **성능 자체를 높였다기보다는, 표현과 사고의 최적화**라고 이해하면 맞습니다.

### 📊 정리하자면

* **최초 풀이(minSoFar)**: 가장 단순하고 직관적인 코드 → 이해 빠름.
* **두 포인터 풀이**: 같은 복잡도지만, \*문제 제약(산 날 < 판 날)\*을 구조적으로 보장 → 사고·가독성 최적화.
* **실행 성능**: 두 버전 모두 동일 등급. 성능 “최적화”가 아니라 **사고·표현·패턴 최적화**임.

> “성능 최적화라기보다는 사고 모델과 코드 가독성 측면의 최적화”

--- 


