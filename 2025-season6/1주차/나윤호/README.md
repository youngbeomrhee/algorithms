# 561 Array Partition

## 해법
- 시간 복잡도: O(n log n)
- 정렬 후 한번 더 순회가 필요하여 log n의 시간 복잡도가 추가됨
- Claude Code의 피드백으로는 counting sort를 사용하면 추가적인 최적화가 가능하다고함
```typescript
function arrayPairSum(nums: number[]): number {
    const sorted = nums.sort((a, b) => a-b);

    let result = 0;
    for(let i = 0; i < nums.length; i+=2) {
        result += sorted[i];
    }

    return result
};
```

# 121. Best Time to Buy and Sell Stock

## 해법
- 시간 복잡도: `O(n)`
- 배열을 한번 순회하면서 "시간 순서"에서 가장 큰 수를 찾음
```typescript
function maxProfit(prices: number[]): number {
    let result = 0;
    let min: number | null = null;

    for(const price of prices) {
        if(min !== null) {
            const calcMax = price - min;
            if(calcMax > result) {
                result = calcMax
            }
        }

        if(min === null || min > price) {
            min = price
        }
    }
    return result
};
```