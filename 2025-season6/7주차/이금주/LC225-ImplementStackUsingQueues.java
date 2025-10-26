class MyStack {
    private Queue<Integer> queue; // SC: O(n) - n개의 요소 저장
    
    // 생성자
    public MyStack() { // TC: O(1)
        queue = new LinkedList<>(); // TC: O(1), SC: O(1) - 빈 큐 생성
    }
    
    // 스택에 요소 추가 (LIFO를 위해 큐를 재정렬)
    public void push(int x) { // TC: O(n), SC: O(1)
        queue.add(x); // TC: O(1) 
        // 새로 추가한 요소를 맨 앞으로 보내기 위해 나머지를 뒤로 회전
        for(int i = 0; i < queue.size() - 1; i++) { // TC: O(n) - (n-1)번 반복
            queue.add(queue.poll()); // TC: O(1) - 앞에서 빼서 뒤에 추가
        }
    }
    
    // 스택의 top 요소 제거 및 반환
    public int pop() { // TC: O(1), SC: O(1)
        return queue.poll(); // TC: O(1) 
    }
    
    // 스택의 top 요소 확인 (제거하지 않음)
    public int top() { // TC: O(1), SC: O(1)
        return queue.peek(); // TC: O(1)
    }
    
    // 스택이 비어있는지 확인
    public boolean empty() { // TC: O(1), SC: O(1)
        return queue.isEmpty(); // TC: O(1) 
    }
}

/*
전체 복잡도 분석

1. MyStack() 생성자
   - LinkedList 초기화: O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

2. push(int x)
   - queue.add(x): O(1)
   - for 루프: (n-1)번 반복
     * queue.poll(): O(1)
     * queue.add(): O(1)
     → 루프 전체: O(n-1) = O(n)
   - 전체 TC: O(1) + O(n) = O(n)
   - 전체 SC: O(1) - 추가 공간 사용 없음

3. pop()
   - queue.poll(): O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

4. top()
   - queue.peek(): O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

5. empty()
   - queue.isEmpty(): O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

전체 공간복잡도 (Overall SC):
- queue: O(n) - n개의 요소 저장
- 기타 변수들: O(1)
- 최종 SC: O(n)

핵심 원리:
- Queue를 사용해 Stack 구현
- push할 때마다 새 요소를 맨 앞으로 이동시켜 LIFO 순서 유지
- push: O(n), pop/top/empty: O(1)
- 새 요소가 항상 큐의 맨 앞에 위치하도록 재정렬
- TC는 각 메서드 호출마다 실행시간이 다름 
*/
