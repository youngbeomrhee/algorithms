//left는 살 날(최저가 후보), right는 팔 날로 두고 오른쪽으로만 전진.
//prices[right] < prices[left]면, 더 싼 날을 만난 것이므로 left = right로 갱신.
// 그 외에는 maxProfit = max(maxProfit, prices[right] - prices[left])만 갱신.

class SolutionTwoPointer{
  public int maxProfit(int[] prices){
    //시간 O(1), 공간 O(1)
    int left = 0; // 살 날(최저가 후보)
    int maxProfit = 0; //최대 이익

    //시간 O(N), 공간 O(1)
    for(int right = 1; right <prices.length; right++){
      if(prices[right] < prices[left]){
        //더 싼 날 발견 + 그 날을 살 날로 변경
        left = right; //시간 O(1), 공간 O(1)
      }
      else{
        maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
      }
    }
    // 시간 O(1), 공간 O(1)
    return maxProfit;
  }
}

/*
📊 복잡도 분석
- 시간: for 루프 한 번 = O(N), 나머지는 전부 O(1) 연산 → 전체 O(N)
- 공간: 보조 변수 몇 개만 → O(1)

🧠 어떻게 생각했나 : Sliding Window(두 포인터) 버전
- "산 뒤에만 팔 수 있음" 제약을 투 포인터로 자연스럽게 강제.
- 왼쪽 포인터가 항상 오른쪽 포인터보다 "이전"을 가리킴 → 시간 순서 유지.

🔎 타당한 근거(정당성)
- 불변식: 반복문 동안 항상 left ≤ right, 그리고 left는 right 이전 구간에서 만난 최소값의 인덱스가 되도록 유지.
- 만약 더 작은 값이 나타나면 그 지점 이후의 최적 매수일은 그 값 이후에 존재하므로 left를 그 값으로 옮겨도 최적해를 잃지 않음(교환 논법).
*/
