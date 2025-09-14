/*
  전체 시간복잡도(Time Complexity): O(n) + O(n/2) + O(n/2) + O(n/2) -> O(n + n/2 + n/2 + n/2) -> O(2.5n) -> O(n)
  전체 공간복잡도(Space Complexity): O(n) + O(n/2) + O(n/2) -> O(n + n/2 + n/2) -> O(2n) -> O(n)
  (n: linked list의 노드 개수)
*/
function isPalindrome(head: ListNode | null): boolean {
    const nodeToArray = toArray(head); // TC: O(n), SC: O(n)
    const nodesLength = nodeToArray.length;
    const half = Math.floor(nodesLength / 2);

    const firstHalf = nodeToArray.slice(0, half); // TC: O(n/2), SC: O(n/2)
    const secondStart = nodesLength % 2 === 0 ? half : half + 1;
    const secondHalf = nodeToArray.slice(secondStart).reverse(); // TC: O(n/2), SC: O(n/2)

    return firstHalf.every((val, i) => val === secondHalf[i]); // TC: O(n/2)
}
/*
  전체 시간복잡도(Time Complexity): O(n)
  전체 공간복잡도(Space Complexity): O(n)
  (n: linked list의 노드 개수)
*/
function toArray(node: ListNode | null): number[] {
    const result: number[] = []; // SC: O(n)
    let current = node;

    while (current !== null) { // TC: O(n)
        result.push(current.val); // TC: O(1)
        current = current.next;
    }

    return result;
}