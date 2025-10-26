class MyQueue {
    Stack<Integer> st1; // SC: O(n) - 요소 push용 스택 (입력 스택)
    Stack<Integer> st2; // SC: O(n) - 요소 pop, peek용 스택 (출력 스택)
    int peek; // SC: O(1) - 큐의 front 요소 캐싱
    
    // 생성자
    public MyQueue() { // TC: O(1)
        st1 = new Stack<>(); // TC: O(1), SC: O(1) 
        st2 = new Stack<>(); // TC: O(1), SC: O(1) 
        peek = -1; // TC: O(1), SC: O(1)
    }
    
    // 큐에 요소 추가 
    public void push(int x) { // TC: O(1), SC: O(1)
        if(st1.isEmpty()) { // TC: O(1) 
            peek = x; // TC: O(1) 첫 번째 요소를 peek으로 저장
        }
        st1.push(x); // TC: O(1) 
    }
    
    // 큐에서 요소 제거 및 반환 
    public int pop() { // TC: O(1) amortized, O(n) worst case, SC: O(1)
        if(!st2.isEmpty()) { // TC: O(1) 
           return st2.pop(); // TC: O(1) - 
        }
        // st2가 비어있으면 st1의 모든 요소를 st2로 이동
        while(!st1.isEmpty()) { // TC: O(n) 
            st2.push(st1.pop()); // TC: O(1) 
        }
        return st2.pop(); // TC: O(1) 
    }
    
    // 큐의 front 요소 확인 (제거하지 않음)
    public int peek() { // TC: O(1), SC: O(1)
        if(!st2.isEmpty()) { // TC: O(1) 
            return st2.peek(); // TC: O(1) 
        }
        return peek; // TC: O(1) 캐싱된 peek 값 반환
    }
    
    // 큐가 비어있는지 확인
    public boolean empty() { // TC: O(1), SC: O(1)
        return st1.isEmpty() && st2.isEmpty(); // TC: O(1) - 두 스택 모두 비어있는지 확인
    }
}


/*
전체 복잡도 분석

1. MyQueue() 생성자
   - st1, st2 초기화: O(1) + O(1) = O(2) = O(1)
   - peek 초기화: O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

2. push(int x)
   - isEmpty() 체크: O(1)
   - peek 업데이트: O(1)
   - st1.push(): O(1)
   - 전체 TC: O(1) + O(1) + O(1) = O(3) = O(1)
   - 전체 SC: O(1) - 추가 공간 사용 없음

3. pop()
   - st2가 비어있지 않은 경우: O(1)
   - st2가 비어있는 경우:
     * while 루프: n번 반복 (st1의 모든 요소 이동)
       - st1.pop(): O(1)
       - st2.push(): O(1)
     → 전체: O(n)
     * st2.pop(): O(1)
   - 최악의 경우 TC: O(n)
   - 분할 상환 TC: O(1) - 각 요소는 최대 1번만 st1→st2 이동
   - 전체 SC: O(1) - 추가 공간 사용 없음

4. peek()
   - st2.isEmpty() 체크: O(1)
   - st2.peek() 또는 peek 반환: O(1)
   - 전체 TC: O(1)
   - 전체 SC: O(1)

5. empty()
   - st1.isEmpty(): O(1)
   - st2.isEmpty(): O(1)
   - AND 연산: O(1)
   - 전체 TC: O(1) + O(1) + O(1) = O(3) = O(1)
   - 전체 SC: O(1)

전체 공간복잡도 (Overall SC):
- st1: O(n) - 최대 n개의 요소 저장
- st2: O(n) - 최대 n개의 요소 저장 (st1에서 이동)
- peek: O(1) - 단일 정수 값
- 주의: st1과 st2의 요소는 겹치지 않음 (한 요소는 둘 중 하나에만 존재)
- 최종 SC: O(n) - 총 n개의 요소만 저장

핵심 원리:
- 2개의 스택으로 큐 구현 (Two Stack 기법)
- st1: 입력 전용 (push)
- st2: 출력 전용 (pop, peek)
- st2가 비어있을 때만 st1→st2 이동 (lazy transfer)
- push: O(1), pop/peek: O(1) amortized
- peek 변수로 front 요소 캐싱하여 peek() 최적화
- n = 큐에 저장된 총 요소의 개수
*/
