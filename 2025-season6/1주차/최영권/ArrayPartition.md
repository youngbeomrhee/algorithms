
[문제링크](https://leetcode.com/problems/array-partition/description/)

문제 : `정수형 배열 이 2배수의 길이로 주어졌을때, 2개씩 짝지어서 작은 수들의 합이 가장 큰 값이 되는 것을 구하라`

**Constraints:**

- `1 <= n <= 10^4`
- `nums.length == 2 * n`
- `-10^4 <= nums[i] <= 10^4`

최종 시간복잡도 : O(n)

### **첫번째 풀이**

1. 배열 정렬
2. 2개씩 잘라서 작은 수 들의 합 구하기

⇒ 정렬을 해야되기 때문에 O(nlogn)

```java
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public int arrayPairSum(int[] nums) {
        // 2개씩 그룹화해서 min 값의 합이 최대로 되기 해라
        List<Integer> integers = Arrays.stream(Arrays.stream(nums).toArray()).boxed().collect(Collectors.toList());
        Collections.sort(integers);
        int sum = 0;
        for (int i = 0; i < integers.size(); i += 2) {
            int num = integers.get(i);
            int num2 = integers.get(i + 1);
            sum += Math.min(num, num2);
        }
        return sum;
    }
}
```

### 두번쨰 풀이

시간복잡도 : O(nlogn)

공간복잡도 : 1

```java
class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);  // 원본 배열 직접 정렬
        int sum = 0;
        for (int i = 0; i < nums.length; i += 2) {
            sum += nums[i];  // 정렬된 상태에서 작은 값은 항상 앞에 위치
        }
        return sum;
    }
}
```

- 별도로 배열을 컬렉션으로 변환하지 않고 원본 배열 정렬 후 작은 값들의 합 처리
    - 정렬을 해야돼서 빅오표기법의 시간복잡도 자체는 똑같은데 컬렉션으로 변환하는 로직이 없기 떄문에 상수항이 없어짐.
    - 공간복잡도도 별도의 공간이 필요없어서 1 로 문제 해결 가능

### 세번째 풀이

LeetCode 문제 제약: -10000 <= nums[i] <= 10000

시간복잡도 : O(n)

- ai를 이용한 최적화
- **Counting Sort** 알고리즘을 응용한 방법

문제 풀이

- 각 값의 출현 횟수를 배열에 저장 (-10000을 0으로 매핑)
- 작은 값부터 차례로 2개씩 그룹화하면서 첫번째 값만 합계에 추가

```java
class Solution {
       public int arrayPairSum(int[] nums) {
        int offset = 10000;  // 음수를 0 이상으로 변환하기 위한 오프셋
        int[] count = new int[20001];  // -10000~10000 범위를 0~20000으로 매핑
        
        // 1단계: 각 값의 개수를 센다
        for (int num : nums) {
            count[num + offset]++;
        }
        
        // 2단계: 작은 값부터 2개씩 그룹핑하면서 합 계산
        int sum = 0;
        boolean isFirst = true;  // 현재 원소가 페어의 첫 번째인지 체크
        
        for (int i = 0; i < count.length; i++) {
            int currentValue = i - offset;  // 인덱스를 원래 값으로 역변환
            
            // 현재 값이 count[i]개 만큼 있음
            for (int j = 0; j < count[i]; j++) {
                if (isFirst) {
                    sum += currentValue;  // 페어의 첫 번째(더 작은) 값만 합에 추가
                }
                isFirst = !isFirst;  // 다음은 페어의 두 번째/첫 번째 토글
            }
        }
        
        return sum;
    }
}
```