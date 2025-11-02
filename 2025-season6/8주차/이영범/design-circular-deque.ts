/*
641. Design Circular Deque
Solved
Medium
Topics
premium lock icon
Companies
Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.


Example 1:

Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4


Constraints:

1 <= k <= 1000
0 <= value <= 1000
At most 2000 calls will be made to insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull.
*/
export class MyCircularDeque {
  private list: number[];
  private front: number;
  private rear: number;
  private size: number;
  private readonly capacity: number;

  constructor(k: number) {
    this.list = new Array(k);
    this.capacity = k;
    this.size = 0;
    // 초기값: front와 rear는 첫 삽입 시 설정됨
    this.front = 0;
    this.rear = k - 1; // rear는 뒤에서 시작 (insertLast 시 (rear+1) % capacity)
  }

  /**
   * Deque 앞쪽에 요소 삽입
   * TC: O(1)
   */
  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    // front를 앞으로 이동 (circular)
    // 예: front=0, capacity=5 → front=4
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.list[this.front] = value;
    this.size++;

    return true;
  }

  /**
   * Deque 뒤쪽에 요소 삽입
   * TC: O(1)
   */
  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    // rear를 뒤로 이동 (circular)
    this.rear = (this.rear + 1) % this.capacity;
    this.list[this.rear] = value;
    this.size++;

    return true;
  }

  /**
   * Deque 앞쪽 요소 삭제
   * TC: O(1)
   */
  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    // front를 뒤로 이동
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return true;
  }

  /**
   * Deque 뒤쪽 요소 삭제
   * TC: O(1)
   */
  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    // rear를 앞으로 이동
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;

    return true;
  }

  /**
   * Deque 앞쪽 요소 조회
   * Time: O(1)
   */
  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[this.front];
  }

  /**
   * Deque 뒤쪽 요소 조회
   * TC: O(1)
   */
  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.list[this.rear];
  }

  /**
   * Deque가 비어있는지 확인
   * TC: O(1)
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Deque가 가득 찼는지 확인
   * TC: O(1)
   */
  isFull(): boolean {
    return this.size === this.capacity;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
