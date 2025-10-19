public class Queue {
    private int[] data; //데이터를 저장할 배열
    private int front; //앞쪽 인덱스 (제거할 위치)
    private int rear; //뒤쪽 인덱스(추가할 위치)
    private int size; //현재 큐의 크기
    private int capacity; //큐의 최대 용량

    //생성자
    public Queue(int capacity){
        this.capacity = capacity;
        data = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    //enqueue : 요소 추가
    public void enqueue(int value){
        if(isFull()){
            throw new RuntimeException("Queue is full");
        }
        rear = (rear + 1) % capacity; //순환구조
        data[rear] = value;
        size++;
    }

    // dequeue : 요소 제거
    public int dequeue(){
        if(isEmpty()){
            throw new RuntimeException("Queue is empty");
        }
        int value = data[front];
        front = (front + 1) % capacity; //순환구조
        size--;
        return value;
    }

    //peek : 얖쪽 요소 확인
    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Queue is empty");
        }
        return data[front];
    }


    // isEmpty : 큐가 비어 있는지 확인
    public boolean isEmpty(){
        return size == 0;
    }

    //isFull : 큐가 가득 찼는지 확인
    public boolean isFull(){
        return size == capacity;
    }

    // size : 큐의 크기
    public int size(){
        return size;
    }

    // 큐 상태 출력
    public void printQueue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.print("Queue (front to rear): [");
        for (int i = 0; i < size; i++) {
            int index = (front + i) % capacity;
            System.out.print(data[index]);
            if (i < size - 1) System.out.print(", ");
        }
        System.out.println("]");
        System.out.println("front=" + front + ", rear=" + rear + ", size=" + size);
    }

    public static void main(String[] args) {
        Queue queue = new Queue(5);

        System.out.println("=== Queue Test Start ===\n");

        // enqueue 테스트
        System.out.println("[Enqueue Test]");
        queue.enqueue(10);
        System.out.println("enqueue(10)");
        queue.printQueue();

        queue.enqueue(20);
        System.out.println("\nenqueue(20)");
        queue.printQueue();

        queue.enqueue(30);
        System.out.println("\nenqueue(30)");
        queue.printQueue();

        // peek 테스트
        System.out.println("\n[Peek Test]");
        System.out.println("peek(): " + queue.peek());
        queue.printQueue();

        // dequeue 테스트
        System.out.println("\n[Dequeue Test]");
        System.out.println("dequeue(): " + queue.dequeue());
        queue.printQueue();

        System.out.println("\ndequeue(): " + queue.dequeue());
        queue.printQueue();

        // 순환 테스트
        System.out.println("\n[Circular Test]");
        queue.enqueue(40);
        queue.enqueue(50);
        queue.enqueue(60);
        queue.enqueue(70);
        System.out.println("After enqueue(40, 50, 60, 70)");
        queue.printQueue();

        // isFull 테스트
        System.out.println("\n[isFull Test]");
        System.out.println("isFull: " + queue.isFull());

        // 예외 테스트
        System.out.println("\n[Exception Test]");
        try {
            queue.enqueue(80);
        } catch (RuntimeException e) {
            System.out.println("Overflow: " + e.getMessage());
        }

        while (!queue.isEmpty()) {
            queue.dequeue();
        }

        try {
            queue.dequeue();
        } catch (RuntimeException e) {
            System.out.println("Underflow: " + e.getMessage());
        }

        System.out.println("\n=== Test Complete ===");
    }

}
