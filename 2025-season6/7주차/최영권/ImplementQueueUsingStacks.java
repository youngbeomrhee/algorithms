package LinkedList;

import java.util.Stack;

public class ImplementQueueUsingStacks {
    Stack<Integer> inStack = new Stack<>();
    Stack<Integer> outStack = new Stack<>();

    public ImplementQueueUsingStacks() {

    }

    public static void main(String[] args) {
        ImplementQueueUsingStacks i = new ImplementQueueUsingStacks();
        i.push(1);
        i.push(2);
        System.out.println(i.pop());
        System.out.println(i.pop());

    }

    /**
     * 큐에 요소 추가
     * 시간복잡도: O(1)
     * - inStack에 push() 연산만 수행
     */
    public void push(int x) {
        inStack.push(x);
    }

    /**
     * 큐의 front 요소 제거 및 반환
     * 시간복잡도: O(1) amortized, 최악 O(n)
     * - outStack이 비어있으면: inStack의 모든 요소를 outStack으로 이동 → O(n)
     * - outStack에 요소가 있으면: 바로 pop() → O(1)
     * - 각 요소는 최대 2번(in→out, out→제거)만 이동되므로 amortized O(1)
     */
    public int pop() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
            return outStack.pop();
        }
        return outStack.pop();
    }

    /**
     * 큐의 front 요소 조회 (제거하지 않음)
     * 시간복잡도: O(1) amortized, 최악 O(n)
     * - pop()과 동일한 로직, peek()만 다름
     * - outStack이 비어있으면 inStack 요소들을 이동 → O(n)
     * - outStack에 요소가 있으면 바로 peek() → O(1)
     */
    public int peek() {
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
            return outStack.peek();
        }
        return outStack.peek();
    }

    /**
     * 큐가 비어있는지 확인
     * 시간복잡도: O(1)
     * - 두 스택의 empty() 체크만 수행
     */
    public boolean empty() {
        return outStack.empty() && inStack.empty();
    }
}
