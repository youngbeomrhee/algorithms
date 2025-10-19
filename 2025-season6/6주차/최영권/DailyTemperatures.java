package LinkedList;

import java.util.Arrays;
import java.util.Stack;

/**
 * 시간복잡도 : temperatures 의 길이가 N일때, O(n)
 */
public class DailyTemperatures {
    public static void main(String[] args) {
        DailyTemperatures dailyTemperatures = new DailyTemperatures();
        int[] ints = dailyTemperatures.dailyTemperatures(new int[]{73, 74, 75, 71, 69, 72, 76, 73});
        System.out.println(Arrays.toString(ints));
    }

    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];  // 기본값 0으로 초기화됨
        Stack<Integer> stack = new Stack<>();  // 인덱스를 저장

        for (int i = 0; i < n; i++) {
            // 현재 온도가 스택에 있는 날들의 온도보다 높으면
            while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
                int prevIndex = stack.pop();
                answer[prevIndex] = i - prevIndex;  // 며칠 후인지 계산
            }

            // 현재 인덱스를 스택에 추가
            stack.push(i);
        }

        return answer;
    }
}
