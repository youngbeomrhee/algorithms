package LinkedList;

import java.util.LinkedList;
import java.util.Queue;

public class ImplementStackUsingQueue {
    Queue<Integer> queue1 = new LinkedList<>();
    Queue<Integer> queue2 = new LinkedList<>();

    /**
     * 스택에 요소 추가
     * 시간복잡도: O(1)
     * - 비어있지 않은 큐에 add() 연산만 수행
     */
    public void push(int x) {
        if (queue1.isEmpty()) {
            queue2.add(x);
        } else {
            queue1.add(x);
        }
    }

    /**
     * 스택의 top 요소 제거 및 반환
     * 시간복잡도: O(n)
     * - n-1개의 요소를 다른 큐로 이동 (while 루프)
     * - 마지막 요소를 poll()로 반환
     */
    public int pop() {
        if (!queue1.isEmpty()) {
            while (queue1.size() > 1) {
                queue2.add(queue1.poll());
            }
            return queue1.poll();
        } else {
            while (queue2.size() > 1) {
                queue1.add(queue2.poll());
            }
            return queue2.poll();
        }
    }

    /**
     * 스택의 top 요소 조회 (제거하지 않음)
     * 시간복잡도: O(n)
     * - n-1개의 요소를 다른 큐로 이동
     * - 마지막 요소를 peek()로 확인 후 다시 이동
     */
    public int top() {
        if (!queue1.isEmpty()) {
            while (queue1.size() > 1) {
                queue2.add(queue1.poll());
            }
            Integer peek = queue1.peek();
            queue2.add(queue1.poll());
            return peek;
        } else {
            while (queue2.size() > 1) {
                queue1.add(queue2.poll());
            }
            Integer peek = queue2.peek();
            queue1.add(queue2.poll());
            return peek;
        }
    }

    /**
     * 스택이 비어있는지 확인
     * 시간복잡도: O(1)
     * - 두 큐의 isEmpty() 체크만 수행
     */
    public boolean empty() {
        return queue2.isEmpty() && queue1.isEmpty();
    }

}
