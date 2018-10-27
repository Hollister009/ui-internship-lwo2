export class Stack {
  constructor() {
    this.collection = {};
    this.size = 0;
    this.collection.last = null;
  }

  push(value) {
    const item = new Item(value);

    if (this.size > 0) {
      item.prev = this.collection[this.size-1];
    }

    this.collection[this.size] = item;
    this.collection.last = this.collection[this.size];
    this.size++;
    return this.collection.last.value;
  }

  pop() {
    if (this.size > 0) {
      const element = this.collection.last;
      this.collection.last = element.prev;
      delete this.collection[this.size-1];
      this.size--;
      return element.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }

  get last() {
    return this.collection.last;
  }
}

class Item {
  constructor(value) {
    this.value = value;
    this.prev;
  }
}
