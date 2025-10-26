// 큐를 사용하여 스택 구현
class MyStack {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    // 시간 복잡도: O(n) - 새로운 원소를 맨 앞으로 이동시키기 위해 n번 shift/push
    // 공간 복잡도: O(1) - 추가 공간 사용 x
    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length - 1; i++) {
            const last = this.queue.shift();
            this.queue.push(last);
        }
    }

    // 시간 복잡도: O(1) - 큐의 맨 앞 원소 제거
    // 공간 복잡도: O(1)
    pop(): number {
        return this.queue.shift();
    }

    // 시간 복잡도: O(1) - 큐의 맨 앞 원소 조회
    // 공간 복잡도: O(1)
    top(): number {
        return this.queue[0];
    }

    // 시간 복잡도: O(1) - 큐 길이 확인
    // 공간 복잡도: O(1)
    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty(_
 * var param_4 = obj.empty()
 */

const results = [];

const obj = new MyStack();
results.push(null);

obj.push(1);
results.push(null);

obj.push(2);
results.push(null);

const topResult = obj.top();
results.push(topResult);

const popResult = obj.pop();
results.push(popResult);

const emptyResult = obj.empty();
results.push(emptyResult);

console.log(results);
