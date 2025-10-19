# Remove Duplicate Letters
> [LeetCode 316. Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)

## 문제 설명

문자열 `s`가 주어졌을 때, 모든 문자가 한 번씩만 나타나도록 중복된 문자를 제거하세요. 
결과는 **사전순으로 가장 작은** 가능한 모든 결과 중에서 선택해야 합니다.

### 예제

**예제 1:**
```
입력: s = "bcabc"
출력: "abc"
```

**예제 2:**
```
입력: s = "cbacdcbc"
출력: "acdb"
```

### 제약 조건
- `1 <= s.length <= 10^4`
- `s`는 소문자 영어 문자로 구성됩니다.

---

## 접근 방법

### 핵심 아이디어 💡

**"나중에 다시 나올 문자라면, 지금 제거해도 괜찮다"**

이 문제는 **Deque + Greedy** 알고리즘을 활용합니다.

```java
if (현재_문자가_마지막_문자보다_작고 && 마지막_문자가_뒤에_또_나온다면) {
    마지막_문자_제거(); // 더 작은 사전순을 만들기 위해
}
```

### 왜 Deque(Stack)인가?

| 자료구조 | 가능 여부 | 이유 |
|----------|-----------|------|
| **Stack/Deque** | ✅ 가능 | 마지막 요소 제거 가능 |
| **Queue** | ❌ 불가능 | 첫 요소만 제거 가능 |

이 문제는 **"마지막에 추가한 것을 다시 확인하고 제거"**하는 패턴이 필요합니다.

---

## 알고리즘 동작 과정

### 예시: `s = "bcabc"`

```
목표: "abc" (사전순으로 가장 작게)

처리 과정:
'b' → deque: ['b']
'c' → deque: ['b', 'c']
'a' → 'a'가 'c'보다 작음!
     'c'가 뒤에 또 나오나? Yes (index 4에 'c')
     → 'c' 제거!
     'a'가 'b'보다 작음!
     'b'가 뒤에 또 나오나? Yes (index 3에 'b')
     → 'b' 제거!
     → deque: ['a']
'b' → deque: ['a', 'b']
'c' → deque: ['a', 'b', 'c']

결과: "abc" ✅
```

---

## 필요한 자료구조

1. **`Deque<Character>`** - 결과를 만들 덱 (Stack처럼 사용)
2. **`boolean[] visited`** - 이미 덱에 있는지 확인 (중복 방지)
3. **`int[] count`** - 각 문자가 뒤에 몇 번 더 나오는지

---

## 구현 코드

```java
class Solution {
    public String removeDuplicateLetters(String s) {
        // 1. 각 문자의 남은 개수를 세기 위한 배열
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        
        // 2. 이미 deque에 포함된 문자인지 체크
        boolean[] visited = new boolean[26];
        
        // 3. 결과를 만들 Deque (Stack처럼 사용)
        Deque<Character> deque = new ArrayDeque<>();
        
        // 4. 문자열 순회
        for (char c : s.toCharArray()) {
            count[c - 'a']--;  // 현재 문자 사용했으므로 개수 감소
            
            // 이미 deque에 있으면 스킵
            if (visited[c - 'a']) {
                continue;
            }
            
            // 🔑 핵심: deque 마지막이 현재 문자보다 크고, 뒤에 또 나온다면 제거
            while (!deque.isEmpty() && 
                   deque.peekLast() > c && 
                   count[deque.peekLast() - 'a'] > 0) {
                char removed = deque.removeLast();
                visited[removed - 'a'] = false;  // visited 해제
            }
            
            // 현재 문자를 deque 마지막에 추가
            deque.addLast(c);
            visited[c - 'a'] = true;
        }
        
        // 5. Deque를 문자열로 변환
        StringBuilder result = new StringBuilder();
        for (char c : deque) {
            result.append(c);
        }
        return result.toString();
    }
}
```

---

## 복잡도 분석

### 시간 복잡도: **O(n)**
- 첫 번째 for 루프 (count 계산): O(n)
- 두 번째 for 루프 (문자 처리): O(n)
  - while 루프: 각 문자는 최대 1번만 제거됨 → 전체 O(n)
- 세 번째 for 루프 (결과 생성): O(26) = O(1)
- **전체**: O(n) + O(n) + O(1) = **O(n)**

### 공간 복잡도: **O(1)**
- count 배열: O(26) = O(1)
- visited 배열: O(26) = O(1)
- deque: 최대 26개 문자 저장 → O(26) = O(1)
- result StringBuilder: 최대 26개 문자 → O(26) = O(1)
- **전체**: **O(1)** (입력/출력 문자열 제외)

---

## 핵심 개념 설명

### 1. `count` 배열의 역할

```java
count[c - 'a']--  // 현재 문자 사용
count[c - 'a'] > 0  // 뒤에 또 나오는지 확인
```

문자가 나중에 다시 등장하는지 확인하여, 지금 제거해도 안전한지 판단합니다.

### 2. `visited` 배열의 역할

```java
visited[c - 'a']  // 이미 deque에 있는지
→ true면 스킵 (중복 방지)
```

각 문자는 결과에 **한 번만** 포함되어야 하므로, 이미 추가된 문자는 건너뜁니다.

### 3. `visited[removed - 'a'] = false` 하는 이유

```java
char removed = deque.removeLast();
visited[removed - 'a'] = false;  // ⭐ 중요!
```

덱에서 문자를 제거했으므로, 나중에 그 문자를 다시 만났을 때 **다시 추가할 수 있도록** visited를 false로 변경합니다.

**예시:**
```
"bcabc"에서
- 'b'를 추가 → visited['b'] = true
- 'a'를 만나서 'b'를 제거 → visited['b'] = false (⭐)
- index 3의 'b'를 다시 만남 → visited['b']가 false이므로 추가 가능!
```

### 4. 배열 크기가 26인 이유

```java
boolean[] visited = new boolean[26];  // 소문자 알파벳 개수
int[] count = new int[26];
```

문제 조건에서 `s`는 **소문자 영어 문자**로만 구성되므로:
- 'a' ~ 'z' = 26개
- `c - 'a'`를 인덱스로 사용 (0~25)

---

## Deque 메서드 정리

| Stack 메서드 | Deque 메서드 | 설명 |
|--------------|--------------|------|
| `push(e)` | `addLast(e)` | 마지막에 추가 |
| `pop()` | `removeLast()` | 마지막에서 제거 |
| `peek()` | `peekLast()` | 마지막 확인 |
| `isEmpty()` | `isEmpty()` | 비어있는지 확인 |

---

## 핵심 패턴

이 문제는 다음과 같은 Stack 패턴에 속합니다:

1. **괄호 검사** - 마지막 여는 괄호와 매칭
2. **히스토그램 최대 넓이** - 이전 높이들 확인
3. **다음 큰 원소** - 이전 원소들과 비교
4. **함수 호출 스택** - 가장 최근 호출부터 처리

---

## 마무리

### ✅ Stack이 필요한 경우
- 가장 최근 것을 다시 확인해야 할 때
- 역순으로 처리해야 할 때
- "뒤로 돌아가기"가 필요할 때

### ✅ Queue가 필요한 경우
- 순서대로 처리해야 할 때
- 먼저 온 것부터 처리할 때
- BFS (너비 우선 탐색)

---

# 739. 일일 기온 (Daily Temperatures)

## 📋 문제 설명

`temperatures` 일일 기온을 나타내는 정수 배열이 주어졌을 때, 해당 날짜 이후에 더 따뜻한 기온을 얻기 위해 기다려야 하는 일수를 나타내는 배열을 반환합니다. 만약 미래의 기온이 더 따뜻해질 수 있는 날짜가 없다면, `answer[i] == 0`을 유지합니다.

### 예제

**예제 1:**
```
입력: temperatures = [73,74,75,71,69,72,76,73]
출력: [1,1,4,2,1,1,0,0]
```

**예제 2:**
```
입력: temperatures = [30,40,50,60]
출력: [1,1,1,0]
```

**예제 3:**
```
입력: temperatures = [30,60,90]
출력: [1,1,0]
```

### 제약 조건
- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

---

## 💡 접근 방법: 단조 감소 스택 (Monotonic Decreasing Stack)

### 핵심 아이디어
- **"다음으로 더 큰 원소 찾기"** 패턴 활용
- 스택에 **인덱스**를 저장하며, 스택은 항상 **감소하는 기온의 인덱스**만 유지
- 현재 기온이 스택 top보다 높으면 → 답을 찾은 것! (pop하며 정답 기록)

### 알고리즘 동작
1. 스택에는 "아직 답을 찾지 못한 날짜의 인덱스" 저장
2. 현재 기온 > 스택 top의 기온 → pop하며 `answer[prevIdx] = i - prevIdx` 계산
3. 현재 인덱스를 스택에 push
4. 스택에 남은 인덱스들은 자동으로 0 유지 (더 따뜻한 날 없음)

---

## 💻 Java 코드

```java
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length; // TC: O(1), SC: O(1)
        int[] answer = new int[n]; // TC: O(1), SC: O(n)
        Stack<Integer> stack = new Stack<>(); // TC: O(1), SC: O(n)
        
        for (int i = 0; i < n; i++) { // TC: O(n)
            // 현재 기온이 스택 top의 기온보다 높으면 pop하며 답을 계산
            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) { // TC: O(1) 체크
                int prevIdx = stack.pop(); // TC: O(1) - pop한 인덱스를 prevIdx에 저장
                answer[prevIdx] = i - prevIdx; // TC: O(1) - pop한 prevIdx 사용
            }
            stack.push(i); // TC: O(1) - 현재 인덱스 추가
        }
        
        return answer; // TC: O(1)
    }
}
```

---

## 📊 동작 과정 상세 분석

**입력: [73, 74, 75, 71, 69, 72, 76, 73]**

| i | 온도 | while 루프 동작 | stack 변화 | answer 변화 |
|---|------|----------------|------------|-------------|
| 0 | 73 | 스택 비어있음 | [0] | [0,0,0,0,0,0,0,0] |
| 1 | 74 | 74 > 73 ✅<br>→ pop(0), answer[0]=1-0=1 | [1] | [**1**,0,0,0,0,0,0,0] |
| 2 | 75 | 75 > 74 ✅<br>→ pop(1), answer[1]=2-1=1 | [2] | [1,**1**,0,0,0,0,0,0] |
| 3 | 71 | 71 > 75 ❌ | [2,3] | [1,1,0,0,0,0,0,0] |
| 4 | 69 | 69 > 71 ❌ | [2,3,4] | [1,1,0,0,0,0,0,0] |
| 5 | 72 | 72 > 69 ✅ → pop(4), answer[4]=1<br>72 > 71 ✅ → pop(3), answer[3]=2<br>72 > 75 ❌ | [2,5] | [1,1,0,**2**,**1**,0,0,0] |
| 6 | 76 | 76 > 72 ✅ → pop(5), answer[5]=1<br>76 > 75 ✅ → pop(2), answer[2]=4 | [6] | [1,1,**4**,2,1,**1**,0,0] |
| 7 | 73 | 73 > 76 ❌ | [6,7] | [1,1,4,2,1,1,0,0] |

**최종 결과: [1, 1, 4, 2, 1, 1, 0, 0]** ✅

---

## 🔍 단계별 상세 설명

### **i = 0 (73도)**
```
stack = [] (비어있음)
→ push(0)
stack = [0]
answer = [0,0,0,0,0,0,0,0]
```

### **i = 1 (74도)**
```
while: 74 > temperatures[0] (73) ✅
  → prevIdx = pop() = 0
  → answer[0] = 1 - 0 = 1
→ push(1)
stack = [1]
answer = [1,0,0,0,0,0,0,0]
```

### **i = 5 (72도)** - 여러 개 한번에 처리
```
while: 72 > temperatures[4] (69) ✅
  → prevIdx = pop() = 4
  → answer[4] = 5 - 4 = 1

while: 72 > temperatures[3] (71) ✅
  → prevIdx = pop() = 3
  → answer[3] = 5 - 3 = 2

while: 72 > temperatures[2] (75) ❌ (종료)
→ push(5)
stack = [2, 5]
answer = [1,1,0,2,1,0,0,0]
```

### **최종 (i = 7 이후)**
```
stack = [6, 7] (남아있음)
→ 더 따뜻한 날이 없으므로 answer[6], answer[7]은 0 유지
answer = [1,1,4,2,1,1,0,0]
```

---

## ⏱️ 복잡도 분석

### 시간복잡도: **O(n)**
- 변수 초기화: `O(1)`
- for 루프: `n`번 반복
  - `isEmpty()`, `peek()`: `O(1)`
  - **while 루프**: 각 원소는 최대 1번만 push되고 1번만 pop됨 → 전체 `O(n)`
  - `pop()`, 인덱스 계산, `push()`: 각 `O(1)`
- **전체: O(n)**

### 공간복잡도: **O(n)**
- `answer` 배열: `O(n)`
- `stack`: 최악의 경우 모든 인덱스 저장 (감소하는 배열) → `O(n)`
- 변수들: `O(1)`
- **전체: O(n)**
