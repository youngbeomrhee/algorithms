mport java.util.Arrays;

class Solution {
    public int arrayPairSum(int[] nums) { //함수의 매개변수
        // 시간 복잡도 : O(n log n), 공간 복잡고: O(log n) ~ O(n)
        Arrays.sort(nums);
        
        // 변수 초기화 : 시간복잡도: O(1), 공간복잡도: O(1)
        int sum =0;

        // 배열 순회(짝수 인덱스만 방문 -> n/2번 반복), 시간복잡도 : O(n), 공간복잡도 : O(1)
        for(int i = 0; i<nums.length; i +=2){
            sum += nums[i];
        }

        // 시간복잡도: O(1), 공간복잡도: O(1)
        return sum;
    }
}

/*
📊 복잡도 정리

**시간복잡도:**
정렬: O(n log n)
짝수 인덱스 합산: O(n)

전체 = O(n log n) + O(n)
     = O(n log n)         // log n > 1 이므로 O(n log n)이 지배적

> 최종 시간복잡도: O(n log n)


**공간복잡도:**
정렬 내부 추가 메모리: O(log n) ~ O(n)
기타 변수: O(1)

전체 = O(log n ~ n) + O(1)
     = O(log n ~ n)

> 최종 공간복잡도: O(log n) ~ O(n)

*//Solution.java
