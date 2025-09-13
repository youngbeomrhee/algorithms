class Solution {
    public int maxProfit(int[] prices) {   
        // 시간 : O(1), 공간 : O(1)
        int minSoFar = Integer.MAX_VALUE; //지금까지 본 최저가
        int maxProfit = 0; //최대 이익

        //시간 : O(n), 공간 : O(1)
        for(int p : prices){
            if(p < minSoFar){
                minSoFar = p; //최저가 갱신
            }
            else{
                maxProfit = Math.max(maxProfit, p - minSoFar); //현재 팔면 얻는 수익
            }
        }

        // 시간 : O(1), 공간 : O(1)
        return maxProfit;
    }
}

/*
📊 복잡도 분석

시간복잡도:
- 변수 초기화: O(1)
- prices 배열 순회: 길이 N만큼 반복 → O(N)
  (루프 안의 비교, 대입, Math.max 연산은 전부 O(1))
- 반환: O(1)
=> 전체 = O(1) + O(N) + O(1) = O(N)

공간복잡도:
- 입력 배열 prices는 제외 (주어진 입력)
- 추가로 쓰는 변수: minSoFar, maxProfit, p → O(1)
=> 전체 = O(1)
*/
