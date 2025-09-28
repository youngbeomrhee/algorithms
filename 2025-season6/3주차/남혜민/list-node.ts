export class ListNode {
    public value: number;
    public next: ListNode | null;
    constructor(value?: number, next?: ListNode | null) {
        this.value = value === undefined ? 0 : value;
        this.next = next === undefined ? null : next;
    }
}
