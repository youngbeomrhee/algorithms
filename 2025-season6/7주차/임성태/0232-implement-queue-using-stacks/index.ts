class MyQueue {
  private inputStack: number[] = [];
  private outputStack: number[] = [];

  constructor() {}

  // 모든 push는 inputStack 에 쌓는다: O(1)
  push(x: number): void {
    this.inputStack.push(x);
  }
   
  // 큐의 앞에서 꺼내기: 평균 O(1), (이동 순간엔 O(n))
  pop(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
    return this.outputStack.pop()!;
  }
  
  // 큐의 앞을 보기: 평균 O(1)
  peek(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  // 비었는지 확인: O(1)
  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
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
