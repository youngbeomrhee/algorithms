class MyStack {
  private queue1: number[] = [];
  private queue2: number[] = [];

  constructor() {}

  push(x: number): void {
    // 요소를 스택에 추가
    this.queue1.push(x);
  }

  pop(): number {
    // 스택의 맨 위 요소를 제거하고 반환
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()!);
    }
    const poppedValue = this.queue1.shift()!;
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedValue;
  }

  top(): number {
    // 스택의 맨 위 요소를 반환
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift()!);
    }
    const topValue = this.queue1.shift()!;
    this.queue2.push(topValue);
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return topValue;
  }

  empty(): boolean {
    // 스택이 비어 있는지 확인
    return this.queue1.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
