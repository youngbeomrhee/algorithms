public class Stack {
    private int[] data; //데이터를 저장할 배열
    private int top; //스택의 최상단 인덱스
    private int capacity; //스택의 최대 용량

    //생성자
    public Stack(int size){
        data = new int[size];
        capacity = size;
        top = -1; //빈 스택의 경우, -1
    }

    //push 요소 추가
    public void push(int value){
        if(isFull()){
            throw new RuntimeException("Stack is full");
        }
        data[++top] = value;  // top을 증가시키고 값 저장
    }

    // pop
    public int pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }
        return data[top--]; // top을 감소시키고 값 반환
    }

    //  최상단 요소 확인
    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is empty");
        }
        return data[top];
    }

    public boolean isEmpty(){
        return top == -1;
    }
    public boolean isFull(){
        return top == capacity - 1;
    }

    public int size(){
        return top + 1;
    }
    // main 메서드 추가
    public static void main(String[] args) {
        // 크기 5인 스택 생성
        Stack stack = new Stack(5);

        System.out.println("=== 스택 테스트 시작 ===");

        // push 테스트
        System.out.println("\n[Push 테스트]");
        stack.push(10);
        System.out.println("push(10) 완료");

        stack.push(20);
        System.out.println("push(20) 완료");

        stack.push(30);
        System.out.println("push(30) 완료");

        // peek 테스트
        System.out.println("\n[Peek 테스트]");
        System.out.println("peek(): " + stack.peek());  // 30
        System.out.println("peek(): " + stack.peek());  // 30 (제거 안 됨)

        // size 테스트
        System.out.println("\n[Size 테스트]");
        System.out.println("size: " + stack.size());  // 3

        // pop 테스트
        System.out.println("\n[Pop 테스트]");
        System.out.println("pop(): " + stack.pop());  // 30
        System.out.println("pop(): " + stack.pop());  // 20
        System.out.println("size: " + stack.size());  // 1

        // isEmpty 테스트
        System.out.println("\n[isEmpty 테스트]");
        System.out.println("isEmpty: " + stack.isEmpty());  // false

        stack.pop();  // 10 제거
        System.out.println("마지막 요소 pop 후");
        System.out.println("isEmpty: " + stack.isEmpty());  // true

        // 스택 가득 채우기
        System.out.println("\n[isFull 테스트]");
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        System.out.println("5개 push 후");
        System.out.println("isFull: " + stack.isFull());  // true

        // 예외 테스트
        System.out.println("\n[예외 테스트]");
        try {
            stack.push(6);  // 오버플로우
        } catch (RuntimeException e) {
            System.out.println("오버플로우 발생: " + e.getMessage());
        }

        // 모두 pop
        while (!stack.isEmpty()) {
            stack.pop();
        }

        try {
            stack.pop();  // 언더플로우
        } catch (RuntimeException e) {
            System.out.println("언더플로우 발생: " + e.getMessage());
        }

        System.out.println("\n=== 테스트 완료 ===");
    }

}
