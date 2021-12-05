export class Node {
  private val: any;
  private next: Node;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }

  public getVal() {
    return this.val;
  }

  public getNext() {
    return this.next;
  }

  public setVal(val: any) {
    this.val = val;
  }

  public setNext(next: Node) {
    this.next = next;
  }
}

export class SinglyLinkedList {
  private head: Node;
  private tail: Node;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public getHead() {
    return this.head;
  }

  public getTail() {
    return this.tail;
  }

  public push(val: any) {
    let newNode = new Node(val);
    if (this.isEmpty(this.head, this.length)) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  public pop() {
    let valOfRemovedNode: any;

    if (this.isEmpty(this.head, this.length)) return;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let current: Node = this.head;
    let newTail = current;
    while (current.getNext()) {
      newTail = current;
      current = current.getNext();
    }
    this.tail = newTail;
    this.tail.setNext(null);
    this.length--;

    return current.getVal();
  }

  private isEmpty(head: Node, length: number) {
    return !head && length === 0;
  }
}

let list = new SinglyLinkedList();
console.log(list.pop());
list.push("Hello");
list.push("my");
list.push(30);
// list.push("lil");
// list.push("drop");
console.log(list.getHead());
console.log(list.getTail());
console.log(list.pop());
console.log(list.getTail());
