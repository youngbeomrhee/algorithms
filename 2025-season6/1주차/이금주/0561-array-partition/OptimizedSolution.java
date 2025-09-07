// 사실 이거는 잘 모르겠음... 
//    비교 정렬 O(N log N)을 피하고 O(N + K) (K=20001)로 해결하는 카운팅 스캔 방식
//    아이디어: 정렬된 상태에서 2개씩 묶일 때, 각 쌍의 "첫 번째 원소(=min)"만 누적
//    전체 시간복잡도: O(N + K)
//    전체 공간복잡도: O(K)
//    (N = nums.length, K = MAX - MIN + 1)

class OptimizedSolution{
  // 상수 정의: 런타임 반복 없음 (O(1) 초기화)
  private static final int MIN = -10000;
  private static final int MAX = 10000;
  private static final int OFFSET = -MIN; //음수 보정용, 10000
  private static final int SIZE = MAX - MIN + 1; //20001

  public int arrayPairSum(int[] nums){
    // 카운팅 배열 할당 (JVM이 0으로 초기화)
    // 시간: O(K) 초기화(자바는 0으로 초기화), 공간: O(K)
    int[] count = new int[SIZE]; //값 빈도 카운트 O(K) 공간

    // 입력 배열의 빈도를 누적
    // 시간: O(n), 공간: O(1) 추가
    for(int v : nums) count[v + OFFSET]++;

    // 누적 합과 토글 플래그
    // take == true일 때 현재 값은 "쌍의 첫 번째(=min)"이므로 합산
    // 시간복잡도: O(1), 공간복잡도: O(1)
    int sum = 0;
    boolean take = true; //true일 때 짝의 첫번째만 누적

    //작은 값부터 스캔(정렬된 효과)
    // 시간복잡도: for 루프 K회 + while의 총 반복 N회 ⇒ O(K + N), 공간복잡도: O(1) 추가
    for(int v=MIN; v<=MAX; v++){
      int idx = v + OFFSET;

      // 해당 값이 count[idx]번 등장 ⇒ 정렬된 배열에서 그만큼 연속으로 나타난다고 가정
      // while의 전체 반복 횟수 합은 정확히 N회
      while(count[idx] > 0){
        // 쌍의 첫 번째 차례면 누적 (min)
        // 시간복잡도: O(1)
       if (take) sum += v;
          // 첫 번째 ↔ 두 번째 번갈아 처리 (두 번째는 더하지 않음), 시간복잡도: O(1)
          take = !take;
          // 해당 값 1개 소비, 시간복잡도: O(1)
          count[idx]--;
        }
      }
      // 시간복잡도: O(1), 공간복잡도: O(1)
      return sum;
    }
    
}
