export class Node {
  constructor(data) {
    this.data = data;
    this._next = null;
  }

  set next(node) {
    // consider not allowing null to avoid devious programming
    if (Object.prototype.isPrototypeOf(Node) || node === null) {
      this._next = node;
    } 
  }

  get next() {
    return this._next;
  }
}

export class LList {
  /* If no data is passed, will return an empty list */
  constructor(data = null) {
    if (!data) {
      this.head = null;
    } else {
      this.head = new Node(data);
    }
  }

  get last() {
    let last = this.head;
    while(last.next) {
      last = last.next;
    }
    return last;
  }

  get first() {
    return this.head;
  }

  index(value) {
    // Search for key
    // Return index or false
    let last = this.head;
    let index = 0;
    while (last) {
      if (last.data === value) {
        return index;
      }
      index++;
      last = last.next;
    }
    return false;
  }

  delete(value) {
    let index = this.index(value); // Returns false if not found
    if (index === false) { // Truthy pitfall
      return false;
    }
    if(index === 0) {
      this.head = this.head.next;
      return index;
    }
    let previous = this.head;
    for (let i = 0; i < this.index(value) - 1; i++) {
      previous = previous.next;
    }
    previous.next = previous.next.next;
    return index;
  }

  insertAfter(node, value) { // Condider generating node here
    let seeker = this.head;
    for (let i = 0; i < this.index(value); i++) {
      seeker = seeker.next;
    }
    node.next = seeker.next;
    seeker.next = node;
  }

  insertBefore(node, value) { // Condider generating node here
    let seeker = this.head;
    for (let i = 0; i < this.index(value) - 1; i++) {
      seeker = seeker.next;
    }
    node.next = seeker.next;
    seeker.next = node;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = new Node(data);
      let last = this.last;
      last.next = node;
    }
  }

  insertAtHead(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  popHead() {
    let data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  traverse() {
    // Returns a list of all element's data
    let temp = this.head;
    let elements = [];
    while (temp) {
      elements.push(temp.data);
      temp = temp.next;
    }
    return elements;
  }

  popLast() {
    // Loop to the second to last node to pop
    let last = this.head;
    let popped;
    while(last.next.next) {
      last = last.next;
    }
    popped = last.next;
    last.next = null;
    return popped;
  }

  clear() {
    this.head = null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
}