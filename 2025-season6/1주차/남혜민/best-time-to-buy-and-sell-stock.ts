// 1. Greedy를 활용해 최적의 이익 찾기
// - 배열을 한 번 순회하면서
// 1) 현재까지의 최저 매수가격 비교
// 2) 현재 가격에서 팔 때의 최대 이익을 계산

// 전체 시간 복잡도: O(n-1) => O(n)
// - 배열을 한 번만 순회하면서 최저가와 최대 이익을 갱신
// - n은 prices 배열의 길이
function maxProfit1(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // O(n) - n-1번 반복
        const currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }

        const todayPrice = currentPrice - minPrice;
        if (todayPrice > maxProfit) {
            maxProfit = todayPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit1([7, 6, 4, 3, 1])); // 0
