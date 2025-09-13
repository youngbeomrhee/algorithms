class Solution {
    fun arrayPairSum(nums: IntArray): Int {
        // 배열을 오름차순으로 정렬
        nums.sort()
        
        var sum = 0
        // 인접한 두 숫자를 짝지어서 각 쌍의 최솟값을 더함
        for (i in 0 until nums.size step 2) {
            sum += nums[i]
        }
        
        return sum
    }
}