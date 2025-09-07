[문제링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

문제 : `배열 위치에 주가가 주어지는데 가장 이익을 많이보는 가격을 계산`

**Constraints:**

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

풀이 :

1. 매수 최저점 , 최대 이익금을 세팅
2. 배열 순회 하면서 
    1. 현재 매수 최저점보다 작으면 매수 최저점 갱신
    2. 현재 매수 최저점보다 크면 최대 이익금 비교
    

시간 복잡도 : 배열의 길이가 n일떄, O(n)

```java

// 배열 위치에 주가가 주어지는데 가장 이익을 많이보는 가격을 계산
// 시간복잡도 : O(n)
public class Stock {

    public int maxProfit(int[] prices) {
        int maxPrice = Integer.MIN_VALUE; // 최대 이익금
        int minValue = Integer.MAX_VALUE; // 매수 최저점
        for (int price : prices) {
            if (price < minValue) {
                minValue = price;
            } else {
                int profit = price - minValue;
                maxPrice = Math.max(maxPrice, profit);
            }
        }
        return Math.max(maxPrice, 0);
    }

    public static void main(String[] args) {
        int i = new Stock().maxProfit(new int[]{7,6,4,3,1});
        int i2 = new Stock().maxProfit(new int[]{7,1,5,3,6,4});
        System.out.println(i);
        System.out.println(i2);
    }
}

```