/*
225. Implement Stack using Queues
Solved
Easy
Topics
premium lock icon
Companies
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 

Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, top, and empty.
All the calls to pop and top are valid.
 

Follow-up: Can you implement the stack using only one queue?
*/
class MyQueue<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(x: T) {
    this.data.push(x);
  }
  pop() {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  empty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
}
// 최종 TC: O(1) + O(n) + O(n) + O(1) = O(2n + 2) -> O(n)
class MyStack1 {
  s1;
  s2;
  constructor() {
    this.s1 = new MyQueue<number>();
    this.s2 = new MyQueue<number>();
  }

  // TC: O(1)
  push(x: number): void {
    this.s1.push(x);
  }

  // TC: O(n)
  pop(): number {
    let lastPopped;
    while (!this.s1.empty()) {
      lastPopped = this.s1.pop();
      if (this.s1.peek()) {
        this.s2.push(lastPopped);
      }
    }
    this.s1 = this.s2;
    this.s2 = new MyQueue<number>();
    return lastPopped;
  }

  // TC: O(n)
  top(): number {
    let lastPopped;
    while (!this.s1.empty()) {
      lastPopped = this.s1.pop();
      this.s2.push(lastPopped);
    }
    this.s1 = this.s2;
    this.s2 = new MyQueue<number>();
    return lastPopped;
  }

  // TC: O(1)
  empty(): boolean {
    return this.s1.empty();
  }
}

// 최종 TC: O(1) + O(n) + O(1) + O(1) = O(n + 3) -> O(n)
class MyStack2 {
  q: MyQueue<number>;
  constructor() {
    this.q = new MyQueue<number>();
  }
  // TC: O(n)
  push(x: number): void {
    const size = this.q.size();
    this.q.push(x);
    for (let i = 0; i < size; i++) {
      this.q.push(this.q.pop()!);
    }
  }
  // TC: O(1)
  pop(): number {
    return this.q.pop()!;
  }
  // TC: O(1)
  top(): number {
    return this.q.peek();
  }
  // TC: O(1)
  empty(): boolean {
    return this.q.empty();
  }
}
