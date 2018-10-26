export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let currNode = this.head;

      if (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
      node.prev = currNode;
      this.tail = node;
    }
    this.amount++;
  }

  iterate(callback) {
    let currNode = this.head;

    while (currNode.next) {
      callback(currNode);
      currNode = currNode.next;
    }
    callback(currNode);
  }

  pop() {
    let currNode = this.tail;

    if (this.amount === 1) {
      this.head = null;
      this.tail = null;
      this.amount--;
      return currNode;
    }

    this.tail = currNode.prev;
    this.tail.next = null;
    this.amount--;
    return currNode;
  }

  insertAfter(after, value) {
    let currNode = this.head;
    const childNode = new Node(value);
    while (currNode.next) {
      if (currNode.value === after) {
        const nextNode = currNode.next;
        currNode.next = childNode;
        childNode.prev = currNode;
        childNode.next = nextNode;
        nextNode.prev = childNode;
        this.amount++;
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  removeItem(value) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === value) {
        const prevNode = currNode.prev;
        const nextNode = currNode.next;
        prevNode.next = nextNode;
        if (!currNode.prev) {
          nextNode.prev = prevNode;
        }
        this.amount--;
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
