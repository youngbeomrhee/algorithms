/*
232. Implement Queue using Stacks
Solved
Easy
Topics
premium lock icon
Companies
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.
 

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
 */
export class MyStack<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(x: T) {
    this.data.push(x);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  empty() {
    return this.data.length === 0;
  }
}

// 최종 TC: O(1) + Amortized O(1) + Amortized O(1) + O(1) = O(4) = O(1)
export class MyQueue {
  private inputStack: MyStack<number>;
  private outputStack: MyStack<number>;

  constructor() {
    this.inputStack = new MyStack<number>();
    this.outputStack = new MyStack<number>();
  }

  // Time: O(1)
  push(x: number): void {
    this.inputStack.push(x);
  }

  // TC: Amortized O(1)
  pop(): number {
    this.moveInputToOutput();
    return this.outputStack.pop()!;
  }

  // TC: Amortized O(1)
  peek(): number {
    this.moveInputToOutput();
    return this.outputStack.peek()!;
  }

  // TC: O(1)
  empty(): boolean {
    return this.inputStack.empty() && this.outputStack.empty();
  }

  /**
   * 헬퍼 메서드: inputStack의 모든 요소를 outputStack으로 이동
   * 순서가 뒤집혀서 가장 오래된 요소가 먼저 접근 가능하게 됨
   * Time: O(n), but amortized O(1) per operation
   */
  private moveInputToOutput(): void {
    // outputStack이 비어있을 때만 이동
    if (this.outputStack.empty()) {
      while (!this.inputStack.empty()) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
  }
}
