class Solution {
    fun maxProfit(prices: IntArray): Int {
        // 최소 값을 찾기 위한 변수
        var maxProfit = 0
        // 최대 이익 금액을 찾기 위한 변수 (마이너스 일 경우 0)
        var min = prices[0]

        for (i in 1 until prices.size) {
            if (prices[i] < min) {
	              // 최소 값 찾기
                min = prices[i]
            } else if (maxProfit < prices[i] - min) {
		            // 최대 이익 값 저장
                maxProfit = prices[i] - min
            }
        }
        return maxProfit
    }
}