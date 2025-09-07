/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/
function maxProfit(prices: number[]): number {
    return maxProfit2(prices)
}

/* 
    기본적인 해법
    최종 시간복잡도 O(n)
    최종 공간복잡도: O(1) + O(1) -> O(2) -> O(1)
*/
function maxProfit1(prices: number[]): number {
    // early return
    if (prices.length === 1) return 0

    // 최대이익
    let maxProfit = 0 // SC: O(1)
    let minPrice = prices[0] // SC: O(1)

    // 모든 가격을 순회하며 최소값과 최대이익을 계산
    prices.forEach((price) => { // TC: O(n)
        // 현재값과 비교해 최소값 갱신
        minPrice = Math.min(minPrice, price)
        // 현재값과 최소값의 차이가 최대이익인지 확인하고 갱신
        maxProfit = Math.max(maxProfit, price - minPrice)
    })
    return maxProfit
};


/*
    최적화 해법
    (prices.lenght를 n이라고 했을 때)
    최종 시간복잡도 O(n - 1) -> O(n)
    최종 공간복잡도: O(1) + O(1)
*/
function maxProfit2(prices: number[]): number {
    if (prices.length === 1) return 0

    let lowPrice: number = prices[0] // SC: O(n)
    let maxProfit: number = 0 // SC: O(n)

    for (let i = 1; i < prices.length; i++) { // TC: O(n - 1)
        const currentPrice = prices[i]
        // 현재가격이 lowPrice보다 작으면 lowPrice 갱신
        if (currentPrice < lowPrice) { // 최소값 계산만 매번 수행하고 조건부로 최대값 갱신
            lowPrice = currentPrice
        } else {
            maxProfit = Math.max(maxProfit, currentPrice - lowPrice)
        }
    }
    return maxProfit
}