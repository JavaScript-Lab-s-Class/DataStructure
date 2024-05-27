class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

first = new Node(12);
console.log(first);

first.next = new Node(13);
console.log(first.next);

first.next.prev = first;

console.log(first);