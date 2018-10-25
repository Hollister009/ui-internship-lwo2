export class Stack {
  constructor() {
    this.collection = {};
    this.count = 0;
    this.size = this.count;
    this.value = this.collection[this.count];
  }

  push(el) {
    this.collection[this.count] = el;
    this.count = this.count + 1;
    this.size = this.count;
    return this.collection[this.count];
  }

  pop() {
    this.count = this.count - 1;
    this.size = this.count;
    delete this.collection[this.count];
    return;
  }

  isEmpty() {
    return (Object.keys(this.collection).length === 0);
  }

  size() {
    return this.size;
  }

  get last() {
    return this.collection[this.count];
  }
}
