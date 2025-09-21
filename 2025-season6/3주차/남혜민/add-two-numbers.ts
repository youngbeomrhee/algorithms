import { ListNode } from './list-node';

// 두 연결 리스트를 순회하면서 자릿수 올림 처리
// 최악의 경우: l1을 m번, l2를 n번 모두 확인 + carry 처리 1번
// 전체 시간 복잡도: O(m + n + 1) = O(m + n)
// 전체 공간 복잡도: O(max(m, n) + 1) = O(max(m, n)) - 결과 리스트 저장
function addTwoNumbers1(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let dummy = new ListNode(0); // 더미 헤드 노드 생성
    let current = dummy;
    let carry = 0;

    // O(max(m, n)) - 더 긴 리스트만큼 반복
    // 실제로는 l1의 m개 노드 + l2의 n개 노드를 모두 처리하므로 O(m+n)
    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            // O(1) - l1이 존재하면 m (l1 의 노드 개수)번 실행
            sum += l1.value; //값 더하기
            l1 = l1.next; // 다음 노드로 이동
        }

        if (l2) {
            // O(1) - l2가 존재하면 n (l2 의 노드 개수)번 실행
            sum += l2.value; // 값 더하기
            l2 = l2.next; // 다음 노드로 이동
        }

        carry = Math.floor(sum / 10); // 자릿수 올림 계산
        current.next = new ListNode(sum % 10); // 결과를 위한 새 노드 생성
        current = current.next;
    }

    return dummy.next; // 결과 반환
}

// 테스트 케이스
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342 (m=3)
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465 (n=3)
const result = addTwoNumbers1(l1, l2); // 807 -> [7,0,8] (총 3+3=6번의 노드 처리)

// 결과 출력 함수 - O(결과 리스트 길이)
function printList(head: ListNode | null): number[] {
    const result: number[] = [];
    while (head) {
        // O(max(m,n)+1) - 결과 리스트 순회
        result.push(head.value); // O(1)
        head = head.next; // O(1)
    }
    return result;
}

console.log(printList(result)); // [7, 0, 8]
