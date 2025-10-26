// 스택을 사용하여 FIFO 큐 구현
class MyQueue {
    private inStack: number[]; // 입력용 스택
    private outStack: number[]; // 출력용 스택

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    // 시간 복잡도: O(n)
    push(x: number): void {
        this.inStack.push(x);
    }

    // 시간 복잡도: O(1) 평균, O(n) 최악
    pop(): number {
        if (this.outStack.length === 0) {
            // outStack이 비어있을 때 inStack의 모든 원소를 outStack으로 이동
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()); // O(1) * n = O(n)
            }
        }
        return this.outStack.pop();
    }

    // 시간 복잡도: O(1) 평균, O(n) 최악
    peek(): number {
        // outStack이 비어있으면 inStack의 모든 원소를 outStack으로 이동
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()); // O(1) * n = O(n)
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    // 시간 복잡도: O(1)
    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const queueResults = [];

const myQueue = new MyQueue();
queueResults.push(null);

myQueue.push(1);
queueResults.push(null);

myQueue.push(2);
queueResults.push(null);

const queuePeekResult = myQueue.peek();
queueResults.push(queuePeekResult);

const queuePopResult = myQueue.pop();
queueResults.push(queuePopResult);

const queueEmptyResult = myQueue.empty();
queueResults.push(queueEmptyResult);

console.log(queueResults);
